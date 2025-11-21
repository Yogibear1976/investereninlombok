"use client";

import * as React from "react";
import Image from "next/image";
import { ChoiceCard } from "@/components/cards/choice-card";

import { useTheme } from "next-themes";

const choiceCards = [
  {
    choiceLink: "/collectief-investeren",
    header: "Collectief investeren",
    description:
      "Een laagdrempelige manier om mee te investeren in professioneel, hoogrendement vastgoed dat normaal alleen voor grotere investeerders toegankelijk is.",
    imageUrl: "/voorkeur/investeren-test.jpg",
  },
  {
    choiceLink: "/eigen-villa",
    header: "Eigen Villa",
    description:
      "Je wilt een eigen villa laten bouwen op Lombok, volledig naar jouw wensen. Wanneer je er zelf niet verblijft, wil je de woning graag verhuren om zo een aantrekkelijk rendement te behalen.",
    imageUrl: "/voorkeur/eigen-villa-test.jpg",
  },
  {
    choiceLink: "/diensten/property-management",
    header: "Vastgoed Management",
    description:
      "Of je nu een luxe villa of een tweede huis bezit in Lombok, onze flexibele managementpakketten dekken alles: van onderhoud en personeel tot gastservices en opbrengstoptimalisatie.",
    imageUrl: "/voorkeur/propertymanagement.jpg",
  },
];

export const Choice = () => {
  const { theme } = useTheme();

  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col items-center pb-4 pt-8 sm:pt-12 lg:pt-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10">
          <div className="w-full">
            <div className="flex items-end justify-between">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                Je voorkeur
              </h2>
            </div>
          </div>

          <div className="grid w-full gap-4 lg:grid-cols-3">
            {choiceCards.map((choice) => (
              <ChoiceCard key={choice.header} {...choice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
