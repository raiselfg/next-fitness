'use client';

import { IconBrandGithub, IconBrandGoogleFilled } from '@tabler/icons-react';
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

const PROVIDER_ICONS = {
  google: IconBrandGoogleFilled,
  github: IconBrandGithub,
} as const;

const getProviderName = (provider: OauthProvider) => {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
};

export const OAuthButton = ({ provider }: Props) => {
  const [isPending, startTransition] = useTransition();

  const providerName = getProviderName(provider);

  const handleLogin = () => {
    startTransition(async () => {
      toast.loading(`Подготовка к входу через ${providerName}...`);

      try {
        const { error } = await authClient.signIn.social({
          provider,
          callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.PROFILE}`,
        });

        if (error) {
          toast.error(`Не удалось войти через ${providerName}`);
          return;
        }

        toast.loading(`Перенаправляем в ${providerName}`);
      } catch {
        toast.error(`Произошла ошибка при входе через ${providerName}`);
      }
    });
  };

  const Icon = PROVIDER_ICONS[provider];

  return (
    <Button className="w-full" onClick={handleLogin} disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2">
          <Spinner /> <p>{providerName}...</p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {providerName} <Icon />
        </div>
      )}
    </Button>
  );
};
