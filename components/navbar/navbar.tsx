"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons/Icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeSwitcher } from "./theme-switcher";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { ModalAppointment } from "@/components/modals/modal-appointment";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useTheme } from "next-themes";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  const { theme } = useTheme();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-all duration-150 px-4",
        scrolled && "border-b"
      )}
    >
      <div className="container max-w-screen-2xl mx-auto flex h-9 items-center justify-between gap-4">
        {/* LEFT — Hamburger on mobile, Logo on tablet+ */}
        <div className="flex items-center gap-2">
          {/* Hamburger only on mobile (<md) */}
          <div className="flex md:hidden">
            <MobileNav />
          </div>

          {/* Logo — visible on tablets (md+) */}
          <Link href="/" className="hidden md:flex items-center ml-1">
            <Image
              priority
              className="cursor-pointer h-7 w-auto"
              src={
                theme === "dark"
                  ? "/logo/navbar/investeren-in-lombok-diap.svg"
                  : "/logo/navbar/investeren-in-lombok.svg"
              }
              height={28}
              width={120}
              alt="investeren-in-lombok-logo"
            />
          </Link>
        </div>

        {/* CENTER — desktop nav only */}
        <div className="hidden lg:flex">
          <MainNav />
        </div>

        {/* RIGHT — always visible */}
        <div className="flex items-center gap-2 ml-auto">
          <nav className="flex items-center h-5 space-x-2">
            {/* Phone */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={siteConfig.links.mobilePhone} target="_blank">
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent">
                      <Icons.phone className="h-4 w-4" />
                    </button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Bel mij</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* WhatsApp */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={siteConfig.links.whatsapp} target="_blank">
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent">
                      <Icons.whatsapp className="h-4 w-4" />
                    </button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>WhatsApp mij</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* LinkedIn */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={siteConfig.links.linkedin} target="_blank">
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent">
                      <Icons.linkedin className="h-4 w-4 text-sky" />
                    </button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Separator orientation="vertical" className="mx-1" />

            <ThemeSwitcher />

            <Separator orientation="vertical" className="mx-1" />

            <ModalAppointment
              title={
                <>
                  <span className="md:hidden">Afspraak</span>
                  <span className="hidden md:inline">Afspraak maken</span>
                </>
              }
              sky
              navbar
              available
            />
          </nav>
        </div>
      </div>
    </header>
  );
};
