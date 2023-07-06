import React from 'react';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NavbarActions() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button size={'sm'} className={cn('rounded-full')}>
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}
