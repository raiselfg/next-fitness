import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Suspense } from 'react';

import { OAuthButton } from '@/components/auth/oauth-login-btn';
import { SignupFormSkeleton } from '@/components/auth/signup-form-skeleton';
import { APP_ROUTES } from '@/constants';

const SignupForm = dynamic(
  () => import('@/components/auth/signup-form').then((f) => f.SignupForm),
  {
    ssr: true,
  },
);

export default function SignupPage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">Регистрация</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <Suspense fallback={<SignupFormSkeleton />}>
          <SignupForm />
        </Suspense>
        <OAuthButton provider="github" />
        <OAuthButton provider="google" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground mt-2">
        <p>Уже есть аккаунт?</p>
        <p className="underline underline-offset-4">
          <Link href={APP_ROUTES.LOGIN}>Войти</Link>
        </p>
      </span>
    </div>
  );
}
