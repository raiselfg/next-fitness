'use client';

import { useRouter } from 'next/navigation';
import { Activity, useState, useTransition } from 'react';
import { toast } from 'sonner';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { APP_ROUTES } from '@/constants';
import { updateProfile } from '@/features/profile/actions/update-profile';
import { BioStep } from '@/features/strategy-setup/components/bio-step';
import { DietStep } from '@/features/strategy-setup/components/diet-step';
import { GoalStep } from '@/features/strategy-setup/components/goal-step';
import { TrainingStep } from '@/features/strategy-setup/components/training-step';
import { StrategyFormInput } from '@/features/strategy-setup/schema/strategy';

const STEPS = [
  { id: 'bio', title: 'Ваши данные' },
  { id: 'goal', title: 'Цели' },
  { id: 'diet', title: 'Питание' },
  { id: 'training', title: 'Тренировки' },
];

export default function StrategySetupPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<Partial<StrategyFormInput>>();

  const [pending, startTransition] = useTransition();

  const handleNext = (data: Partial<StrategyFormInput>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleComplete = (data: Partial<StrategyFormInput>) => {
    const finalData = { ...formData, ...data } as StrategyFormInput;
    setFormData(finalData);

    startTransition(async () => {
      try {
        const { success, error } = await updateProfile(finalData);
        if (success) {
          toast.success('Данные успешно сохранены!');
          router.push(APP_ROUTES.PROFILE);
        } else {
          toast.error(error || 'Произошла ошибка при сохранении данных');
        }
      } catch {
        toast.error('Произошла ошибка при сохранении данных');
      }
    });
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg flex flex-col h-[600px] max-h-[90vh]">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-semibold">Настройка плана</CardTitle>
            <span className="text-sm text-muted-foreground font-mono">
              {currentStep + 1} / {STEPS.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <CardDescription className="pt-3 text-lg font-medium text-foreground">
            {STEPS[currentStep].title}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col grow overflow-y-auto">
          <Activity mode={currentStep === 0 ? 'visible' : 'hidden'}>
            <BioStep defaultValues={formData} onNext={handleNext} />
          </Activity>

          <Activity mode={currentStep === 1 ? 'visible' : 'hidden'}>
            <GoalStep defaultValues={formData} onNext={handleNext} onBack={handleBack} />
          </Activity>

          <Activity mode={currentStep === 2 ? 'visible' : 'hidden'}>
            <DietStep defaultValues={formData} onNext={handleNext} onBack={handleBack} />
          </Activity>

          <Activity mode={currentStep === 3 ? 'visible' : 'hidden'}>
            <TrainingStep
              defaultValues={formData}
              onNext={handleComplete}
              onBack={handleBack}
              isLast
              isPending={pending}
            />
          </Activity>
        </CardContent>
      </Card>
    </div>
  );
}
