"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePersistentScroll } from "@/hooks/usePersistentScroll";

interface FiltersProps<T> {
  data: T[];
  name: string;
  valueKey: string;
}

export default function Filters<T extends Size | Color>({
  data,
  name,
  valueKey,
}: FiltersProps<T>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { setSearchParam, saveScrollPosition } = usePersistentScroll();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (selectedValue === name) {
        params.delete(valueKey);
      } else {
        params.set(valueKey, name);
      }

      //? NextJS 버그때문에 스크롤을 강제로 현재 위치에 고정시킴
      //? (https://github.com/vercel/next.js/issues/49087)
      saveScrollPosition();

      router.push(`${pathname}?${params.toString()}`);
    },
    [
      pathname,
      router,
      saveScrollPosition,
      searchParams,
      selectedValue,
      valueKey,
    ],
  );

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>

      <Separator className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={() => handleClick(filter.name)}
              className={cn(
                "active:bg-slate-800 hover:bg-slate-600 hover:text-white",
                selectedValue === filter.name ? "bg-slate-600 text-white " : "",
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
