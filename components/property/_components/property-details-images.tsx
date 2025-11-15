"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type FourSquareImagesProps = {
  images: { src: string; alt?: string }[];
};

export const PropertyDetailsImages = ({ images }: FourSquareImagesProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square w-full overflow-hidden bg-gray-300"
          >
            {img?.src ? (
              <Image
                src={img.src}
                alt={img.alt ?? `Afbeelding ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
                priority={i === 0}
              />
            ) : (
              <Skeleton className="w-full h-full aspect-square" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
