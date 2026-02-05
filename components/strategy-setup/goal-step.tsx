'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  GOAL_LABELS,
  GOAL_OPTIONS,
  LEVEL_LABELS,
  LEVEL_OPTIONS,
  PRIORITY_LABELS,
  PRIORITY_OPTIONS,
  SPEED_LABELS,
  SPEED_OPTIONS,
} from '@/constants';
import { GoalStepInput, goalStepSchema } from '@/schema/strategy';

interface GoalStepProps {
  defaultValues?: Partial<GoalStepInput>;
  onNext: (data: GoalStepInput) => void;
  onBack: () => void;
}

export function GoalStep({ defaultValues, onNext, onBack }: GoalStepProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GoalStepInput>({
    resolver: valibotResolver(goalStepSchema),
    defaultValues: {
      goal: defaultValues?.goal,
      speed: defaultValues?.speed,
      level: defaultValues?.level,
      priority: defaultValues?.priority,
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col grow">
      <FieldGroup className="grow">
        <Field>
          <FieldLabel>Цель</FieldLabel>
          <Controller
            control={control}
            name="goal"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={errors.goal ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Выберите цель" />
                </SelectTrigger>
                <SelectContent>
                  {GOAL_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {GOAL_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.goal && <p className="text-xs text-red-500">{errors.goal.message}</p>}
        </Field>

        <Field>
          <FieldLabel>Темп</FieldLabel>
          <Controller
            control={control}
            name="speed"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={errors.speed ? 'border-red-500' : ''}>
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {SPEED_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {SPEED_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.speed && <p className="text-xs text-red-500">{errors.speed.message}</p>}
        </Field>

        <Field>
          <FieldLabel>Опыт</FieldLabel>
          <Controller
            control={control}
            name="level"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={errors.level ? 'border-red-500' : ''}>
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {LEVEL_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {LEVEL_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.level && <p className="text-xs text-red-500">{errors.level.message}</p>}
        </Field>

        <Field>
          <FieldLabel>Приоритет</FieldLabel>
          <Controller
            control={control}
            name="priority"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={errors.priority ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Выберите приоритет" />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITY_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {PRIORITY_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.priority && <p className="text-xs text-red-500">{errors.priority.message}</p>}
        </Field>
      </FieldGroup>

      <CardFooter className="flex justify-between border-t pt-6 rounded-b-xl px-0 mt-6">
        <Button type="button" variant="ghost" onClick={onBack} className="pl-2">
          <IconChevronLeft className="w-4 h-4 mr-1" /> Назад
        </Button>

        <Button type="submit">
          Далее <IconChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </form>
  );
}
