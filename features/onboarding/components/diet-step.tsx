'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { IconCheck, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { DietStepInput, dietStepSchema } from '@/features/onboarding/schema/strategy';

interface DietStepProps {
  defaultValues?: Partial<DietStepInput>;
  onNext: (data: DietStepInput) => void;
  onBack: () => void;
  isLast?: boolean;
  isPending?: boolean;
}

export function DietStep({
  defaultValues,
  onNext,
  onBack,
  isLast = false,
  isPending = false,
}: DietStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DietStepInput>({
    resolver: valibotResolver(dietStepSchema),
    defaultValues: {
      meals: defaultValues?.meals,
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col grow">
      <FieldGroup className="grow">
        <Field>
          <FieldLabel htmlFor="meals">Приемов пищи в день</FieldLabel>
          <Input
            id="meals"
            type="number"
            placeholder="3"
            {...register('meals', { valueAsNumber: true })}
            className={errors.meals ? 'border-red-500' : ''}
          />
          {errors.meals && <p className="text-xs text-red-500">{errors.meals.message}</p>}
        </Field>
      </FieldGroup>

      <CardFooter className="flex justify-between border-t pt-6 rounded-b-xl px-0 mt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          disabled={!onBack || isPending}
          className="pl-2"
        >
          <IconChevronLeft className="w-4 h-4 mr-1" /> Назад
        </Button>

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
      </CardFooter>
    </form>
  );
}
