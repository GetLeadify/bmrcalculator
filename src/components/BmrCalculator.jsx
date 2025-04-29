import { useState } from 'react'

function BmrCalculator() {
  const [gender, setGender] = useState('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [heightCm, setHeightCm] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [bmr, setBmr] = useState(null)
  const [useMetric, setUseMetric] = useState(true)

  // Conversion functions
  const lbsToKg = (lbs) => lbs * 0.453592
  const feetInchesToCm = (feet, inches) => (feet * 30.48) + (inches * 2.54)
  const kgToLbs = (kg) => kg * 2.20462
  const cmToFeet = (cm) => Math.floor(cm / 30.48)
  const cmToInches = (cm) => Math.round((cm % 30.48) / 2.54)

  const handleUnitChange = (isMetric) => {
    setUseMetric(isMetric)
    
    // Convert existing values when switching units
    if (weight) {
      if (isMetric) {
        setWeight(Math.round(lbsToKg(parseFloat(weight))))
      } else {
        setWeight(Math.round(kgToLbs(parseFloat(weight))))
      }
    }

    if (heightCm) {
      if (!isMetric) {
        setFeet(cmToFeet(parseFloat(heightCm)).toString())
        setInches(cmToInches(parseFloat(heightCm)).toString())
        setHeightCm('')
      } else {
        setHeightCm(heightCm)
        setFeet('')
        setInches('')
      }
    }
  }

  const calculateBMR = (e) => {
    e.preventDefault()
    
    // Convert measurements to metric for calculation
    let weightInKg = useMetric ? parseFloat(weight) : lbsToKg(parseFloat(weight))
    let heightInCm = useMetric ? parseFloat(heightCm) : feetInchesToCm(parseFloat(feet), parseFloat(inches))
    
    // Mifflin-St Jeor Equation
    let calculatedBmr
    if (gender === 'male') {
      calculatedBmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5
    } else {
      calculatedBmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161
    }
    
    setBmr(Math.round(calculatedBmr))
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Units</label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => handleUnitChange(true)}
            className={`px-4 py-2 rounded-md ${
              useMetric
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Metric (kg/cm)
          </button>
          <button
            type="button"
            onClick={() => handleUnitChange(false)}
            className={`px-4 py-2 rounded-md ${
              !useMetric
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Imperial (lbs/ft)
          </button>
        </div>
      </div>

      <form onSubmit={calculateBMR} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Age (years)
          </label>
          <input
            type="number"
            required
            min="15"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight ({useMetric ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            required
            min={useMetric ? "30" : "66"}
            max={useMetric ? "300" : "660"}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {useMetric ? (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              required
              min="100"
              max="250"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height (feet)
              </label>
              <input
                type="number"
                required
                min="3"
                max="8"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height (inches)
              </label>
              <input
                type="number"
                required
                min="0"
                max="11"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Calculate BMR
        </button>
      </form>

      {bmr !== null && (
        <div className="mt-6 space-y-4">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900">Your BMR Result</h3>
            <p className="mt-2 text-4xl font-bold text-blue-700">{bmr} calories/day</p>
            <p className="mt-2 text-sm text-blue-600">
              This is your basal metabolic rate - the calories your body burns at rest.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Your Daily Calorie Needs:</h4>
            <div className="grid gap-3">
              <div className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                <span className="text-gray-700">Sedentary</span>
                <span className="font-medium">{Math.round(bmr * 1.2)} calories</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                <span className="text-gray-700">Light Exercise</span>
                <span className="font-medium">{Math.round(bmr * 1.375)} calories</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                <span className="text-gray-700">Moderate Exercise</span>
                <span className="font-medium">{Math.round(bmr * 1.55)} calories</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                <span className="text-gray-700">Heavy Exercise</span>
                <span className="font-medium">{Math.round(bmr * 1.725)} calories</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                <span className="text-gray-700">Athlete</span>
                <span className="font-medium">{Math.round(bmr * 1.9)} calories</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BmrCalculator 