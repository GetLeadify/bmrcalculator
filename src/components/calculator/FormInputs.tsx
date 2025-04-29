import React from 'react';

interface FormInputsProps {
  formData: {
    age: string;
    gender: 'male' | 'female';
    weight: string;
    weightUnit: 'kg' | 'lbs';
    height: string;
    heightUnit: 'cm' | 'ft';
    heightInches: string;
    activityLevel: 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive';
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  units: 'metric' | 'imperial';
}

const FormInputs: React.FC<FormInputsProps> = ({ formData, handleChange, units }) => {
  const activityLevelLabels = {
    sedentary: 'Sedentary (little or no exercise)',
    lightlyActive: 'Lightly Active (light exercise 1-3 days/week)',
    moderatelyActive: 'Moderately Active (moderate exercise 3-5 days/week)',
    veryActive: 'Very Active (hard exercise 6-7 days/week)',
    extraActive: 'Extra Active (very hard exercise & physical job or training twice a day)',
  };

  return (
    <div className="space-y-6">
      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
          Age (years)
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
          placeholder="Enter your age"
          className="input-field"
          required
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
      </div>

      {/* Weight */}
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
          Weight ({units === 'metric' ? 'kg' : 'lbs'})
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          min="1"
          step="0.1"
          placeholder={`Enter your weight in ${units === 'metric' ? 'kilograms' : 'pounds'}`}
          className="input-field"
          required
        />
      </div>

      {/* Height */}
      <div>
        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
          Height ({units === 'metric' ? 'cm' : 'ft/in'})
        </label>
        {units === 'metric' ? (
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            min="1"
            step="0.1"
            placeholder="Enter your height in centimeters"
            className="input-field"
            required
          />
        ) : (
          <div className="flex space-x-2">
            <div className="w-1/2">
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                min="1"
                max="8"
                placeholder="Feet"
                className="input-field"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="number"
                id="heightInches"
                name="heightInches"
                value={formData.heightInches}
                onChange={handleChange}
                min="0"
                max="11"
                placeholder="Inches"
                className="input-field"
                required
              />
            </div>
          </div>
        )}
      </div>

      {/* Activity Level */}
      <div>
        <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-1">
          Activity Level
        </label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
          className="input-field"
          required
        >
          {Object.entries(activityLevelLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormInputs;