"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import Link from "next/link";
import { UpdateCard } from "@/components/cards/update-card";

const updateCards = [
  {
    date: "2025-07-11T16:17:59.165+00:00",
    header: "Villa Sun Palm",
    slug: "test",
    desc: "De bouw van de nieuwe villa’s in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
    imageUrl: "/cards/large-card.jpg",
  },
  {
    date: "2025-08-18T16:17:59.165+00:00",
    header: "Townhouses Hillside land",
    slug: "test",
    desc: "De bouw van de nieuwe villa’s in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
    imageUrl: "/cards/large-card.jpg",
  },
  {
    date: "2025-02-03T16:17:59.165+00:00",
    header: "Eale Villas",
    slug: "test",
    desc: "De bouw van de nieuwe villa's in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
    imageUrl: "/cards/large-card.jpg",
  },
  {
    date: "2025-09-02T16:17:59.165+00:00",
    header: "Joe on the Hill",
    slug: "test",
    desc: "De bouw van de nieuwe villa's in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
    imageUrl: "/cards/large-card.jpg",
  },
];

export const Updates = () => {
  // ({updates}) from MongoDB //
  const { theme } = useTheme();

  return (
    <section className="relative w-full max-w-7xl mx-auto pt-8 sm:pt-12 lg:pt-24">
      <div className="w-full flex flex-col items-center px-4">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10">
          <div className="flex flex-row items-end justify-between w-full">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter">
              Projectupdates
            </h2>
            <Link href="/updates">
              <p className="text-sm hover:underline cursor-pointer">
                Alle updates
              </p>
            </Link>
          </div>

          {/* Updates Grid */}
          <div className="grid w-full mx-auto max-w-7xl gap-4 auto-rows-min md:grid-cols-2">
            {updateCards.slice(0, 2).map((update) => (
              <UpdateCard key={update.header} {...update} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
