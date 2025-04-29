import React from 'react';
import { BMRResults, formatNumber } from '../../utils/calculations';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

interface ResultsDisplayProps {
  results: BMRResults;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="animate-fade-in">
      <div className="border-t border-b border-gray-200 py-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-100">
            <h4 className="text-lg font-medium text-cyan-800 mb-1">Basal Metabolic Rate</h4>
            <p className="text-3xl font-bold text-cyan-700">{formatNumber(results.bmr)} calories/day</p>
            <p className="text-sm text-cyan-600 mt-1">Calories your body burns at complete rest</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-lg font-medium text-blue-800 mb-1">Daily Calorie Needs</h4>
            <p className="text-3xl font-bold text-blue-700">{formatNumber(results.maintenance)} calories/day</p>
            <p className="text-sm text-blue-600 mt-1">Calories needed to maintain your current weight</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Calorie Goals by Objective</h3>
        
        <div className="space-y-3">
          <h4 className="text-md font-medium text-gray-700 flex items-center">
            <ArrowDown className="w-5 h-5 text-red-500 mr-2" />
            Weight Loss
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-red-800 mb-1">Mild Weight Loss</p>
              <p className="text-lg font-semibold text-red-700">
                {formatNumber(results.mildWeightLoss)} cal/day
              </p>
              <p className="text-xs text-red-600 mt-1">0.25 kg/week</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-red-800 mb-1">Weight Loss</p>
              <p className="text-lg font-semibold text-red-700">
                {formatNumber(results.weightLoss)} cal/day
              </p>
              <p className="text-xs text-red-600 mt-1">0.5 kg/week</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-red-800 mb-1">Extreme Weight Loss</p>
              <p className="text-lg font-semibold text-red-700">
                {formatNumber(results.extremeWeightLoss)} cal/day
              </p>
              <p className="text-xs text-red-600 mt-1">1 kg/week</p>
            </div>
          </div>
        </div>
        
        <div className="my-4">
          <h4 className="text-md font-medium text-gray-700 flex items-center">
            <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
            Maintenance
          </h4>
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800 mb-1">Maintain Current Weight</p>
            <p className="text-lg font-semibold text-blue-700">
              {formatNumber(results.maintenance)} calories/day
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-md font-medium text-gray-700 flex items-center">
            <ArrowUp className="w-5 h-5 text-green-500 mr-2" />
            Weight Gain
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 mb-1">Mild Weight Gain</p>
              <p className="text-lg font-semibold text-green-700">
                {formatNumber(results.mildWeightGain)} cal/day
              </p>
              <p className="text-xs text-green-600 mt-1">0.25 kg/week</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 mb-1">Weight Gain</p>
              <p className="text-lg font-semibold text-green-700">
                {formatNumber(results.weightGain)} cal/day
              </p>
              <p className="text-xs text-green-600 mt-1">0.5 kg/week</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 mb-1">Fast Weight Gain</p>
              <p className="text-lg font-semibold text-green-700">
                {formatNumber(results.fastWeightGain)} cal/day
              </p>
              <p className="text-xs text-green-600 mt-1">1 kg/week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium text-gray-700 mb-2">Important Note:</p>
        <p>
          These are estimated values based on formulas and your inputs. Individual metabolic rates may vary.
          For weight loss, never consume fewer than 1,200 calories per day (women) or 1,500 calories per day (men)
          without medical supervision.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;