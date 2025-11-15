"use client";

import * as React from "react";
import { HeadingEmptyState } from "@/components/headers/heading-empty-state";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div
      className='
        h-[66.66vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      '
    >
      <HeadingEmptyState center title={title} subtitle={subtitle} />
    </div>
  );
};
