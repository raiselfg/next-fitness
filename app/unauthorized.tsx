import { IconLock } from '@tabler/icons-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_ROUTES } from '@/constants';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl border-muted/40">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2 animate-in zoom-in-50 duration-500">
            <IconLock className="w-8 h-8 text-primary" stroke={2} />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold tracking-tight">
              401 - Доступ запрещен
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Для просмотра этой страницы необходимо войти в аккаунт
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-sm text-center text-muted-foreground">
            Пожалуйста, авторизуйтесь чтобы продолжить работу с сервисом
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button asChild className="w-full font-semibold" size="lg">
            <Link href={APP_ROUTES.LOGIN}>Войти в аккаунт</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground"
          >
            <Link href={APP_ROUTES.HOME}>Вернуться на главную</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
