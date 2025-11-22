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
      title: "Neem contact op met ons",
      description:
        "We brengen je in contact met onze betrouwbare lokale makelaars en advocaten, die je stap voor stap begeleiden tijdens het hele aankoopproces.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 2,
      title: "Kies je ideale locatie",
      description:
        "Bedenk in welke regio van Zuid-Lombok je wilt investeren. Of je nu kiest voor het bruisende Kuta, rustige kustgebieden of opkomende dorpen: de locatie bepaalt voor een groot deel je rendement.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 3,
      title: "Doe een bod en onderhandel",
      description:
        "Goed onderhandelen hoort erbij in Indonesië. Samen zorgen we ervoor dat je een eerlijke prijs betaalt en een goede deal sluit.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 4,
      title: "Verzamel de benodigde documenten",
      description:
        "Zorg dat alle papieren in orde zijn, zoals je paspoort en de eigendomsdocumenten van het vastgoed. Wij helpen je controleren of alles klopt voordat je verder gaat.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 5,
      title: "Optioneel: Richt een PMA op",
      description:
        "Wil je een freehold eigendom? Dan is een PMA noodzakelijk. Dit kost wat tijd, maar biedt wel de mogelijkheid om grond volledig op naam van je bedrijf te zetten.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 6,
      title: "Rond de aankoop af bij de notaris",
      description:
        "Elke vastgoedtransactie in Indonesië wordt officieel vastgelegd bij een notaris. Deze zorgt ervoor dat alle documenten correct worden geregistreerd.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 7,
      title: "Voer de betaling uit",
      description:
        "Na het ondertekenen betaal je de koopsom en eventuele bijkomende kosten, zoals notariskosten en belastingen.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 8,
      title: "Registratie bij het Kadaster",
      description:
        "Tot slot wordt het eigendom geregistreerd bij het Indonesische kadaster, zodat het officieel op jouw naam staat.",
      icon: <CircleCheckBig className="w-4 h-4" />,
    },
    {
      step: 9,
      title: "Laat het property management aan ons over",
      description:
        "Ons lokale team verzorgt alles: van dagelijks onderhoud tot gastbeleving op vijfsterrenniveau. Zo blijft je villa in topconditie en behaal je de beste verhuurresultaten.",
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
