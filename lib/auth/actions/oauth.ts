import { APP_ROUTES } from '@/constants';
import { authClient } from '@/lib/auth/better-auth-client';
import { OauthProvider } from '@/types';

export const signInWithSocial = async (provider: OauthProvider) => {
  try {
    return await authClient.signIn.social({
      provider,
      callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.PROFILE}`,
    });
  } catch (error) {
    throw error;
  }
};
