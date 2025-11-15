"use client";

import * as React from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section className="py-4 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[550px] aspect-4/5 overflow-hidden">
            <Image
              src="/aboutme/about_me.png"
              alt="Over mij"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-2 md:order-1 flex flex-col items-start gap-6">
          <Badge variant="nature">
            Ik geloof in een no-nonsense benadering
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Krachtig en zorgeloos met{" "}
            <span className="text-sky font-medium tracking-tight">
              Investeren in Lombok
            </span>{" "}
            je medewerkers up-to-date houden.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed tracking-tight max-w-2xl">
            Ik heb <span className="font-medium">Investeren in Lombok</span>{" "}
            opgericht …
          </p>

          <div className="flex flex-col gap-4 text-primary">
            <p className="font-bold text-lg lg:text-xl tracking-tight leading-snug">
              Veel buitenlandse investeringsprojecten zijn onnodig ingewikkeld …
            </p>
            <p className="text-base lg:text-lg font-normal tracking-tight leading-relaxed">
              Met een transparante werkwijze, betrouwbare lokale partners …
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
