'use client';

import { useTransition } from 'react';
import { toast } from 'sonner';

import { APP_ROUTES } from '@/constants';
import { authClient } from '@/lib/auth/better-auth-client';
import { OauthProvider } from '@/types';

import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

interface Props {
  provider: OauthProvider;
}

export const OAuthButton = ({ provider }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleLogin = () => {
    startTransition(async () => {
      const toastId = toast.loading('Подготовка к переходу...');

      try {
        const { error } = await authClient.signIn.social({
          provider,
          callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}${APP_ROUTES.PROFILE}`,
        });

        if (error) {
          toast.error('Не удалось войти', { id: toastId });
          return;
        }

        toast.success('Перенаправляем в ' + providerName, { id: toastId });
      } catch {
        toast.error('Произошла ошибка', { id: toastId });
      }
    });
  };

  const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

  return (
    <Button className="w-full" onClick={handleLogin} disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2">
          <Spinner /> <p>Перенаправление...</p>
        </div>
      ) : (
        `Вход с помощью ${providerName}`
      )}
    </Button>
  );
};
