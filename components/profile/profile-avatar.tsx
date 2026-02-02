import { User } from '@prisma/client';
import Image from 'next/image';

import { cn } from '@/lib/cn';

interface ProfileAvatarProps {
  user: Pick<User, 'image' | 'name'>;
  size?: number;
  className?: string;
}

export const ProfileAvatar = ({ user, size = 32, className }: ProfileAvatarProps) => {
  return (
    <Image
      src={user.image}
      alt={user.name}
      width={size}
      height={size}
      className={cn('rounded-full', className)}
      unoptimized
    />
  );
};
