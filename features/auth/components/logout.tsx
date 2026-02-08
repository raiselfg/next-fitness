'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { APP_ROUTES } from '@/constants';
import { logout } from '@/features/auth/actions/logout';

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
