"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

type AboutSectionProps = {
  imgA: { src: string; alt?: string };
  imgB: { src: string; alt?: string };
};

export const AboutSection = ({ imgA, imgB }: AboutSectionProps) => {
  const { theme } = useTheme();

  return (
    <section className="relative flex flex-col items-center w-full pt-8 sm:pt-12 lg:pt-24">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-end">
          {/* Text & Image Left */}
          <div className="flex flex-col items-start gap-10">
            {/* Heading & Text */}
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                Over ons
              </h2>

              <p className="max-w-[520px] text-xl sm:text-2xl font-normal tracking-tight">
                We begeleiden{" "}
                <span className="font-medium text-sky">investeerders</span> die
                op zoek zijn naar een veilige en rendabele investering in
                villa's op Lombok, Indonesië. We regelen alles: van
                grondselectie en vergunningen tot{" "}
                <span className="font-medium text-sky">bouw</span> en{" "}
                <span className="font-medium text-sky">verhuurmanagement</span>.
              </p>

              <Button asChild variant="sky">
                <Link href="/over-ons">Meer hier</Link>
              </Button>
            </div>

            {/* Image 1 */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <div className="w-full h-full flex items-end justify-center bg-gray-300 select-none">
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
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full h-[300px] sm:h-[500px] lg:h-[900px] flex items-end justify-center bg-gray-300 select-none">
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
      </div>
    </section>
  );
};
