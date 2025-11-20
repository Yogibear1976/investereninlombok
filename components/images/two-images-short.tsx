"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type DuoImagesShortProps = {
  imgA: { src: string; alt?: string };
  imgB: { src: string; alt?: string };
};

export const TwoImagesShort = ({ imgA, imgB }: DuoImagesShortProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-3 lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-300">
          {imgA.src ? (
            <Image
              src={imgA.src}
              alt={imgA.alt ?? "Afbeelding A"}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />
          ) : (
            <Skeleton className="aspect-video w-full h-full" />
          )}
        </div>
        <div className="relative aspect-video w-full overflow-hidden bg-gray-300">
          {imgB.src ? (
            <Image
              src={imgB.src}
              alt={imgB.alt ?? "Afbeelding B"}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />
          ) : (
            <Skeleton className="aspect-video w-full h-full" />
          )}
        </div>
      </div>
    </section>
  );
};
