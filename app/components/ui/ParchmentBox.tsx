import { cn } from '@/app/lib/utils';
import { type ReactNode } from 'react';

interface ParchmentBoxProps {
  children: ReactNode;
  className?: string;
}

export function ParchmentBox({ children, className }: ParchmentBoxProps) {
  return (
    <div className={cn('parchment-box rounded-sm', className)}>
      {children}
    </div>
  );
}
