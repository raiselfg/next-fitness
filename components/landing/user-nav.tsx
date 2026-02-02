import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/constants';
import { getSession } from '@/lib/auth/actions/get-session';

export const UserNav = async () => {
  const session = await getSession();

  if (session) {
    const { user } = session;
    return (
      <Link href={APP_ROUTES.PROFILE} className="flex items-center gap-2">
        <Image
          src={user.image}
          alt={user.name ?? 'Profile'}
          height={32}
          width={32}
          className="rounded-full"
          unoptimized
        />
        <span className="font-medium hidden sm:inline-block">{user.name}</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={APP_ROUTES.LOGIN}>
        <Button variant="ghost" size="sm">
          Войти
        </Button>
      </Link>
      <Link href={APP_ROUTES.SIGNUP}>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Начать
        </Button>
      </Link>
    </div>
  );
};
