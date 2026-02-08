import Link from 'next/link';
import { Suspense } from 'react';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileBadge } from '@/features/profile/components/profile-badge';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            NEXT Fitness
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Suspense fallback={<Skeleton className="h-9 w-24 rounded-full" />}>
            <ProfileBadge />
          </Suspense>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
