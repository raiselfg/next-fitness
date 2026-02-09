'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { IconCheck, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LOCATION_OPTIONS } from '@/features/onboarding/constants';
import { TrainingStepInput, trainingStepSchema } from '@/features/onboarding/schema/strategy';

interface TrainingStepProps {
  defaultValues?: Partial<TrainingStepInput>;
  onNext: (data: TrainingStepInput) => void;
  onBack: () => void;
  isLast?: boolean;
  isPending?: boolean;
}

export function TrainingStep({
  defaultValues,
  onNext,
  onBack,
  isLast = false,
  isPending = false,
}: TrainingStepProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingStepInput>({
    resolver: valibotResolver(trainingStepSchema),
    defaultValues: {
      location: defaultValues?.location,
      frequency: defaultValues?.frequency,
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col grow">
      <FieldGroup className="grow">
        <Field>
          <FieldLabel>Где тренируемся?</FieldLabel>
          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={errors.location ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Локация" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATION_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="frequency">Тренировок в неделю</FieldLabel>
          <Input
            id="frequency"
            type="number"
            min={1}
            max={7}
            placeholder="3"
            {...register('frequency', { valueAsNumber: true })}
            className={errors.frequency ? 'border-red-500' : ''}
          />
          {errors.frequency && <p className="text-xs text-red-500">{errors.frequency.message}</p>}
        </Field>
      </FieldGroup>

      <CardFooter className="flex justify-between border-t pt-6 rounded-b-xl px-0 mt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          disabled={isPending}
          className="pl-2"
        >
          <IconChevronLeft className="w-4 h-4 mr-1" /> Назад
        </Button>

        <Button type="submit" disabled={isPending}>
          {isLast ? (
            isPending ? (
              'Завершение...'
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
