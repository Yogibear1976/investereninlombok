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
    catchLine,
    euroPrice,
    ownership,
    indoPrice,
    livingArea,
    landArea,
    bedrooms,
    images,
  } = property;

  const area = landArea ?? 0;

  return (
    <Link
      href={`/aanbod/${type}/${slug}`}
      className="bg-secondary group block overflow-hidden transition-transform hover:-translate-y-0.5"
    >
      <article className="self-start w-full">
        <div className="flex flex-col items-start gap-1 cursor-pointer">
          <div className="relative w-full h-[600px] overflow-hidden">
            {/* Top-left label */}
            <span className="absolute top-4 z-20 bg-nature text-white text-sm font-medium px-2 py-0.5">
              {ownership}
            </span>
            {/* Top-right label */}
            <span className="absolute top-4 right-0 z-20 bg-azure text-white uppercase text-sm font-medium px-2 py-0.5">
              {catchLine}
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-30">
              <span className="text-white text-sm font-normal uppercase tracking-wide px-4 py-2 bg-white/10 backdrop-blur-sm">
                Bekijk investering
              </span>
            </div>
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
              <div className="flex items-center justify-between w-full gap-4">
                <p className="md:leading-tight uppercase font-semibold group-hover:text-muted-foreground group-hover:cursor-pointer transition line-clamp-1">
                  {name}
                </p>
                <p className="font-bold whitespace-nowrap">
                  {formatEuroPrice(euroPrice)}
                </p>
              </div>

              <p className="text-sm font-normal text-muted-foreground uppercase">
                {type === "land" ? (
                  <>
                    {area} m<sup className="font-features sups">2</sup> ≈{" "}
                    {(area / 100).toFixed(0)} are
                  </>
                ) : (
                  <>
                    {livingArea} m<sup className="font-features sups">2</sup> –{" "}
                    {bedrooms} slaapkamers
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
