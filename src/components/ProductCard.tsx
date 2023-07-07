'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { Expand, ShoppingCart } from 'lucide-react';
import { formatToCurrencyKRW } from '@/lib/utils';

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p3 space-y-4">
      {/* Image and Actions */}
      <div className="aspect-square rounded-xl bg-red-100 relative">
        <Image
          src={data.images?.[0].url}
          fill
          alt="Product Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button size={'icon'} variant={'secondary'}>
              <Expand size={20} className="text-gray-600" />
            </Button>
            <Button size={'icon'}>
              <ShoppingCart size={20} className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatToCurrencyKRW(data.price)}</p>
      </div>
    </div>
  );
}
