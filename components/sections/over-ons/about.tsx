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
          <Badge variant="muted">Ik geloof in een no-nonsense benadering</Badge>

          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Waarom help ik jouw met{" "}
            <span className="text-sky font-medium tracking-tight">
              Investeren in Lombok
            </span>{" "}
            ?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed tracking-tight max-w-2xl">
            Sinds mijn eerste bezoek aan Indonesië in 1999 heeft het land me
            nooit meer losgelaten. Na meer dan 20 jaar ervaring als ondernemer
            en werknemer in verschillende sectoren, waaronder IT, de
            reisbranche, onderwijs, bouw en vastgoed, besloot ik al mijn kennis
            en vaardigheden te bundelen.
          </p>

          <div className="flex flex-col gap-4 text-primary">
            <p className="font-bold text-lg lg:text-xl tracking-tight leading-snug">
              Veel buitenlandse investeringsprojecten zijn onnodig ingewikkeld.
            </p>
            <p className="text-base lg:text-lg font-normal tracking-tight leading-relaxed">
              Sinds ik actief ben in de vastgoedwereld, heb ik zelf ervaren dat
              processen aan de andere kant van de wereld behoorlijk complex
              kunnen zijn. Zo heb ik jarenlang gewerkt als internationaal
              vastgoedconsulent in Thailand en Maleisië. Met die ervaring help
              ik je graag om eventuele drempels te overwinnen, zodat ook jij
              mooie rendementen kunt behalen in dit deel van de wereld.
            </p>
            <p className="text-base lg:text-lg font-normal tracking-tight leading-relaxed">
              Indonesië voelt voor mij als thuis. Het is een plek waar ik de
              ruimte heb om te ondernemen, waar ik een warm sociaal leven heb
              met fijne vrienden om me heen, en waar de natuur en de uiterst
              vriendelijke mensen altijd uitnodigen om eropuit te gaan. Het
              leven hier is simpelweg fantastisch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
