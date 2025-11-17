"use client";

import { Bath, Bed, Heart, House, Star, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IconBadge } from "@/utils/icon-badge";
import { Ownership, Property } from "@prisma/client";
import { formatDistance, subDays } from "date-fns";
import { nl } from "date-fns/locale";
import { formatArea } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BathIcon,
  BedIcon,
  FlameIcon,
  LocateIcon,
  MapPin,
  PenLine,
  Pin,
  ScaleIcon,
  Scaling,
  User2,
  CloudUpload,
} from "lucide-react";
import { formatEuroPrice, formatIdrPrice } from "@/lib/format";

interface PropertyCardSmallProps {
  property: Property;
}

export const PropertyCardSmall = ({ property }: PropertyCardSmallProps) => {
  const {
    type,
    slug,
    name,
    description,
    ownership,
    area,
    bathrooms,
    euroPrice,
    indoPrice,
    location,
    bedrooms,
    images,
    createdAt,
  } = property;
  return (
    <Link
      href={`/aanbod/${type}/${slug}`}
      className="bg-secondary group block overflow-hidden transition-transform hover:-translate-y-0.5"
    >
      <article className="self-start w-full">
        <div className="flex flex-col items-start gap-1 cursor-pointer">
          <div className="relative w-full h-[250px] overflow-hidden">
            {/* Top-left label */}
            <span className="absolute top-2 z-20 bg-muted-foreground text-white text-[10px] font-medium px-2 py-0.5">
              {ownership}
            </span>
            {images?.[0] ? (
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                alt={`Image of ${name}`}
                src={images[0]}
                priority
              />
            ) : (
              <Skeleton className="aspect-video w-full h-full" />
            )}
          </div>

          <div className="flex-1 flex-col">
            <div className="p-2">
              <div className="mb-2 flex justify-between text-sm md:text-xs">
                <div className="flex items-baseline gap-x-1">
                  <IconBadge size="xs" variant="transparent" icon={MapPin} />
                  <span className="flex items-center text-sm md:text-xs text-foreground font-bold uppercase">
                    {location}
                  </span>
                  <span className="text-[12px] md:text-[10px] text-foreground">
                    address
                  </span>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-xs uppercase">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                </div>
              </div>

              <div>
                <div className="md:leading-tight uppercase font-semibold group-hover:text-muted-foreground group-hover:cursor-pointer transition line-clamp-1">
                  {name}
                </div>
                <div className="my-1">
                  <p className="text-sm md:text-xs text-muted-foreground line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>

              <div className="my-1 flex items-center justify-between gap-x-2 text-sm md:text-xs">
                <div className="flex items-center gap-x-1">
                  <IconBadge
                    size="sm"
                    variant="transparent"
                    icon={CloudUpload}
                  />
                  <span className="flex items-center font-medium">
                    {formatDistance(
                      subDays(new Date(createdAt), 0),
                      new Date(),
                      { addSuffix: true, locale: nl }
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IconBadge size="sm" variant="transparent" icon={Scaling} />
                  <span className="font-bold">
                    {formatArea(area)} m
                    <sup className="font-features sups">2</sup>
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IconBadge size="sm" variant="transparent" icon={BedIcon} />
                  <span className="font-bold">{bedrooms}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IconBadge size="sm" variant="transparent" icon={BathIcon} />
                  <span className="font-bold">{bathrooms}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-base font-bold md:text-lg">
                  {formatEuroPrice(euroPrice)}
                </p>
                <p className="text-xs font-medium text-muted-foreground md:text-sm">
                  ≈ {formatIdrPrice(indoPrice)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
