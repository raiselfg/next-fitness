import { IconCheck, IconChevronRight } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';

interface StepSubmitButtonProps {
  isLast: boolean;
  isPending: boolean;
}

export function StepSubmitButton({ isLast, isPending }: StepSubmitButtonProps) {
  return (
    <Button type="submit" disabled={isPending}>
      {isLast ? (
        isPending ? (
          'Сохранение...'
        ) : (
          <>
            Завершить <IconCheck className="w-4 h-4 ml-2" />
          </>
        )
      ) : (
        <>
          Далее <IconChevronRight className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  );
}
