'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { IconCheck, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import { Suspense } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { BirthdatePicker } from '@/components/ui/birthdate-picker';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GENDER_OPTIONS } from '@/features/onboarding/constants';
import { BioStepInput, bioStepSchema } from '@/features/onboarding/schema/strategy';
import { cn } from '@/lib/cn';

interface BioStepProps {
  defaultValues?: Partial<BioStepInput>;
  onNext: (data: BioStepInput) => void;
  onBack?: () => void;
  isLast?: boolean;
  isPending?: boolean;
}

export function BioStep({
  defaultValues,
  onNext,
  onBack,
  isLast = false,
  isPending = false,
}: BioStepProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BioStepInput>({
    resolver: valibotResolver(bioStepSchema),
    defaultValues: {
      gender: defaultValues?.gender,
      height: defaultValues?.height,
      weight: defaultValues?.weight,
      bodyFat: defaultValues?.bodyFat,
      birthDate: defaultValues?.birthDate,
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col grow">
      <FieldGroup className="grow">
        <div className="grid grid-cols-2 gap-4">
          <Suspense>
            <Field>
              <Controller
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <BirthdatePicker
                    id="birthDate"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!errors.birthDate}
                  />
                )}
              />
              {errors.birthDate && (
                <p className="text-xs text-red-500">{errors.birthDate.message}</p>
              )}
            </Field>
          </Suspense>

          <Field>
            <FieldLabel>Пол</FieldLabel>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={cn('w-full', errors.gender && 'border-red-500')}>
                    <SelectValue placeholder="-" />
                  </SelectTrigger>
                  <SelectContent>
                    {GENDER_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && <p className="text-xs text-red-500">{errors.gender.message}</p>}
          </Field>

          <Field>
            <FieldLabel htmlFor="height">Рост (см)</FieldLabel>
            <Input
              id="height"
              type="number"
              placeholder="175"
              {...register('height', { valueAsNumber: true })}
              className={errors.height ? 'border-red-500' : ''}
            />
            {errors.height && <p className="text-xs text-red-500">{errors.height.message}</p>}
          </Field>

          <Field>
            <FieldLabel htmlFor="weight">Вес (кг)</FieldLabel>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              {...register('weight', { valueAsNumber: true })}
              className={errors.weight ? 'border-red-500' : ''}
            />
            {errors.weight && <p className="text-xs text-red-500">{errors.weight.message}</p>}
          </Field>
        </div>

        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="bodyFat">Процент жира (%)</FieldLabel>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="underline text-xs">
                  Не знаете свой процент жира?
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Процент жира</DialogTitle>
                  <DialogDescription>
                    Определите свой процент жира ориентируясь по этой картинике со сравнительными
                    данными
                  </DialogDescription>
                </DialogHeader>
                <Image
                  className="mx-auto"
                  src="/fat_percentage.jpg"
                  alt="Body fat"
                  width={900}
                  height={900}
                />
              </DialogContent>
            </Dialog>
          </div>
          <Input
            id="bodyFat"
            type="number"
            placeholder="15"
            {...register('bodyFat', { valueAsNumber: true })}
            className={errors.bodyFat ? 'border-red-500' : ''}
          />
          {errors.bodyFat && <p className="text-xs text-red-500">{errors.bodyFat.message}</p>}
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
