import BmrCalculator from '../components/BmrCalculator'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          BMR Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your Basal Metabolic Rate (BMR) accurately using the Mifflin-St Jeor Equation
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Calculator */}
        <div className="lg:col-span-2">
          <BmrCalculator />
          
          {/* Quick Tips */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900">Quick Tips:</h3>
            <ul className="mt-2 space-y-2 text-blue-800">
              <li>• For most accurate results, weigh yourself in the morning</li>
              <li>• Use your height without shoes</li>
              <li>• Input your age in complete years</li>
            </ul>
          </div>
        </div>

        {/* Sidebar Information */}
        <div className="lg:col-span-1 space-y-6">
          {/* Activity Level Multipliers */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Calorie Needs</h3>
            <div className="space-y-3">
              <p className="text-sm">Multiply your BMR by:</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sedentary</span>
                  <span className="font-medium">× 1.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Light Activity</span>
                  <span className="font-medium">× 1.375</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moderate Activity</span>
                  <span className="font-medium">× 1.55</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Very Active</span>
                  <span className="font-medium">× 1.725</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Extra Active</span>
                  <span className="font-medium">× 1.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* BMR Formula Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Formula</h3>
            <p className="text-gray-600 text-sm">
              We use the Mifflin-St Jeor Equation, which is considered the most accurate for calculating BMR:
            </p>
            <div className="mt-3 p-3 bg-gray-50 rounded-md">
              <p className="text-sm font-medium">For men:</p>
              <p className="text-sm font-mono">BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5</p>
              <p className="text-sm font-medium mt-2">For women:</p>
              <p className="text-sm font-mono">BMR = (10 × weight) + (6.25 × height) - (5 × age) - 161</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Section */}
      <div className="mt-12 prose lg:prose-lg mx-auto">
        <h2>Understanding Your Basal Metabolic Rate (BMR)</h2>
        <p>
          Your Basal Metabolic Rate (BMR) represents the minimum amount of energy your body needs to perform essential life-sustaining functions while at rest. These functions include breathing, blood circulation, cell production, and maintaining body temperature.
        </p>

        <h3>Why Your BMR Matters</h3>
        <p>
          Understanding your BMR is crucial for:
        </p>
        <ul>
          <li>Setting realistic weight management goals</li>
          <li>Developing effective meal plans</li>
          <li>Understanding your daily caloric needs</li>
          <li>Creating personalized fitness programs</li>
        </ul>

        <h3>Factors Affecting BMR</h3>
        <div className="grid md:grid-cols-2 gap-6 not-prose mt-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Age</h4>
            <p className="text-gray-600">BMR typically decreases with age due to reduced muscle mass and hormonal changes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Gender</h4>
            <p className="text-gray-600">Men generally have a higher BMR due to greater muscle mass and different hormonal profiles.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Body Composition</h4>
            <p className="text-gray-600">Higher muscle mass increases BMR as muscle tissue requires more energy to maintain.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Genetics</h4>
            <p className="text-gray-600">Individual genetic factors can influence your baseline metabolic rate.</p>
          </div>
        </div>

        <h3>Using Your BMR Results</h3>
        <p>
          Your BMR calculation is just the starting point. To determine your total daily calorie needs:
        </p>
        <ol>
          <li>Start with your base BMR number</li>
          <li>Multiply it by your activity level factor (see sidebar)</li>
          <li>Adjust based on your specific goals (weight loss, maintenance, or gain)</li>
        </ol>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-yellow-800 mt-0">Important Note</h3>
          <p className="text-yellow-700 mb-0">
            While BMR calculations are helpful for estimating caloric needs, they should be used as a guideline. Individual factors, medical conditions, and specific circumstances may affect your actual caloric needs. Consult with healthcare professionals for personalized advice.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home 