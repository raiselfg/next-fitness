import { cacheLife } from 'next/cache';
import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/constants';
import { getSession } from '@/lib/auth/actions/get-session';

import { LogoutButton } from '../auth/logout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ProfileAvatar } from './profile-avatar';

export const ProfileContent = async () => {
  'use cache: private';
  cacheLife('minutes');

  const session = await getSession();

  if (!session) {
    redirect(APP_ROUTES.LOGIN);
  }

  const { user } = session;

  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2">
        <ProfileAvatar
          user={user}
          size={96}
          className="border-4 border-primary/10 shadow-lg object-cover"
        />
        <div className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground font-medium">{user.email}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-y-4 text-sm border-t pt-6">
          <div className="font-semibold text-muted-foreground flex items-center">Role</div>
          <div className="text-right font-medium">{user.role ?? 'User'}</div>

          {user.gender && (
            <>
              <div className="font-semibold text-muted-foreground flex items-center">Gender</div>
              <div className="text-right font-medium capitalize">{user.gender}</div>
            </>
          )}

          {user.height && (
            <>
              <div className="font-semibold text-muted-foreground flex items-center">Height</div>
              <div className="text-right font-medium">{user.height} cm</div>
            </>
          )}

          {user.weight && (
            <>
              <div className="font-semibold text-muted-foreground flex items-center">Weight</div>
              <div className="text-right font-medium">{user.weight} kg</div>
            </>
          )}

          {user.activityLevel && (
            <>
              <div className="font-semibold text-muted-foreground flex items-center">Activity</div>
              <div className="text-right font-medium capitalize">
                {user.activityLevel.replace('_', ' ')}
              </div>
            </>
          )}

          {user.goal && (
            <>
              <div className="font-semibold text-muted-foreground flex items-center">Goal</div>
              <div className="text-right font-medium capitalize">{user.goal.replace('_', ' ')}</div>
            </>
          )}
        </div>

        <div className="pt-2">
          <LogoutButton />
        </div>
      </CardContent>
    </Card>
  );
};
