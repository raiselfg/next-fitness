import * as v from 'valibot';

import {
  ACTIVITY_LEVEL_OPTIONS,
  GENDER_OPTIONS,
  GOAL_OPTIONS,
  LEVEL_OPTIONS,
  LOCATION_OPTIONS,
  PRIORITY_OPTIONS,
  SPEED_OPTIONS,
} from '@/constants';

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
  gender: v.picklist(GENDER_OPTIONS, 'Выберите пол'),
  activityLevel: v.picklist(ACTIVITY_LEVEL_OPTIONS, 'Выберите уровень активности'),
  bodyFat: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(3, 'Минимум 3%'),
    v.maxValue(50, 'Максимум 50%'),
  ),
});

export const goalStepSchema = v.object({
  goal: v.picklist(GOAL_OPTIONS, 'Выберите цель'),
  speed: v.picklist(SPEED_OPTIONS, 'Выберите скорость'),
  level: v.picklist(LEVEL_OPTIONS, 'Выберите уровень'),
  priority: v.picklist(PRIORITY_OPTIONS, 'Выберите приоритет'),
});

export const dietStepSchema = v.object({
  meals: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(2, 'Минимум 2 приема'),
    v.maxValue(6, 'Максимум 6 приемов'),
  ),
  restrictions: v.optional(v.string()),
});

export const trainingStepSchema = v.object({
  location: v.picklist(LOCATION_OPTIONS, 'Выберите место'),
  frequency: v.pipe(
    v.number('Введите число'),
    v.integer(),
    v.minValue(2, 'Минимум 2 тренировки'),
    v.maxValue(7, 'Максимум 7 тренировок'),
  ),
  healthIssues: v.optional(v.string()),
});

export const strategyFormSchema = v.object({
  ...bioStepSchema.entries,
  ...goalStepSchema.entries,
  ...dietStepSchema.entries,
  ...trainingStepSchema.entries,
});

export type StrategyFormInput = v.InferInput<typeof strategyFormSchema>;
export type StrategyFormOutput = v.InferOutput<typeof strategyFormSchema>;
export type BioStepInput = v.InferInput<typeof bioStepSchema>;
export type GoalStepInput = v.InferInput<typeof goalStepSchema>;
export type DietStepInput = v.InferInput<typeof dietStepSchema>;
export type TrainingStepInput = v.InferInput<typeof trainingStepSchema>;
