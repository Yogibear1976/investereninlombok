"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { formatDistance, subDays } from "date-fns";
import { Icons } from "../icons/Icons";
import Link from "next/link";
import { Mail } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  title: string;
  subheader: string;
  subject: string;
}

const toLowerFirst = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);

export const PageHeader = ({ title, subheader, subject }: PageHeaderProps) => {
  return (
    <section className="bg-muted relative overflow-hidden">
      <div className="px-4 flex flex-col gap-4 relative my-20 z-10">
        <div className="justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Icons.chevron_right className="mt-0" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {subject ? (
                  <BreadcrumbLink href={`/${toLowerFirst(title)}`}>
                    {title}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {subject && (
                <>
                  <BreadcrumbSeparator>
                    <Icons.chevron_right className="mt-0" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{subject}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col max-w-[89vw] md:max-w-2xl lg:max-w-3xl gap-4">
          <h1 className=" font-medium tracking-tighter text-4xl md:text-6xl lg:text-7xl">
            {subject ? subject : title}
          </h1>
          <h3 className=" font-normal text-muted-foreground text-sm md:text-lg lg:text-xl">
            {subheader}
          </h3>
        </div>
      </div>
    </section>
  );
};
