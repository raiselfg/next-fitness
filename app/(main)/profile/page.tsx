import { Suspense } from 'react';

import { ProfileContent } from '@/components/profile/profile-content';
import { ProfileSkeleton } from '@/components/profile/profile-skeleton';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 max-w-md mt-10">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </div>
  );
}
