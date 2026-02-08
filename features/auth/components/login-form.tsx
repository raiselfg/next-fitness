'use client';

import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/features/auth/actions/login';

export const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  useEffect(() => {
    if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={action} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Почта</Label>
        <Input type="email" id="email" name="email" placeholder="example@gmail.com" required />
        {state?.errors?.email && (
          <p className="text-red-500 text-xs">Почта должна: {state?.errors.email.join(', ')}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Пароль</Label>
        <Input type="password" id="password" name="password" placeholder="***" required />
        {state?.errors?.password && (
          <p className="text-red-500 text-xs">Пароль должен: {state?.errors.password.join(', ')}</p>
        )}
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Вход...</p>
          </div>
        ) : (
          <p>Вход</p>
        )}
      </Button>
    </form>
  );
};
