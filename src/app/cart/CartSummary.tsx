import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { formatToCurrencyKRW } from "@/lib/utils";
import React from "react";

export default function CartSummary() {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <div>{formatToCurrencyKRW(totalPrice)}</div>
        </div>
      </div>
      <Button
        onClick={() => alert("구현 중입니다.")}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
}
