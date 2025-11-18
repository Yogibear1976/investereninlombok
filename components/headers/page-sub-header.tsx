"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

type IconName = keyof typeof Icons;

interface PageSubHeaderProps {
  smallTitleTop: string;
  iconName?: IconName;
  title: string;
  description?: string;
}

export const PageSubHeader = ({
  smallTitleTop,
  iconName = "Leaf",
  title,
  description,
}: PageSubHeaderProps) => {
  const IconComponent = Icons[iconName] as LucideIcon;
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full z-10 flex flex-col gap-4 px-4 my-8 md:mt-16 md:mb-10">
        <div className="flex flex-row gap-0.5 md:gap-1">
          <IconComponent className="text-nature w-3 h-3 md:w-4 md:h-4" />
          <h3 className="text-xs font-medium tracking-wide uppercase text-muted-foreground md:text-sm">
            {smallTitleTop}
          </h3>
        </div>

        <div className="flex flex-col w-full md:max-w-3xl lg:max-w-6xl gap-2 sm:gap-4">
          <h1 className="text-2xl font-light tracking-tight md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="text-xs sm:text-base text-muted-foreground leading-tight">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
