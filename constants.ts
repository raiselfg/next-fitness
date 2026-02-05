export const APP_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  STRATEGY_SETUP: '/strategy-setup',
};

export const GENDER_OPTIONS = ['male', 'female'] as const;

export const GENDER_LABELS: Record<(typeof GENDER_OPTIONS)[number], string> = {
  male: 'Мужской',
  female: 'Женский',
};

export const GOAL_OPTIONS = ['lose', 'gain', 'maintain', 'recomposition'] as const;

export const GOAL_LABELS: Record<(typeof GOAL_OPTIONS)[number], string> = {
  lose: 'Похудение',
  gain: 'Набор массы',
  maintain: 'Поддержание',
  recomposition: 'Рекомпозиция',
};

export const SPEED_OPTIONS = ['slow', 'medium', 'fast'] as const;

export const SPEED_LABELS: Record<(typeof SPEED_OPTIONS)[number], string> = {
  slow: 'Спокойный',
  medium: 'Обычный',
  fast: 'Быстрый',
};

export const LEVEL_OPTIONS = ['beginner', 'intermediate', 'advanced'] as const;

export const LEVEL_LABELS: Record<(typeof LEVEL_OPTIONS)[number], string> = {
  beginner: 'Новичок',
  intermediate: 'Любитель',
  advanced: 'Профи',
};

export const LOCATION_OPTIONS = ['gym', 'home_equipment', 'home_no_equipment', 'outdoor'] as const;

export const LOCATION_LABELS: Record<(typeof LOCATION_OPTIONS)[number], string> = {
  gym: 'Зал',
  home_equipment: 'Дома (инвентарь)',
  home_no_equipment: 'Дома (свой вес)',
  outdoor: 'Улица',
};

export const ACTIVITY_LEVEL_OPTIONS = [
  'sedentary',
  'lightly_active',
  'moderately_active',
  'very_active',
  'extra_active',
] as const;

export const ACTIVITY_LEVEL_LABELS: Record<(typeof ACTIVITY_LEVEL_OPTIONS)[number], string> = {
  sedentary: 'Сидячий',
  lightly_active: 'Легкий',
  moderately_active: 'Средний',
  very_active: 'Высокий',
  extra_active: 'Экстремальный',
};

export const PRIORITY_OPTIONS = [
  'strength',
  'hypertrophy',
  'endurance',
  'fat_loss',
  'health',
  'definition',
] as const;

export const PRIORITY_LABELS: Record<(typeof PRIORITY_OPTIONS)[number], string> = {
  strength: 'Сила',
  hypertrophy: 'Масса',
  endurance: 'Выносливость',
  fat_loss: 'Жиросжигание',
  health: 'Здоровье',
  definition: 'Рельеф',
};
