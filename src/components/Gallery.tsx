"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
  const [targetId, setTargetId] = useState(images[0].id);

  return (
    <Tabs
      defaultValue={images[0].id}
      className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none"
    >
      {images.map((image) => (
        <TabsContent key={image.id} value={image.id}>
          <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </div>
        </TabsContent>
      ))}

      <TabsList className="mt-20 bg-transparent w-full">
        {images.map((image) => (
          <TabsTrigger
            key={image.id}
            value={image.id}
            className={cn(
              "relative aspect-square w-32 sm:w-24 rounded-sm overflow-hidden mr-4",
              targetId === image.id && "ring-2 ring-offset-2 ring-violet-800",
            )}
            onClick={() => setTargetId(image.id)}
          >
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
