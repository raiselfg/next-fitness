import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Suspense } from 'react';

import { APP_ROUTES } from '@/constants';
import { LoginFormSkeleton } from '@/features/auth/components/login-form-skeleton';
import { OAuthButton } from '@/features/auth/components/oauth-login-btn';

const LoginForm = dynamic(
  () => import('@/features/auth/components/login-form').then((f) => f.LoginForm),
  {
    ssr: true,
  },
);

export default function LoginPage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">Вход</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <Suspense fallback={<LoginFormSkeleton />}>
          <LoginForm />
        </Suspense>
        <OAuthButton provider="github" />
        <OAuthButton provider="google" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground mt-2">
        <p>Еще нет аккаунта?</p>
        <p className="underline underline-offset-4">
          <Link href={APP_ROUTES.SIGNUP}>Зарегистрироваться</Link>
        </p>
      </span>
    </div>
  );
}
