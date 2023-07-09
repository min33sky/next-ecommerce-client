"use client";

import React, { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export default function NavbarActions() {
  const { items } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link
        href="/cart"
        className={buttonVariants({
          size: "sm",
        })}
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Link>
    </div>
  );
}
