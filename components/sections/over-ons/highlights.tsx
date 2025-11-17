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
    designation: "Account Executive",
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
      desc: "Ik ben gepassioneerd over wat ik doe en pusht me om verwachtingen te overtreffen, stimuleert mijn creativiteit en inspireert me om mijn beste werk te leveren.",
    },
    {
      id: "2",
      highlight: "Eerlijkheid.",
      icon: HeartHandshake,
      desc: "Ik ben open en eerlijk in mijn feedback en communicatie. Dit schept vertrouwen en respect, waardoor we effectief kunnen samenwerken en onze gezamenlijke doelen kunnen bereiken.",
    },
    {
      id: "3",
      highlight: "Verantwoordelijkheid.",
      icon: ShieldCheck,
      desc: "Ik neem verantwoordelijkheid voor mijn werk en mijn acties en ik houd mezelf verantwoordelijk voor het leveren van resultaten van hoge kwaliteit voor je organisatie.",
    },
    {
      id: "4",
      highlight: "Transparantie.",
      icon: Blend,
      desc: "Ik zeg wat ik bedoel en bedoel wat ik zeg! Feedback wordt constructief gegeven en open ontvangen, en de lijnen staan altijd wagenwijd open als je gehoord wilt worden.",
    },
    {
      id: "5",
      highlight: "Toewijding.",
      icon: Award,
      desc: "Hard werken, hoge normen en toewijding vormen de laatste ingrediënten van het geheime recept voor mijn uiteindelijke doel: een uitstekend product en een uitstekende klantenservice.",
    },
    {
      id: "6",
      highlight: "Duurzaamheid.",
      icon: Leaf,
      desc: "Met Linkbits ben ik bewust bezig met de toekomst. Ik werk remote om woon-werk verkeer uit te sluiten en CO2 uitstoot drastisch te verminderen.",
    },
  ];

  return (
    <section>
      <div className="relative w-full flex flex-col items-center place-content-center gap-10 py-10 px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <AnimatedTooltip items={people} />
          <div className="md:max-w-2xl md:text-center">
            <h3 className="font-light tracking-tight text-4xl lg:text-5xl">
              Samen creëren we bewustzijn en draagvlak onder medewerkers
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
