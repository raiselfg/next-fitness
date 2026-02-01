'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { APP_ROUTES } from '@/constants';
import { logout } from '@/lib/auth/actions/logout';

import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

export const LogoutButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      try {
        await logout();

        toast.success('Выход выполнен');
        router.push(APP_ROUTES.LOGIN);
      } catch {
        toast.error('Произошла ошибка');
      }
    });
  };

  return (
    <Button className="w-full" variant="destructive" onClick={handleLogout} disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2">
          <Spinner /> <p>Выход...</p>
        </div>
      ) : (
        <p>Выйти</p>
      )}
    </Button>
  );
};
