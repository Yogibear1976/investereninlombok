"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type DuoSquareImagesProps = {
  imgA: { src: string; alt?: string };
  imgB: { src: string; alt?: string };
};

export const TwoSquareImages = ({ imgA, imgB }: DuoSquareImagesProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-8 sm:pt-12 lg:pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-300">
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
        <div className="relative aspect-square w-full overflow-hidden bg-gray-300">
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
