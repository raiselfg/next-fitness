'use server';

import { revalidatePath } from 'next/cache';
import { unauthorized } from 'next/navigation';
import * as v from 'valibot';

import { APP_ROUTES } from '@/constants';
import { getSession } from '@/features/auth/actions/get-session';
import { StrategyFormOutput, strategyFormSchema } from '@/features/strategy-setup/schema/strategy';
import { prisma } from '@/prisma/prisma-client';

type UpdateProfileResult = {
  success: boolean;
  error?: string;
};

export const updateProfile = async (formData: StrategyFormOutput): Promise<UpdateProfileResult> => {
  try {
    const data = await getSession();

    const user = data?.user;

    if (!user) {
      unauthorized();
    }

    const parseResult = v.safeParse(strategyFormSchema, formData);

    if (!parseResult.success) {
      return { success: false, error: 'Неверные данные' };
    }

    const validData = parseResult.output;

    await prisma.user.update({
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
  } catch {
    return { success: false, error: `Не удалось обновить профиль` };
  }
};
