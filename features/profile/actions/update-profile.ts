'use server';

import { revalidatePath } from 'next/cache';
import { unauthorized } from 'next/navigation';
import * as v from 'valibot';

import { APP_ROUTES } from '@/constants';
import { getSession } from '@/features/auth/actions/get-session';
import { StrategyFormOutput, strategyFormSchema } from '@/features/onboarding/schema/strategy';
import { calculateCaloriesAndMacros } from '@/features/profile/lib/calculate-calories';
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
        meals: validData.meals,
        birthDate: validData.birthDate,
        height: validData.height,
        weight: validData.weight,
        bodyFat: validData.bodyFat,
        gender: validData.gender,
      },
    });

    const caloriesAndMacros = calculateCaloriesAndMacros(
      validData.weight,
      validData.bodyFat,
      validData.gender,
    );

    await prisma.nutritionGoal.upsert({
      where: { userId: user.id },
      update: {
        calories: caloriesAndMacros.calories,
        protein: caloriesAndMacros.macros.protein,
        fats: caloriesAndMacros.macros.fats,
        carbs: caloriesAndMacros.macros.carbs,
      },
      create: {
        userId: user.id,
        calories: caloriesAndMacros.calories,
        protein: caloriesAndMacros.macros.protein,
        fats: caloriesAndMacros.macros.fats,
        carbs: caloriesAndMacros.macros.carbs,
      },
    });

    revalidatePath(APP_ROUTES.PROFILE);
    revalidatePath(APP_ROUTES.ONBOARDING);

    return { success: true };
  } catch {
    return { success: false, error: `Не удалось обновить профиль` };
  }
};
