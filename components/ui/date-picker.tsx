'use client';

import * as React from 'react';
import { ru } from 'react-day-picker/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/cn';

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  defaultMonth?: Date;
  placeholder?: string;
  id?: string;
  className?: string;
  error?: boolean;
}

export function DatePicker({
  value,
  onChange,
  disabled,
  minDate,
  maxDate,
  defaultMonth,
  placeholder = 'Pick a date',
  id,
  className,
  error,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id={id}
          className={cn(
            'justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            error && 'border-red-500',
            className,
          )}
        >
          {value ? value.toLocaleDateString() : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date);
            setOpen(false);
          }}
          disabled={
            disabled ||
            (minDate || maxDate
              ? (date) => (minDate ? date < minDate : false) || (maxDate ? date > maxDate : false)
              : undefined)
          }
          defaultMonth={defaultMonth || value}
          initialFocus
          locale={ru}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
