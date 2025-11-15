"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { nl } from "date-fns/locale"; // For Dutch month names

interface UpdateProps {
  date: Date;
  header: string;
  desc: string;
  slug: string;
  imageUrl?: string;
}

export const UpdateCard = ({
  date,
  header,
  desc,
  slug,
  imageUrl,
}: UpdateProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl || "/placeholder.jpg");

  return (
    <article className="w-full">
      <div className="grid sm:grid-cols-2 gap-4 pb-10">
        <div className="relative w-full h-[150px] sm:h-[200px] bg-gray-200">
          <Image
            src={imgSrc}
            alt={header}
            fill
            className="object-cover select-none"
            priority
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm uppercase text-muted-foreground">
              {format(date, "dd MMMM, yyyy", { locale: nl })}
            </p>
            <h3 className="text-2xl font-light uppercase">{header}</h3>
            <p className="text-xs font-light">{desc}</p>
          </div>

          <div>
            <Link href={`/updates/${encodeURIComponent(slug)}`}>
              <Button size="link" variant="link" className="hover:underline">
                Kijk hier ...
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
