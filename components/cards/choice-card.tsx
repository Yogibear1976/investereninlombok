"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ChoiceProps {
  header: string;
  description: string;
  imageUrl?: string;
  choiceLink: string;
}

export const ChoiceCard = ({
  header,
  description,
  imageUrl,
  choiceLink,
}: ChoiceProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl || "/placeholder.jpg");

  return (
    <Link href={choiceLink}>
      <article className="self-start w-full h-[350px] sm:h-[400px] lg:h-[475px]">
        <div className="flex flex-col justify-between items-start gap-6 w-full h-full overflow-hidden">
          <div className="w-full space-y-2">
            <h3 className="text-2xl font-light uppercase">{header}</h3>
            <p className="text-sm font-light leading-tight text-muted-foreground line-clamp-3">
              {description}
            </p>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] shrink-0">
            <Image
              src={imgSrc}
              alt={header}
              fill
              className="object-cover select-none"
              priority
              onError={() => setImgSrc("/placeholder.jpg")}
            />
          </div>
        </div>
      </article>
    </Link>
  );
};
