"use client";

import { Bath, Bed, Heart, House, Star, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { Property } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";
import { IconBadge } from "@/utils/icon-badge";
import { MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatEuroPrice } from "@/lib/format";

interface PropertyCardLargeProps {
  property: Property;
}

export const PropertyCardLarge = ({ property }: PropertyCardLargeProps) => {
  const {
    location,
    type,
    slug,
    name,
    euroPrice,
    ownership,
    indoPrice,
    livingArea,
    bedrooms,
    images,
  } = property;
  // const [imgSrc, setImgSrc] = useState(
  //   property.images[0] || "/placeholder.jpg"
  // );

  return (
    <Link
      href={`/aanbod/${type}/${slug}`}
      className="bg-secondary group block overflow-hidden transition-transform hover:-translate-y-0.5"
    >
      <article className="self-start w-full">
        <div className="flex flex-col items-start gap-1 cursor-pointer">
          <div className="relative w-full h-[600px] overflow-hidden">
            {/* Top-left label */}
            <span className="absolute top-2 z-20 bg-nature text-white text-[10px] font-medium px-2 py-0.5">
              {ownership}
            </span>
            {images[0] ? (
              <Image
                src={images[0]}
                alt={`Image of ${name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                priority
              />
            ) : (
              <Skeleton className="aspect-video w-full h-full" />
            )}
          </div>

          <div className="flex-1 flex-col gap-2 w-full">
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
              <div className="flex justify-between w-full">
                <p className="md:leading-tight uppercase font-semibold group-hover:text-muted-foreground group-hover:cursor-pointer transition line-clamp-1">
                  {name}
                </p>
                <p className="font-bold">{formatEuroPrice(euroPrice)}</p>
              </div>

              <p className="text-sm font-normal text-muted-foreground uppercase">
                {livingArea} m<sup className="font-features sups">2</sup> -{" "}
                {bedrooms} slaapkamers
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
