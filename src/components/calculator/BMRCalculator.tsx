import { useState } from 'react';
import FormInputs from './FormInputs';
import ResultsDisplay from './ResultsDisplay';
import { 
  calculateBMRResults, 
  BMRInputs, 
  BMRResults,
  lbsToKg,
  ftInToCm
} from '../../utils/calculations';

const BMRCalculator = () => {
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<BMRResults | null>(null);
  
  const [formData, setFormData] = useState<{
    age: string;
    gender: 'male' | 'female';
    weight: string;
    weightUnit: 'kg' | 'lbs';
    height: string;
    heightUnit: 'cm' | 'ft';
    heightInches: string;
    activityLevel: 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive';
  }>({
    age: '',
    gender: 'male',
    weight: '',
    weightUnit: 'kg',
    height: '',
    heightUnit: 'cm',
    heightInches: '',
    activityLevel: 'moderatelyActive',
  });

  const handleUnitChange = (unit: 'metric' | 'imperial') => {
    setUnits(unit);
    setFormData(prev => ({
      ...prev,
      weightUnit: unit === 'metric' ? 'kg' : 'lbs',
      heightUnit: unit === 'metric' ? 'cm' : 'ft',
      // Reset height values when switching units to avoid confusion
      height: '',
      heightInches: '',
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert form data to the right format and units
    let weight = parseFloat(formData.weight);
    let height = parseFloat(formData.height);
    
    // Convert imperial to metric for calculation
    if (formData.weightUnit === 'lbs') {
      weight = lbsToKg(weight);
    }
    
    if (formData.heightUnit === 'ft') {
      const inches = parseFloat(formData.heightInches || '0');
      height = ftInToCm(height, inches);
    }
    
    const bmrInputs: BMRInputs = {
      age: parseInt(formData.age),
      gender: formData.gender,
      weight,
      height,
      activityLevel: formData.activityLevel,
    };
    
    const calculatedResults = calculateBMRResults(bmrInputs);
    setResults(calculatedResults);
    setShowResults(true);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const resetForm = () => {
    setShowResults(false);
    setResults(null);
  };

  const isFormValid = () => {
    const { age, weight, height } = formData;
    
    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    return (
      age !== '' && ageNum > 0 && ageNum < 120 &&
      weight !== '' && weightNum > 0 &&
      height !== '' && heightNum > 0 &&
      (formData.heightUnit !== 'ft' || formData.heightInches !== '')
    );
  };

  return (
    <div id="calculator" className="card max-w-3xl mx-auto transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Calculate Your BMR
      </h2>
      
      <div className="mb-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            className={`px-4 py-2 rounded-md transition-colors ${
              units === 'metric'
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleUnitChange('metric')}
          >
            Metric (kg/cm)
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md transition-colors ${
              units === 'imperial'
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleUnitChange('imperial')}
          >
            Imperial (lb/ft)
          </button>
        </div>
        
        <FormInputs 
          formData={formData}
          handleChange={handleChange}
          units={units}
        />
        
        <div className="mt-6">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`btn-primary w-full py-3 text-lg ${
              !isFormValid() ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            Calculate BMR
          </button>
        </div>
      </div>
      
      {showResults && results && (
        <div id="results" className="fade-in mt-8">
          <ResultsDisplay results={results} />
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={resetForm}
              className="btn-secondary"
            >
              Recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMRCalculator;