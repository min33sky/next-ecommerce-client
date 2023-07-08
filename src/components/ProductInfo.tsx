import { formatToCurrencyKRW } from "@/lib/utils";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          {formatToCurrencyKRW(product.price)}
        </p>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">사이즈 : </h3>
          <div>{product.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">컬러 : </h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: product.color.value }}
          ></div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          <ShoppingCart /> 장바구니에 담기
        </Button>
      </div>
    </div>
  );
}
