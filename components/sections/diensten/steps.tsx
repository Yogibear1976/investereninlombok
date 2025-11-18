"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";

import {
  MessageCircleMoreIcon,
  LocateIcon,
  BadgeEuro,
  FilesIcon,
  Handshake,
  NotebookPen,
  HandCoins,
  KeySquare,
  BriefcaseBusiness,
} from "lucide-react";

export const Steps = () => {
  const samodules = [
    {
      step: 1,
      title: "Neem contact op met ons",
      description:
        "We brengen je in contact met onze betrouwbare lokale makelaars en advocaten, die je stap voor stap begeleiden tijdens het hele aankoopproces.",
      icon: <MessageCircleMoreIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 2,
      title: "Kies je ideale locatie",
      description:
        "Bedenk in welke regio van Zuid-Lombok je wilt investeren. Of je nu kiest voor het bruisende Kuta, rustige kustgebieden of opkomende dorpen: de locatie bepaalt voor een groot deel je rendement.",
      icon: <LocateIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 3,
      title: "Doe een bod en onderhandel",
      description:
        "Goed onderhandelen hoort erbij in Indonesië. Samen zorgen we ervoor dat je een eerlijke prijs betaalt en een goede deal sluit.",
      icon: <BadgeEuro className="w-5 h-5 text-sky" />,
    },
    {
      step: 4,
      title: "Verzamel de benodigde documenten",
      description:
        "Zorg dat alle papieren in orde zijn, zoals je paspoort en de eigendomsdocumenten van het vastgoed. Wij helpen je controleren of alles klopt voordat je verder gaat.",
      icon: <FilesIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 5,
      title: "Optioneel: Richt een PMA op",
      description:
        "Wil je een freehold eigendom? Dan is een PMA noodzakelijk. Dit kost wat tijd, maar biedt wel de mogelijkheid om grond volledig op naam van je bedrijf te zetten.",
      icon: <BriefcaseBusiness className="w-5 h-5 text-sky" />,
    },
    {
      step: 6,
      title: "Rond de aankoop af bij de notaris",
      description:
        "Elke vastgoedtransactie in Indonesië wordt officieel vastgelegd bij een notaris. Deze zorgt ervoor dat alle documenten correct worden geregistreerd.",
      icon: <Handshake className="w-5 h-5 text-sky" />,
    },
    {
      step: 7,
      title: "Voer de betaling uit",
      description:
        "Na het ondertekenen betaal je de koopsom en eventuele bijkomende kosten, zoals notariskosten en belastingen.",
      icon: <HandCoins className="w-5 h-5 text-sky" />,
    },
    {
      step: 8,
      title: "Registratie bij het Kadaster",
      description:
        "Tot slot wordt het eigendom geregistreerd bij het Indonesische kadaster, zodat het officieel op jouw naam staat.",
      icon: <NotebookPen className="w-5 h-5 text-sky" />,
    },
    {
      step: 9,
      title: "Laat het property management aan ons over",
      description:
        "Ons lokale team verzorgt alles: van dagelijks onderhoud tot gastbeleving op vijfsterrenniveau. Zo blijft je villa in topconditie en behaal je de beste verhuurresultaten.",
      icon: <KeySquare className="w-5 h-5 text-sky" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-6 ">
        <Badge variant="muted">Stappenplan</Badge>
        <div className="flex flex-col w-full md:max-w-3xl lg:max-w-6xl gap-6">
          <h3 className="text-4xl lg:text-5xl font-light tracking-tight">
            Stappenplan voor de aankoop van een{" "}
            <span className="text-sky font-medium">huis of villa</span> in
            Lombok.
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Volg deze stappen om een veilig en soepel aankoopproces te
            doorlopen.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {samodules.map((item) => (
            <SAModule key={item.step} {...item} />
          ))}
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
    <div className="relative rounded-sm border border-border p-4 pt-4 bg-muted/60 hover:bg-secondary transition-colors overflow-hidden">
      {/* Step number */}
      <span className="absolute top-2 right-3 text-5xl font-bold text-nature/30 select-none">
        {step}
      </span>

      {/* Icon absolute top-left */}
      <div className="absolute top-2 left-2 text-sky">{icon}</div>

      {/* Title */}
      <h4 className="text-base font-semibold uppercase relative z-10 pl-4">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mt-3 relative z-10">
        {description}
      </p>
    </div>
  );
};
