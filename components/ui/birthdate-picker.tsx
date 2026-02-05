'use client';

import * as React from 'react';
import { ru } from 'react-day-picker/locale/ru';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldLabel } from '@/components/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/cn';

interface BirthdatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  id?: string;
  error?: boolean;
}

const maxAge = 65;
const minAge = 14;

export function BirthdatePicker({ value, onChange, id, error }: BirthdatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const today = new Date();
  const minAvailableDate = new Date(
    today.getFullYear() - minAge,
    today.getMonth(),
    today.getDate(),
  );
  const maxAvailableDate = new Date(
    today.getFullYear() - maxAge,
    today.getMonth(),
    today.getDate(),
  );

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor={id}>Дата рождения</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            className={cn('justify-start font-normal w-full', error && 'border-red-500')}
          >
            {value
              ? value.toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              : 'Выберите дату рождения'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            disabled={{
              before: maxAvailableDate,
              after: minAvailableDate,
            }}
            locale={ru}
            mode="single"
            selected={value}
            defaultMonth={value || minAvailableDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
