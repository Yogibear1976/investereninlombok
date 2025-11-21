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
    <section
      className="bg-[radial-gradient(145%_110%_at_50%_0%,#0A1A2F_0%,#1E3A5F_55%,#4A86B1_95%)] dark:bg-[radial-gradient(145.05%_100%_at_50%_0%,#0F243E_0%,#264A72_57.38%,#3A5F8A_88.16%)]
 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-4 relative my-20 z-10">
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
          <h1 className="text-white font-medium tracking-tighter text-5xl md:text-6xl lg:text-7xl">
            {subject ? subject : title}
          </h1>
          <h3 className="text-slate-400 font-normal text-sm md:text-lg lg:text-xl">
            {subheader}
          </h3>
        </div>
      </div>
    </section>
  );
};
