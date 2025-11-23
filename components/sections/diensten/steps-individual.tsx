"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

import { CircleCheckBig, ArrowRight } from "lucide-react";

export const StepsIndividual = () => {
  const samodules = [
    {
      step: 1,
      title: "Plan een vrijblijvend kennismakingsgesprek met me in",
      description:
        "We bespreken je wensen, budget en ideeën voor jouw droomvilla. Mijn team begeleidt je vanaf de eerste schets tot de sleuteloverdracht.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 2,
      title: "Kies jouw perfecte kavel",
      description:
        "Samen bekijken we welke kavels in Zuid-Lombok het beste passen bij jouw wensen. Denk aan uitzicht, bereikbaarheid, privacy en toekomstige waardeontwikkeling.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 3,
      title: "Ontwerp je villa met onze architecten",
      description:
        "Je werkt samen met ervaren architecten die gespecialiseerd zijn in tropische, duurzame en luxueuze designs. Van plattegrond tot render: jij bepaalt de stijl.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 4,
      title: "Ontvang een transparante bouwofferte",
      description:
        "Op basis van het ontwerp stellen we een gedetailleerde offerte op, inclusief materialen, planning en kosten. Geen verrassingen achteraf.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 5,
      title: "Regel de juridische structuur (indien nodig)",
      description:
        "Afhankelijk van je situatie helpen we je met het opzetten van een PMA of het vastleggen van een Leasehold-constructie, zodat alles veilig en juridisch correct is.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 6,
      title: "Start de bouw van je villa",
      description:
        "Ons lokale bouwteam gaat aan de slag. Je ontvangt regelmatige updates, foto's en video's zodat je het project nauw kunt volgen, ook op afstand.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 7,
      title: "Controleer de voortgang en kwaliteitsrondes",
      description:
        "Tijdens de bouw voeren we meerdere kwaliteitscontroles uit. Zo garanderen we dat elke fase voldoet aan de hoogste standaarden.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 8,
      title: "Oplevering en inrichting",
      description:
        "Zodra de bouw voltooid is, lopen we samen door de villa voor de oplevering. Indien gewenst verzorgen we ook de volledige inrichting en styling.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 9,
      title: "Optioneel: Professioneel verhuur & beheer",
      description:
        "Wil je je villa verhuren wanneer je er niet bent? Ons ervaren property management team regelt alles: onderhoud, schoonmaak, marketing en gastenservice.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-6 ">
        <Badge variant="muted">Stappenplan Individueel</Badge>
        <div className="flex flex-col w-full md:max-w-3xl lg:max-w-6xl gap-6">
          <h3 className="text-4xl lg:text-5xl font-light tracking-tight">
            Stappenplan voor{" "}
            <span className="text-sky font-medium">individueel</span> een villa
            laten bouwen in Lombok.
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Volg deze stappen met mij om een veilig en soepel bouwproces te
            doorlopen:
          </p>
        </div>

        <div className="relative px-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {samodules.map((item) => (
                <CarouselItem
                  key={item.step}
                  className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <SAModule {...item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const SAModule = ({
  step,
  title,
  description,
  icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="relative h-full flex flex-col border border-border p-4 pt-4 bg-muted/60 hover:bg-secondary transition-colors overflow-hidden">
      {/* Step number */}
      <span className="absolute top-2 right-3 text-5xl font-bold text-nature/30 select-none">
        {step}
      </span>

      {/* Title + Icon inline */}
      <div className="flex items-start gap-1 relative z-10">
        <div className="text-nature pt-1">{icon}</div>
        <h4 className="text-base font-semibold uppercase mr-8">{title}</h4>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mt-3 relative z-10">
        {description}
      </p>

      {/* Extra button only for step 1 */}
      {step === 1 && (
        <Link
          href="/eigen-villa"
          className="relative z-10 inline-flex items-center gap-1 mt-3 text-sky font-semibold hover:underline"
        >
          <ArrowRight className="w-4 h-4" />
          Meer over individueel investeren
        </Link>
      )}
    </div>
  );
};
