'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/constants';

export const GoToOnboardingButton = () => {
  const router = useRouter();

  const handleClick = () => {
    startTransition(() => {
      router.push(APP_ROUTES.ONBOARDING);
    });
  };

  return (
    <Button className="w-full" onClick={handleClick}>
      Заполнить профиль
    </Button>
  );
};
