import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/constants';
import { getSession } from '@/lib/auth/actions/get-session';

import { ProfileAvatar } from '../profile/profile-avatar';

export const UserNav = async () => {
  const session = await getSession();

  if (session) {
    const { user } = session;
    return (
      <Link href={APP_ROUTES.PROFILE} className="flex items-center gap-2">
        <ProfileAvatar user={user} />
        <span className="font-medium hidden sm:inline-block">{user.name}</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={APP_ROUTES.LOGIN}>
        <Button variant="ghost">Войти</Button>
      </Link>
      <Link href={APP_ROUTES.SIGNUP}>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Зарегистрироваться
        </Button>
      </Link>
    </div>
  );
};
