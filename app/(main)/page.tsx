import { CTA } from '@/components/landing/cta';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';

export default function Page() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
