"use client";

import * as React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LucideIcon } from "lucide-react";
import {
  Award,
  Blend,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";

interface HighlightProps {
  id: string;
  highlight: string;
  icon: LucideIcon;
  desc: string;
}

const people = [
  {
    id: 1,
    name: "Jochgem van Delft",
    designation: "Founder & Projectontwikkeling",
    image: "/avatars/portrait_2.jpg",
  },
  // {
  //   id: 2,
  //   name: "Robert Johnson",
  //   designation: "Cyber Security Advisor",
  //   image: "/avatars/portrait_2.jpg",
  // },
];

export const HighLights = () => {
  const HighLightCards: HighlightProps[] = [
    {
      id: "1",
      highlight: "Passie.",
      icon: Star,
      desc: "Mijn passie voor Indonesisch vastgoed drijft me om projecten te selecteren met bewezen potentie. Ik zet me volledig in om investeerders te helpen slimme, winstgevende en veilig opgebouwde keuzes te maken.",
    },
    {
      id: "2",
      highlight: "Eerlijkheid.",
      icon: HeartHandshake,
      desc: "Je krijgt bij mij altijd een eerlijk en realistisch advies, inclusief risico's, kansen en rendementsverwachtingen. Zo kun jij met vertrouwen investeren, wetende dat je op transparante informatie bouwt.",
    },
    {
      id: "3",
      highlight: "Verantwoordelijkheid.",
      icon: ShieldCheck,
      desc: "Ik begeleid jouw investering alsof het mijn eigen vermogen is. Van due diligence tot structuurkeuze en lokale regelgeving: ik draag verantwoordelijkheid voor een veilige en zorgvuldige aanpak.",
    },
    {
      id: "4",
      highlight: "Transparantie.",
      icon: Blend,
      desc: "Bij internationale investeringen is helderheid cruciaal. Daarom krijg je volledige inzage in cijfers, contracten, juridische structuren en rendementen. Geen verrassingen, alleen duidelijkheid.",
    },
    {
      id: "5",
      highlight: "Toewijding.",
      icon: Award,
      desc: "Ik sta investeerders persoonlijk bij gedurende het hele traject: van eerste kennismaking tot aankoop, exploitatie en verkoop. Mijn doel is jou begeleiden naar een zorgeloze, winstgevende investering.",
    },
    {
      id: "6",
      highlight: "Duurzaamheid.",
      icon: Leaf,
      desc: "Ik werk samen met ontwikkelaars die verantwoord bouwen en investeren in duurzame projecten, lokale werkgelegenheid en lange-termijn leefbaarheid. Zo profiteer jij van rendement én toekomstbestendigheid.",
    },
  ];

  return (
    <section>
      <div className="relative w-full flex flex-col items-center place-content-center gap-10 py-10 px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <AnimatedTooltip items={people} />
          <div className="md:max-w-2xl md:text-center">
            <h3 className="font-light tracking-tight text-4xl lg:text-5xl">
              Jouw investering verdient zekerheid, toewijding en volledige
              duidelijkheid.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 max-w-7xl gap-14 md:gap-10">
          {HighLightCards.map(({ id, highlight, icon: Icon, desc }) => (
            <div key={id} className="relative col-span-1 w-full">
              <div className="flex flex-col justify-start shrink-0">
                <div className="absolute flex-auto left-0 z-2">
                  <Icon className="w-6 h-6 text-sky" />
                </div>
                <p className="font-normal text-lg leading-6 text-muted-foreground">
                  <span className="mx-4 h-6" />
                  <span className="font-semibold text-primary">
                    {highlight}
                  </span>{" "}
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
