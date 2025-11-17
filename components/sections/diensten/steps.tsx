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
        "Wij werken met een betrouwbaar netwerk van lokale makelaars en advocaten die je begeleiden tijdens het hele aankoopproces.",
      icon: <MessageCircleMoreIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 2,
      title: "Vind je ideale locatie",
      description:
        "Bepaal in welke regio van Zuid-Lombok je wilt investeren. Of je nu kiest voor het toeristische Kuta, het rustige noorden of de culturele centra zoals Ubud, de locatie heeft een grote invloed op het rendement van je investering.",
      icon: <LocateIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 3,
      title: "Doe een bod en onderhandel",
      description:
        "Onderhandel over de prijs met de verkoper. Het is gebruikelijk om te onderhandelen in Indonesië, dus zorg ervoor dat je een goede deal krijgt.",
      icon: <BadgeEuro className="w-5 h-5 text-sky" />,
    },
    {
      step: 4,
      title: "Verzamel de juiste documenten",
      description:
        "Je hebt documenten nodig zoals je paspoort en de eigendomspapieren van het vastgoed. Controleer of alle papieren in orde zijn voordat je verder gaat met de koop.",
      icon: <FilesIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 5,
      title: "Eventueel: Zet een PMA op",
      description:
        "Als je een freehold eigendom wilt hebben, zul je een PMA moeten oprichten. Dit kan tijdrovend zijn, maar het biedt de mogelijkheid om land volledig in eigendom te hebben.",
      icon: <BriefcaseBusiness className="w-5 h-5 text-sky" />,
    },
    {
      step: 6,
      title: "Koop afronden bij de notaris",
      description:
        "Bij de aankoop van vastgoed in Indonesië is het verplicht om de transactie af te ronden bij een notaris. De notaris zorgt ervoor dat alle documenten correct worden geregistreerd.",
      icon: <Handshake className="w-5 h-5 text-sky" />,
    },
    {
      step: 7,
      title: "Betaling en bijkomende kosten",
      description:
        " Zodra de notariële akte is ondertekend, betaal je de koopprijs en eventuele extra kosten, zoals notariskosten en belastingen.",
      icon: <HandCoins className="w-5 h-5 text-sky" />,
    },
    {
      step: 8,
      title: "Registratie bij het Kadaster",
      description:
        "Nadat de transactie is voltooid, moet je het eigendom registreren bij het Indonesische kadaster, zodat het officieel op jouw naam staat.",
      icon: <NotebookPen className="w-5 h-5 text-sky" />,
    },
    {
      step: 9,
      title: "Property management door ons",
      description:
        "Van dagelijks onderhoud tot vijfsterren-gastenzorg: ons ervaren lokale team zorgt ervoor dat jouw villa in topconditie blijft, verhuurd wordt tegen de best mogelijke tarieven en elke gast een vlekkeloze ervaring beleeft.",
      icon: <KeySquare className="w-5 h-5 text-sky" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-6 ">
        <Badge variant="muted">Stappenplan</Badge>

        <h3 className="text-4xl lg:text-5xl font-light tracking-tight">
          Aankoop van een{" "}
          <span className="text-sky font-medium">huis of villa</span> in Lombok
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Volg deze stappen om een veilig en soepel aankoopproces te doorlopen.
        </p>

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
    <div className="relative border border-border p-5 bg-secondary/40 hover:bg-secondary transition-colors overflow-hidden">
      {/* Huge faint step number */}
      <span className="absolute top-2 right-3 text-5xl font-bold text-primary/10 select-none">
        {step}
      </span>

      <div className="flex items-center gap-2 relative z-10">
        {icon}
        <h4 className="text-base font-semibold">{title}</h4>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mt-3 relative z-10">
        {description}
      </p>
    </div>
  );
};
