import * as v from 'valibot';

import { GENDER_OPTIONS, LOCATION_OPTIONS } from '@/features/onboarding/constants';

export const bioStepSchema = v.object({
  birthDate: v.date('Выберите дату рождения'),
  height: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(140, 'Минимум 140 см'),
    v.maxValue(215, 'Максимум 215 см'),
  ),
  weight: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(40, 'Минимум 30 кг'),
    v.maxValue(150, 'Максимум 250 кг'),
  ),
  bodyFat: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(3, 'Минимум 3%'),
    v.maxValue(50, 'Максимум 50%'),
  ),
  gender: v.picklist(GENDER_OPTIONS, 'Выберите пол'),
});

export const dietStepSchema = v.object({
  meals: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(2, 'Минимум 2 приема'),
    v.maxValue(6, 'Максимум 6 приемов'),
  ),
});

export const trainingStepSchema = v.object({
  location: v.picklist(LOCATION_OPTIONS, 'Выберите место'),
  frequency: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(2, 'Минимум 2 тренировки'),
    v.maxValue(7, 'Максимум 7 тренировок'),
  ),
});

export const strategyFormSchema = v.object({
  ...bioStepSchema.entries,
  ...dietStepSchema.entries,
  ...trainingStepSchema.entries,
});

export type StrategyFormInput = v.InferInput<typeof strategyFormSchema>;
export type StrategyFormOutput = v.InferOutput<typeof strategyFormSchema>;
export type BioStepInput = v.InferInput<typeof bioStepSchema>;
export type DietStepInput = v.InferInput<typeof dietStepSchema>;
export type TrainingStepInput = v.InferInput<typeof trainingStepSchema>;
