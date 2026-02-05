'use server';

import { revalidatePath } from 'next/cache';
import { unauthorized } from 'next/navigation';
import * as v from 'valibot';

import { APP_ROUTES } from '@/constants';
import { db } from '@/prisma/db';
import { StrategyFormOutput, strategyFormSchema } from '@/schema/strategy';

import { getSession } from '../auth/actions/get-session';

type UpdateProfileResult = {
  success: boolean;
  error?: string;
};

export const updateProfile = async (formData: StrategyFormOutput): Promise<UpdateProfileResult> => {
  try {
    const { user } = await getSession();

    if (!user) {
      unauthorized();
    }

    const parseResult = v.safeParse(strategyFormSchema, formData);

    if (!parseResult.success) {
      return { success: false, error: 'Неверные данные' };
    }

    const validData = parseResult.output;

    await db.user.update({
      where: { id: user.id },
      data: {
        location: validData.location,
        frequency: validData.frequency,
        healthIssues: validData.healthIssues,
        meals: validData.meals,
        goal: validData.goal,
        speed: validData.speed,
        level: validData.level,
        priority: validData.priority,
        restrictions: validData.restrictions,
        birthDate: validData.birthDate,
        height: validData.height,
        weight: validData.weight,
        gender: validData.gender,
        activityLevel: validData.activityLevel,
        bodyFat: validData.bodyFat,
      },
    });

    revalidatePath(APP_ROUTES.PROFILE);
    revalidatePath(APP_ROUTES.STRATEGY_SETUP);

    return { success: true };
  } catch (error) {
    console.error('Не удалось обновить профиль:', error);
    return { success: false, error: 'Не удалось обновить профиль' };
  }
};
