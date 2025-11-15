"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PropertyCardLarge } from "@/components/cards/property-card-large";
import { Property } from "@prisma/client";
import { useTheme } from "next-themes";

const PROPERTY_TYPES = ["off-plan", "in-aanbouw", "bestaand", "land"];

interface OfferingSectionProps {
  properties: Property[];
}

export const OfferingSection = ({ properties }: OfferingSectionProps) => {
  console.log(properties);
  const [selectedType, setSelectedType] = useState("off-plan");

  const filtered = properties.filter(
    (property) => property.type === selectedType
  );

  const { theme } = useTheme();

  return (
    <section className="w-full pt-6">
      <div className="w-full max-w-[1952px] mx-auto px-4">
        {/* Filters + Link Row */}
        <div
          className="
        flex items-center gap-4
        overflow-x-auto scrollbar-hide pb-1
        sm:overflow-visible
      "
        >
          {/* Filters */}
          <div className="flex gap-3 shrink-0">
            {PROPERTY_TYPES.map((type) => (
              <Button
                key={type}
                variant="link"
                size="link"
                onClick={() => setSelectedType(type)}
                className={`whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          {/* Alle projecten aligned to flex-end */}
          <Link
            href="/aanbod"
            className="text-sm whitespace-nowrap hover:underline ml-auto shrink-0"
          >
            Alle projecten
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-6">
          <div
            className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          max-w-7xl mx-auto
        "
          >
            {filtered.slice(0, 3).map((property) => (
              <PropertyCardLarge key={property.id} property={property} />
            ))}

            {filtered.length === 0 && (
              <p className="text-gray-500 text-center col-span-full py-4">
                Geen resultaten gevonden voor {selectedType}.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
