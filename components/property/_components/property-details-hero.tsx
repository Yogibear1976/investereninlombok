"use client";
import Image from "next/image";
import { formatEuroPrice, formatArea } from "@/lib/format";
import { Property } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { IconBadge } from "@/utils/icon-badge";
import { ArrowDownToDot, MapPin } from "lucide-react";

interface PropertyDetailsHeroProps {
  property: Property;
}

export const PropertyDetailsHero = ({ property }: PropertyDetailsHeroProps) => {
  const {
    location,
    name,
    description,
    landArea,
    type,
    ownership,
    euroPrice,
    images,
  } = property;

  const area = landArea ?? 0;

  return (
    <div className="relative flex flex-col items-start gap-8 md:gap-14 w-full scroll-mt-5">
      <div className="flex flex-col items-start gap-2 w-full overflow-hidden">
        <div className="flex items-center gap-0.5 select-none pointer-events-none ml-1">
          <IconBadge size="sm" variant="transparent" icon={MapPin} />
          <span className="text-sm uppercase text-muted-foreground wrap-break-word">
            {location}
          </span>
        </div>
        <div className="w-full max-w-[1080px] select-none pointer-events-none whitespace-pre-wrap wrap-break-word">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light uppercase tracking-tight">
            {name}
          </h1>
        </div>
        <div className="w-full max-w-[1080px] select-none pointer-events-none whitespace-pre-wrap wrap-break-word">
          <h1 className="text-muted-foreground text-xs sm:text-sm md:text-base font-light tracking-tight">
            {description}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        <div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs sm:text-sm uppercase text-muted-foreground">
              Grondoppervlak
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase">
              {formatArea(area)} m²{" "}
              <span className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                / {(area / 100).toFixed(2)} are
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs sm:text-sm uppercase text-muted-foreground">
              Status
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase">
              {type}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs sm:text-sm uppercase text-muted-foreground">
              Juridische vorm
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase">
              {ownership}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs sm:text-sm uppercase text-muted-foreground">
              Prijs
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase">
              {formatEuroPrice(euroPrice)}
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex-none w-full aspect-square md:aspect-video overflow-hidden">
        {images[0] ? (
          <Image
            src={images[0]}
            alt={`Afbeelding van ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full"
            priority
          />
        ) : (
          <Skeleton className="aspect-video w-full h-full" />
        )}
      </div>
    </div>
  );
};
