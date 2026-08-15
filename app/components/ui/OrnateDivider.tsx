import type { LucideIcon } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface OrnateDividerProps {
  Icon?: LucideIcon;
  className?: string;
}

export function OrnateDivider({ Icon = Sparkles, className }: OrnateDividerProps) {
  return (
    <div className={cn('ornate-divider w-full max-w-sm mx-auto my-8', className)}>
      <Icon className="mx-5 w-5 h-5 text-primary flex-shrink-0" aria-hidden />
    </div>
  );
}
