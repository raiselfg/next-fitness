import { AVATAR_BACKGROUNDS } from '@/features/auth/constants';

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * AVATAR_BACKGROUNDS.length);
  return AVATAR_BACKGROUNDS[randomIndex];
};

export const generateAvatar = (name: string): string => {
  const correctName = name.split(' ').join('+');
  const avatarUrl = `https://ui-avatars.com/api/?name=${correctName}&background=${generateRandomColor()}&length=1&size=256`;

  return avatarUrl;
};
