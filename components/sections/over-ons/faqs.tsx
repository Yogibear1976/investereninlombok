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
    question: "Kan je vastgoed vanuit Nederland kopen?",
    answer:
      "Vastgoed op afstand kopen in Lombok of Indonesië is tegenwoordig heel goed mogelijk. Dankzij moderne technologie en mijn deskundige begeleiding wordt het zelfs steeds gebruikelijker. Met virtuele rondleidingen en de juiste volmacht kun je volledig geïnformeerd een aankoop doen, waar ter wereld je ook bent.",
    value: "item-1",
  },
  {
    question: "Kun je persoonlijk een villa kopen in Lombok?",
    answer:
      "Als particulier kun je gewoon een villa op Lombok kopen en verhuren. Over de netto huurinkomsten betaal je 20% belasting in Indonesië, al kunnen er in je eigen land nog extra belastingregels gelden. Je kunt er ook voor kiezen om via een PMA-bedrijf te investeren. Deze bedrijfsstructuur biedt fiscale voordelen en kan de totale belastingdruk verlagen, waardoor investeren in verhuurvastgoed op Lombok vaak nóg aantrekkelijker wordt.",
    value: "item-2",
  },
  {
    question:
      "Ik hoor soms verhalen over de stabiliteit in Indonesië. Is het het wel verstandig om daar lange tijd te verblijven en te investeren?",
    answer:
      "Indonesië is een land dat de afgelopen jaren een sterke en stabiele economische groei laat zien. De overheid investeert veel in infrastructuur, toerisme en internationale veiligheid. Natuurlijk gaat er online veel informatie rond, maar het is belangrijk om betrouwbare bronnen te raadplegen. Veel berichten zijn gebaseerd op emotie of verouderde situaties. Wie zich verdiept in de feiten ziet dat Indonesië, en vooral eilanden zoals Lombok en Bali, veilig en aantrekkelijk zijn voor langdurig verblijf én investering.",
    value: "item-3",
  },
  {
    question: "Kan je als Nederlander vastgoed bezitten op Lombok?",
    answer:
      "Veel investeerders vragen zich af of buitenlanders vastgoed kunnen bezitten op Lombok. Dat kan, maar onder specifieke voorwaarden. In de praktijk zijn er twee opties: leasehold (langdurige erfpacht) of freehold via een Indonesische PMA-PT (mijn aanbevolen structuur). Daarnaast kun je collectief investeren in een speciaal opgerichte PT waarin jij aandeelhouder wordt. Vanuit deze structuur worden zowel de projectontwikkeling als het verhuurmanagement professioneel georganiseerd.",
    value: "item-4",
  },
];

export const Faqs = () => {
  const router = useRouter();
  return (
    <section className="w-full pt-8 sm:pt-12 lg:pt-24">
      <div className="max-w-7xl px-4 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
          Enkele <span className="text-sky font-medium">vragen</span>, hier
          beantwoord
        </h2>
        <h3 className="text-lg sm:text-xl text-muted-foreground mt-4 mb-12">
          Of je nu als particulier, collectief of bedrijf wilt deelnemen aan een
          projectontwikkeling, van verhuurconcept tot aankoop en verkoop van
          nieuw vastgoed, Lombok biedt unieke kansen die het eiland bijzonder
          aantrekkelijk maken voor buitenlandse investeerders. Hieronder vind je
          antwoorden op de meest voorkomende vragen.
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
            Staat je vraag er niet bij? Ga naar mijn{" "}
            <span
              onClick={() => router.push("/contact")}
              className="text-sky font-semibold hover:underline cursor-pointer transition-colors"
            >
              contactpagina
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
