import React from "react";
import ProductCard from "./ProductCard";
import NoResult from "../NoResult";

interface ProductListProps {
  title: string;
  items: Product[];
}

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-x-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
