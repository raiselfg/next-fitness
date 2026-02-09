import {
  IconActivity,
  IconCake,
  IconCalendarStats,
  IconGenderIntergender,
  IconMapPin,
  IconRulerMeasure,
  IconToolsKitchen2,
  IconWeight,
} from '@tabler/icons-react';
import { cacheLife } from 'next/cache';
import { redirect } from 'next/navigation';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_ROUTES } from '@/constants';
import { getSession } from '@/features/auth/actions/get-session';
import { LogoutButton } from '@/features/auth/components/logout-button';
import { prisma } from '@/prisma/prisma-client';

import { GoToOnboardingButton } from './go-to-onboarding-button';
import { ProfileAvatar } from './profile-avatar';
import { InfoItem } from './profile-info-item';

export const ProfileContent = async () => {
  'use cache: private';
  cacheLife('minutes');

  const session = await getSession();

  if (!session) {
    redirect(APP_ROUTES.LOGIN);
  }

  const { user } = session;

  const nutrition = await prisma.nutritionGoal.findUnique({
    where: { userId: user.id },
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-background/80 to-background/60 text-foreground shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <ProfileAvatar user={user} size={120} />

          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">{user.name}</h2>
            <p className="text-muted-foreground font-medium mt-1">{user.email}</p>

            {/* Nutrition Stats Row */}
            {nutrition && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-foreground">
                <div className="bg-muted rounded-2xl p-3 border border-border/5 backdrop-blur-sm">
                  <div className="text-xs font-medium uppercase tracking-wider mb-1">Ккал</div>
                  <div className="text-xl font-bold">{nutrition.calories}</div>
                </div>
                <div className="bg-green-400/80 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium uppercase tracking-wider mb-1">Белки</div>
                  <div className="text-xl font-bold">{nutrition.protein}г</div>
                </div>
                <div className="bg-orange-400/80 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium uppercase tracking-wider mb-1">Жиры</div>
                  <div className="text-xl font-bold">{nutrition.fats}г</div>
                </div>
                <div className="bg-cyan-400/80 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xs font-medium uppercase tracking-wider mb-1">Углеводы</div>
                  <div className="text-xl font-bold">{nutrition.carbs}г</div>
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-center md:justify-start">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>

      {user.gender ? (
        <Card className="border-none shadow-lg overflow-hidden">
          <CardHeader className="pb-4 border-b border-border/40">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <IconActivity className="w-5 h-5 text-primary" />
              Подробная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {/* BODY SECTION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <IconRulerMeasure className="w-4 h-4 text-chart-1" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Параметры тела</h3>
                </div>
                <div className="space-y-2">
                  <InfoItem
                    icon={IconRulerMeasure}
                    label="Рост"
                    value={user.height ? `${user.height} см` : '—'}
                    iconColor="text-chart-1 bg-chart-1/10"
                  />
                  <InfoItem
                    icon={IconWeight}
                    label="Вес"
                    value={user.weight ? `${user.weight} кг` : '—'}
                    iconColor="text-chart-1 bg-chart-1/10"
                  />
                  <InfoItem
                    icon={IconActivity}
                    label="Процент жира"
                    value={user.bodyFat ? `${user.bodyFat}%` : '—'}
                    iconColor="text-chart-1 bg-chart-1/10"
                  />
                  <InfoItem
                    icon={IconGenderIntergender}
                    label="Пол"
                    value={user.gender}
                    iconColor="text-chart-1 bg-chart-1/10"
                  />
                  <InfoItem
                    icon={IconCake}
                    label="Дата рождения"
                    value={
                      user.birthDate ? new Date(user.birthDate).toLocaleDateString('ru-RU') : '—'
                    }
                    iconColor="text-chart-1 bg-chart-1/10"
                  />
                </div>
              </div>

              {/* TRAINING SECTION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <IconMapPin className="w-4 h-4 text-chart-2" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Тренировки</h3>
                </div>
                <div className="space-y-2">
                  <InfoItem
                    icon={IconMapPin}
                    label="Место"
                    value={user.location}
                    iconColor="text-chart-2 bg-chart-2/10"
                  />
                  <InfoItem
                    icon={IconCalendarStats}
                    label="Частота"
                    value={
                      user.frequency
                        ? `${user.frequency} ${Number(user.frequency) >= 5 ? 'раз' : 'раза'} в неделю`
                        : '—'
                    }
                    iconColor="text-chart-2 bg-chart-2/10"
                  />
                </div>
              </div>

              {/* LIFESTYLE SECTION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <IconToolsKitchen2 className="w-4 h-4 text-chart-4" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Образ жизни</h3>
                </div>
                <div className="space-y-2">
                  <InfoItem
                    icon={IconToolsKitchen2}
                    label="Питание"
                    value={
                      user.meals
                        ? `${user.meals} ${Number(user.meals) >= 5 ? 'раз' : 'раза'} в день`
                        : '—'
                    }
                    iconColor="text-chart-4 bg-chart-4/10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex items-center justify-center py-10">
          <Card className="w-full max-w-md border-dashed border-2">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <IconActivity className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Профиль не заполнен</CardTitle>
              <CardDescription>
                Заполните дополнительные данные о себе, чтобы начать получать рекомендации
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <GoToOnboardingButton />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
