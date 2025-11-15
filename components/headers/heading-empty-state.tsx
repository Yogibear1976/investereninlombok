"use client";

import * as React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const HeadingEmptyState: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-3xl font-bold text-fresh-foreground">{title}</div>
      <div className="font-normal text-lg text-primary">{subtitle}</div>
    </div>
  );
};
