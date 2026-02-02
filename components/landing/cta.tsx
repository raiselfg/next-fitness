import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/constants';

export const CTA = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-background/70 to-primary/25 backdrop-blur-sm -skew-y-3 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] border border-primary/20 bg-linear-to-br from-background/60 to-background/30 backdrop-blur-sm text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Готовы изменить свое тело?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже тренируются эффективнее с помощью
            NEXT Fitness.
          </p>
          <Link href={APP_ROUTES.SIGNUP}>
            <Button
              size="xl"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-2xl shadow-primary/30"
            >
              Создать аккаунт <IconArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
