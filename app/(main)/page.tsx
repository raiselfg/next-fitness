import { CTA } from '@/features/landing/components/cta';
import { Features } from '@/features/landing/components/features';
import { Hero } from '@/features/landing/components/hero';

export default function Page() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
