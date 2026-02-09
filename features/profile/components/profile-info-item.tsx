import { type Icon as TablerIcon, IconChevronRight } from '@tabler/icons-react';
import { ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface InfoItemProps {
  label: string;
  value: ReactNode;
  icon: TablerIcon;
  className?: string;
  iconColor?: string;
}

export const InfoItem = ({ label, value, icon: Icon, className, iconColor }: InfoItemProps) => {
  const isEmpty = !value || value === '—' || value === '';

  return (
    <div
      className={cn(
        'group flex items-center justify-between gap-3 py-3 px-3 rounded-xl transition-all hover:bg-muted/50 border-b border-muted/10 last:border-0 cursor-pointer',
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300',
            iconColor ||
              'bg-secondary/80 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary',
          )}
        >
          <Icon size={20} stroke={1.5} />
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {label}
          </span>
          <span
            className={cn(
              'text-sm font-semibold transition-colors',
              isEmpty ? 'text-muted-foreground/40 font-normal italic' : 'text-foreground',
            )}
          >
            {isEmpty ? 'Не указано' : value}
          </span>
        </div>
      </div>

      <IconChevronRight
        size={18}
        className="text-muted-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-1 transition-all"
      />
    </div>
  );
};
