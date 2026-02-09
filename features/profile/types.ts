import { GENDER_OPTIONS } from '../onboarding/constants';

export type Macros = {
  protein: number;
  fats: number;
  carbs: number;
};

export type CaloriesAndMacros = {
  calories: number;
  macros: Macros;
};

export type Gender = (typeof GENDER_OPTIONS)[number];
