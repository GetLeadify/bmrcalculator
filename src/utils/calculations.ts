export type Gender = 'male' | 'female';

export type ActivityLevel = 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive';

export interface BMRInputs {
  age: number;
  gender: Gender;
  weight: number; // in kg
  height: number; // in cm
  activityLevel: ActivityLevel;
}

export interface BMRResults {
  bmr: number;
  maintenance: number;
  mildWeightLoss: number;
  weightLoss: number;
  extremeWeightLoss: number;
  mildWeightGain: number;
  weightGain: number;
  fastWeightGain: number;
}

// Activity level multipliers
const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2, // Little or no exercise
  lightlyActive: 1.375, // Light exercise/sports 1-3 days/week
  moderatelyActive: 1.55, // Moderate exercise/sports 3-5 days/week
  veryActive: 1.725, // Hard exercise/sports 6-7 days/week
  extraActive: 1.9, // Very hard exercise, physical job or training twice a day
};

/**
 * Calculate BMR using the Mifflin-St Jeor Equation
 * Men: BMR = 10W + 6.25H - 5A + 5
 * Women: BMR = 10W + 6.25H - 5A - 161
 */
export const calculateBMR = ({ age, gender, weight, height }: Omit<BMRInputs, 'activityLevel'>): number => {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age;
  
  if (gender === 'male') {
    return Math.round(baseBMR + 5);
  } else {
    return Math.round(baseBMR - 161);
  }
};

/**
 * Calculate daily calorie needs based on BMR and activity level
 */
export const calculateDailyCalories = (bmr: number, activityLevel: ActivityLevel): number => {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel]);
};

/**
 * Calculate comprehensive BMR results
 */
export const calculateBMRResults = (inputs: BMRInputs): BMRResults => {
  const bmr = calculateBMR(inputs);
  const maintenance = calculateDailyCalories(bmr, inputs.activityLevel);
  
  return {
    bmr,
    maintenance,
    mildWeightLoss: Math.round(maintenance - 250),
    weightLoss: Math.round(maintenance - 500),
    extremeWeightLoss: Math.round(maintenance - 1000),
    mildWeightGain: Math.round(maintenance + 250),
    weightGain: Math.round(maintenance + 500),
    fastWeightGain: Math.round(maintenance + 1000),
  };
};

/**
 * Convert pounds to kilograms
 */
export const lbsToKg = (lbs: number): number => {
  return lbs / 2.20462;
};

/**
 * Convert kilograms to pounds
 */
export const kgToLbs = (kg: number): number => {
  return kg * 2.20462;
};

/**
 * Convert feet/inches to centimeters
 */
export const ftInToCm = (feet: number, inches: number): number => {
  return (feet * 30.48) + (inches * 2.54);
};

/**
 * Convert centimeters to feet/inches
 */
export const cmToFtIn = (cm: number): { feet: number; inches: number } => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  
  return { feet, inches };
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};