import { ReactNode, Suspense } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { Footer } from '@/features/landing/components/footer';
import { Navbar } from '@/features/landing/components/navbar';

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div>{children}</div>
      </main>
      <Suspense fallback={<Skeleton className="h-8 w-15" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
