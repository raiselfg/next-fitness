import { CaloriesAndMacros, Gender } from '../types';

export const calculateCaloriesAndMacros = (
  weightKg: number,
  bodyFatPercentage: number,
  gender: Gender,
): CaloriesAndMacros => {
  const leanBodyWeight = weightKg - weightKg * (bodyFatPercentage / 100);

  const fatsCoefficient = gender === 'Мужской' ? 0.8 : 1.1;

  const finalProtein = Math.round(leanBodyWeight * 2.8);
  const finalFats = Math.round(leanBodyWeight * fatsCoefficient);
  const finalCarbs = Math.round(leanBodyWeight * 2.35);

  const finalCalories = finalCarbs * 4 + finalFats * 9 + finalProtein * 4;

  return {
    calories: finalCalories,
    macros: {
      protein: finalProtein,
      fats: finalFats,
      carbs: finalCarbs,
    },
  };
};
