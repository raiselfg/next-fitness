import { IconBolt } from '@tabler/icons-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/constants';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4 p-3">
            <IconBolt size={16} />
            <span className="text-md">Новое поколение тренировок</span>
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Достигайте целей <br className="hidden sm:block" />с искусственным интеллектом
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Персональные тренировки, генерация упражнений и точный счетчик калорий. Все, что нужно
            для вашего прогресса, в одном приложении.
          </p>
          <Link href={APP_ROUTES.ONBOARDING}>
            <Button
              size="xl"
              className="bg-primary cursor-pointer text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20"
            >
              Начать бесплатно
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
