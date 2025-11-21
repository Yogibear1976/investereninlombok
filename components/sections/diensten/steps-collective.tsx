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

export const StepsCollective = () => {
  const samodules = [
    {
      step: 1,
      title: "Kennismaking & inventarisatie",
      description:
        "We bespreken jullie investeringsdoelen, budget, looptijd, risicoprofiel en gewenste projectvorm.",
      icon: <MessageCircleMoreIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 2,
      title: "Selectie van locatie & kavelgrootte",
      description:
        "Op basis van jullie wensen presenteer ik geschikte percelen in Zuid-Lombok. Ik bezoek de locaties en onderzoek juridische status en haalbaarheid.",
      icon: <LocateIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 3,
      title: "Conceptontwikkeling van het project",
      description:
        "We bepalen samen het complete project: het aantal villa's, type en grootte, indeling en faciliteiten, plus de gezamenlijke voorzieningen zoals zwembad, receptie en parking. Op basis daarvan berekenen we de verwachte verhuuropbrengsten en de ROI.",
      icon: <BadgeEuro className="w-5 h-5 text-sky" />,
    },
    {
      step: 4,
      title: "Juridische voorbereiding",
      description:
        "Verzamelen en controleren van alle benodigde documenten van grondeigenaar en investeerders.",
      icon: <FilesIcon className="w-5 h-5 text-sky" />,
    },
    {
      step: 5,
      title: "Oprichting van het gezamenlijke bedrijf (PMA/PT)",
      description:
        "We richten een Indonesische projectentiteit op waarin alle investeerders aandeelhouder worden. Vanuit dit bedrijf worden alle afspraken, betalingen en eigendommen beheerd.",
      icon: <BriefcaseBusiness className="w-5 h-5 text-sky" />,
    },
    {
      step: 6,
      title: "Investeringen & financiële inrichting",
      description:
        "De investeerders storten hun bijdrage vanuit Nederland op de zakelijke bankrekening van de PMA/PT. Deze rekening wordt gebruikt voor aankoop, bouw en exploitatie.",
      icon: <Handshake className="w-5 h-5 text-sky" />,
    },
    {
      step: 7,
      title: "Start van de bouw",
      description:
        "Na de officiële overdracht en vergunningen begint de bouwfase onder toezicht van lokale aannemers en projectmanagers.",
      icon: <HandCoins className="w-5 h-5 text-sky" />,
    },
    {
      step: 8,
      title: "Voortgangsupdates",
      description:
        "Wekelijks ontvangen alle aandeelhouders een bouwupdate met foto’s, kostenoverzichten en milestones.",
      icon: <NotebookPen className="w-5 h-5 text-sky" />,
    },
    {
      step: 9,
      title: "Oplevering & juridische afronding",
      description:
        "Na oplevering doorlopen we de laatste stappen: technische afname, kwaliteitscontrole, inschrijving en registratie bij het kadaster, gevolgd door de formele overdracht aan het gezamenlijke bedrijf.",
      icon: <KeySquare className="w-5 h-5 text-sky" />,
    },
    {
      step: 10,
      title: "Verhuur & property management",
      description:
        "Het gezamenlijke bedrijf neemt de volledige exploitatie uit handen: van marketing, verhuur en onderhoud tot personeel en administratie. Alle inkomsten worden centraal beheerd en periodiek verdeeld onder de aandeelhouders.",
      icon: <KeySquare className="w-5 h-5 text-sky" />,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-6 ">
        <Badge variant="muted">Stappenplan Collectief</Badge>
        <div className="flex flex-col w-full md:max-w-3xl lg:max-w-6xl gap-6">
          <h3 className="text-4xl lg:text-5xl font-light tracking-tight">
            Stappenplan voor{" "}
            <span className="text-sky font-medium">collectief</span> investeren
            in grond en vastgoedontwikkeling op Lombok.
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Volg deze stappen met mij en samen met andere
            investeerders/aandeelhouders te investeren in ons gezamenlijk
            bedrijf met als doel om een aantal villa's te gaan verhuren op eigen
            gekochte grond.
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
    <div className="relative border border-border p-4 pt-4 bg-muted/60 hover:bg-secondary transition-colors overflow-hidden">
      {/* Step number */}
      <span className="absolute top-2 right-3 text-5xl font-bold text-sky/30 select-none">
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
