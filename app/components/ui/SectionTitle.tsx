import { cn } from '@/app/lib/utils';
import { type ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h3
      className={cn(
        'font-garamond text-2xl font-semibold text-on-surface mb-12 tracking-widest uppercase text-center',
        className,
      )}
    >
      {children}
    </h3>
  );
}
