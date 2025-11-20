"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type OneImageStretchedProps = {
  img: { src: string; alt?: string };
};

export const OneImageStretched = ({ img }: OneImageStretchedProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-4">
      <div className="relative w-full h-[200px] sm:h-[275px] lg:h-[300px] overflow-hidden bg-gray-300">
        {img?.src ? (
          <Image
            src={img.src}
            alt={img.alt ?? "Afbeelding"}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
    </section>
  );
};
