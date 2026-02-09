import { Suspense } from 'react';

import { ProfileContent } from '@/features/profile/components/profile-content';
import { ProfileSkeleton } from '@/features/profile/components/profile-skeleton';

export default function ProfilePage() {
  return (
    <div className="container max-w-5xl py-8 px-4 space-y-6 mx-auto mt-16">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </div>
  );
}
