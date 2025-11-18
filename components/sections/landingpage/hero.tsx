"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTheme } from "next-themes";
import { ModalRegistration } from "@/components/modals/modal-registration";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col items-center content-center flex-nowrap w-full h-screen min-h-[680px] border-b relative overflow-visible pb-5">
      <div className="flex flex-col flex-nowrap items-center justify-start flex-[1_0_0px] w-full max-w-[1952px] h-px relative overflow-visible px-4">
        <div className="flex flex-col flex-nowrap items-center justify-start gap-4 flex-[1_0_0px] w-full max-w-[1952px] h-px relative overflow-visible px-4">
          <div className="absolute inset-0 -z-10">
            <Image
              src={theme === "dark" ? "/hero/test.jpg" : "/hero/test_2.jpg"}
              alt="SmartMoveAsia Investment Platform"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="block object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="relative mt-2 md:mt-0 grid w-full gap-6 p-0 overflow-visible lg:grid-cols-4">
          {/* Tekst links */}
          <div className="col-span-1 lg:col-span-3 lg:max-w-[960px] w-full self-start">
            <h1 className="text-[clamp(2rem,6vw,5rem)] font-normal sm:font-light uppercase leading-tight tracking-tight ">
              Zorgeloos investeren in{" "}
              <span className="text-sky font-semibold">Lombok</span>, Indonesië.
            </h1>
            <h3 className="mt-1 text-base sm:text-xl text-muted-foreground font-normal leading-tight">
              Creëer een passief inkomen voor de lange termijn met een huis of
              villa in Zuid-Lombok. Een fiscaal aantrekkelijke investering voor
              Nederlandse beleggers, omdat het onroerend goed buiten de
              Nederlandse Box 3-heffing valt.
            </h3>
          </div>

          {/* Info rechts */}
          <div className="flex flex-col justify-between w-full h-full pt-6 space-y-6 lg:pt-4">
            <div className="hidden lg:block lg:max-w-[280px] w-full">
              <p className="text-sm sm:text-lg font-normal leading-tight">
                Wij staan voor transparantie, vertrouwen en duurzaamheid in de{" "}
                <span className="text-sky font-semibold">
                  Lombok vastgoedmarkt
                </span>
                .
              </p>
            </div>

            <div className="w-full lg:max-w-[280px]">
              <p className="pb-2 text-sm sm:text-base font-normal leading-tight">
                Blijf op de hoogte van updates en nieuwe projecten als lid:
              </p>
              <ModalRegistration title="Word lid ..." sky available />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
