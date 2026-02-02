import { ReactNode, Suspense } from 'react';

import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';
import { Skeleton } from '@/components/ui/skeleton';

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Suspense fallback={<Skeleton className="h-8 w-15" />}>
        <Footer />
      </Suspense>
    </>
  );
}
