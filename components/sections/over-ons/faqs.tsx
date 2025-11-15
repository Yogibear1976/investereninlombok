"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Wat zijn de voordelen van werken met een Emigratie Consultant",
    answer:
      "Samen met mij zetten we de puntjes op de 'i', je krijgt antwoord op al je vragen en ik breng orde in chaos en drukte rondom je emigratie. Je krijgt dat antwoord op je vragen zonder zelf uren te hoeven Googleen naar antwoorden vol met tegenstrijdige informatie. Werken met mij kan inzicht geven en houvast, en motivatie om door te zetten daar waar het eerst onmogelijk leek.",
    value: "item-1",
  },
  {
    question: "Hoe is je bereikbaarheid?",
    answer:
      "Ik hanteer hele korte lijnen in mijn dienstverlening en ik ben heel duidelijk wat je kunt verwachten en hoe snel je terughoort en wat de werkwijze is. Zo neem ik binnen 24 uur contact met je op voor een afspraak, maar in de praktijk is dat vaak al binnen een paar uur.",
    value: "item-2",
  },
  {
    question:
      "Ik hoor verhalen over de stabiliteit in Thailand. Is het het wel verstandig om daar lange tijd te verblijven?",
    answer:
      "Thailand is land die de laatste jaren en nog steeds een enorme ontwikkeling doormaakt. Een land en bevolking met enorm veel energie en dynamiek. Er wordt een hoop gesuggereerd, maar zoek de juiste informatie. Onderzoek of alles klopt wat je leest, aangezien er veel door emotie gekleurde info te vinden is op het internet. ",
    value: "item-3",
  },
  {
    question: "Waar is je bedrijf geregistreerd?",
    answer:
      "Mijn bedrijf is geregistreerd in Nederland, maar ik beheer mijn activiteiten remote vanuit Zuidoost-Azië of Nederland. dit brengt mij heel dichtbij of in direct contact met mijn connecties hier in Thailand. Ook om dicht in de buurt van de connecties te opereren in dezelfde tijdzone, zodat ik gemakkelijker alle administratieve en informatie vergaring voor je kan uitvoeren.",
    value: "item-4",
  },
  {
    question: "Wat maakt werken met mij aantrekkelijk?",
    answer:
      "Ik bied je startup of gevestigde onderneming een goedkope oplossing om je bedrijf met HubSpot de juiste tractie te laten opbouwen in de markt. Daarnaast hanteren we een transparante workflow en snelle time-to-market oplossingen. Naast het feit dat we rekening houden met je zakelijke uitdagingen en in een zeer korte tijd geautomatiseerde oplossingen produceren is ons grootste concurrentievoordeel onze hoge technische expertise (senior en expert niveau).",
    value: "item-5",
  },
];

export const Faqs = () => {
  const router = useRouter();
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl px-4 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
          Enkele <span className="text-sky font-medium">vragen</span>, hier
          beantwoord
        </h2>
        <h3 className="text-lg sm:text-xl text-muted-foreground mt-4 mb-12">
          Hieronder de meest voorkomende vragen van andere emigranten en remote
          workers.
        </h3>
        <div className="text-left">
          <Accordion type="single" collapsible className="w-full">
            {FAQList.map(({ question, answer, value }: FAQProps) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <p className="font-medium">
            Staat je vraag er niet bij?{" "}
            <span
              onClick={() => router.push("/contact")}
              className="text-sky font-semibold hover:underline cursor-pointer transition-colors"
            >
              Ga naar mijn contactpagina
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
