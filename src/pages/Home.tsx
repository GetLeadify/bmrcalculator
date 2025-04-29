import React from 'react';
import BMRCalculator from '../components/calculator/BMRCalculator';
import { Activity, Calculator, Scale, BarChart3, Dumbbell } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom mx-auto text-center">
          <Activity className="inline-block h-16 w-16 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BMR Calculator</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-cyan-100">
            Calculate your Basal Metabolic Rate and daily calorie needs to achieve your health goals
          </p>
          <a
            href="#calculator"
            className="inline-block px-6 py-3 text-lg bg-white text-cyan-800 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Calculate Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Calculate Your BMR?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">
                Get precise BMR calculations based on the scientifically validated Mifflin-St Jeor equation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Scale className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-xl font-semibold mb-2">Weight Management</h3>
              <p className="text-gray-600">
                Plan effective weight loss or gain strategies based on your unique metabolic needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-xl font-semibold mb-2">Nutrition Planning</h3>
              <p className="text-gray-600">
                Build balanced meal plans that align with your caloric requirements and health goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Dumbbell className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-xl font-semibold mb-2">Fitness Optimization</h3>
              <p className="text-gray-600">
                Optimize your workout results by understanding your body's baseline energy needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="py-16">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">BMR Calculator</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Enter your details below to calculate your Basal Metabolic Rate (BMR) and daily calorie needs based on your activity level.
          </p>
          
          <BMRCalculator />
        </div>
      </section>

      {/* About BMR Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Basal Metabolic Rate (BMR)</h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic physiological functions while at complete rest. These functions include breathing, circulating blood, regulating body temperature, and cellular growth and repair. Essentially, BMR represents the minimum amount of energy your body requires to stay alive in a resting state.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">How BMR Works</h3>
              <p>
                Your BMR accounts for approximately 60-70% of your total daily energy expenditure, making it the largest component of your calorie burning. It's influenced by several factors:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Age:</strong> BMR typically decreases with age due to the loss of muscle mass and hormonal changes.</li>
                <li><strong>Body Composition:</strong> Muscle tissue burns more calories than fat tissue, even at rest. People with higher muscle mass have higher BMRs.</li>
                <li><strong>Gender:</strong> Men generally have higher BMRs than women because they typically have greater muscle mass and less body fat.</li>
                <li><strong>Height and Weight:</strong> Larger bodies require more energy to maintain basic functions.</li>
                <li><strong>Hormonal Factors:</strong> Thyroid hormones, growth hormone, and testosterone can influence metabolic rate.</li>
                <li><strong>Genetics:</strong> Some people naturally have faster or slower metabolisms due to their genetic makeup.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">BMR Calculation Methods</h3>
              <p>
                Several equations have been developed to estimate BMR. Our calculator uses the Mifflin-St Jeor Equation, which is considered one of the most accurate formulas for estimating BMR in most populations:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 my-4">
                <p><strong>For men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</p>
                <p><strong>For women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</p>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Total Daily Energy Expenditure (TDEE)</h3>
              <p>
                While BMR represents your resting calorie needs, your Total Daily Energy Expenditure (TDEE) includes all the calories you burn throughout the day, including:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>BMR:</strong> Calories burned at rest</li>
                <li><strong>Physical Activity:</strong> Calories burned during exercise and daily activities</li>
                <li><strong>Thermic Effect of Food:</strong> Calories burned digesting and processing food</li>
                <li><strong>Non-Exercise Activity Thermogenesis (NEAT):</strong> Calories burned through fidgeting, maintaining posture, etc.</li>
              </ul>
              
              <p>
                To estimate TDEE, we multiply BMR by an activity factor based on your physical activity level:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 my-4">
                <ul className="list-none space-y-2">
                  <li><strong>Sedentary (little or no exercise):</strong> BMR × 1.2</li>
                  <li><strong>Lightly active (light exercise 1-3 days/week):</strong> BMR × 1.375</li>
                  <li><strong>Moderately active (moderate exercise 3-5 days/week):</strong> BMR × 1.55</li>
                  <li><strong>Very active (hard exercise 6-7 days/week):</strong> BMR × 1.725</li>
                  <li><strong>Extra active (very hard exercise & physical job or training 2x/day):</strong> BMR × 1.9</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Using BMR for Weight Management</h3>
              <p>
                Understanding your BMR and TDEE is crucial for effective weight management:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Weight Maintenance:</strong> Consuming calories equal to your TDEE should maintain your current weight.</li>
                <li><strong>Weight Loss:</strong> Creating a calorie deficit by consuming fewer calories than your TDEE (typically 500 calories/day for 1 pound per week) leads to weight loss.</li>
                <li><strong>Weight Gain:</strong> Consuming more calories than your TDEE (typically 500 calories/day for 1 pound per week) leads to weight gain.</li>
              </ul>
              
              <p>
                It's important to note that very low-calorie diets (below 1,200 calories for women and 1,500 calories for men) are generally not recommended without medical supervision, as they can lead to nutritional deficiencies and metabolic adaptations that make long-term weight management more difficult.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Increasing Your BMR</h3>
              <p>
                While some factors affecting BMR (like age and genetics) can't be changed, you can increase your BMR by:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Building Muscle:</strong> Strength training helps increase muscle mass, which burns more calories at rest.</li>
                <li><strong>Regular Exercise:</strong> High-intensity interval training (HIIT) and cardio can temporarily boost metabolism for hours after exercise.</li>
                <li><strong>Eating Sufficient Protein:</strong> Protein has a higher thermic effect than carbs or fats, meaning your body burns more calories digesting it.</li>
                <li><strong>Staying Hydrated:</strong> Proper hydration is essential for optimal metabolic function.</li>
                <li><strong>Getting Adequate Sleep:</strong> Poor sleep can disrupt metabolic hormones and reduce BMR.</li>
              </ul>
              
              <p>
                Remember that BMR calculations provide estimates, and individual metabolism can vary. For the most accurate measurement of BMR, clinical tests like indirect calorimetry would be required. However, our calculator provides a scientifically-based estimate that serves as an excellent starting point for nutritional planning and weight management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;