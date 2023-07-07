import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

interface GalleryProps {
  images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
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

      <TabsList className="mt-20 bg-white">
        {images.map((image) => (
          <TabsTrigger
            key={image.id}
            value={image.id}
            className="relative aspect-square w-32 h-32 sm:w-24 sm:h-24 rounded-sm overflow-hidden mr-4 hover:ring-2 active:ring-2"
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
