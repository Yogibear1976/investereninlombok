"use client";

import {
  ShieldCheck,
  Users,
  Euro,
  TrendingUp,
  LineChart,
  TriangleAlert,
  Milestone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export const InvestmentExplainer = () => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start max-w-7xl mx-auto px-4">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-10">
          {/* Intro */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-normal tracking-tight">
              Slim gezamenlijk investeren in vastgoed in Indonesië.
            </h2>
            <p className="leading-relaxed max-w-3xl">
              Investeren in elk project is uniek, omdat je met een relatief laag
              instapbedrag van €50.000 kunt deelnemen aan een hoogwaardig
              vastgoedproject dat normaal alleen toegankelijk is voor grote
              investeerders. In plaats van één villa te kopen voor €200.000,
              investeer je samen met andere investeerders in een portefeuille
              van meerdere villa's. In dit geval 3 1 slaapkamervilla's en 1 2
              slaapkamer poolvilla voor dezelfde €50.000 instap.
            </p>
            <p className="leading-relaxed max-w-3xl">
              Daardoor profiteer je direct van schaalvoordelen:
              <br />
              meer spreiding, meer stabiliteit, minder risico, een hoger
              rendement en professionele exploitatie.
            </p>
            <p className="leading-relaxed max-w-3xl">
              Je investering geeft je een aandeel in het geheel, waardoor je
              meedeelt in:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Huurwinst → 13,3% netto verwacht per jaar</li>
              <li>
                Waardestijging bij verkoop → +33% netto extra rendement verwacht
              </li>
            </ul>
            <p className="leading-relaxed max-w-3xl">
              Samen resulteert dat in een totaal verwacht netto rendement van
              ruim boven de 20%.
            </p>
          </div>

          {/* Why it is smart to invest together */}

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light tracking-tight">
              Waarom gezamenlijk investeren slimmer is dan individueel
              investeren:
            </h2>
            <ul className="list-decimal space-y-10 pl-6">
              <li className="space-y-4">
                <h3 className="text-lg font-medium">Risicospreiding</h3>

                <p className="text-muted-foreground">
                  Bij individueel bezit hangt je rendement af van één object.
                  Bij collectieve investering deel je de inkomsten en
                  waardestijging van meerdere villa's.
                </p>

                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Minder impact van leegstand</li>
                  <li>Minder afhankelijk van één marktsegment</li>
                  <li>Minder onderhoudsrisico</li>
                </ul>
                <div className="flex items-center gap-1">
                  <Milestone className="w-4 h-4 text-warning" />
                  <p className="text-azure font-medium">
                    Je rendement wordt stabieler en voorspelbaarder.
                  </p>
                </div>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Professionele exploitatie & schaalvoordelen
                </h3>

                <p className="text-muted-foreground">
                  Met meerdere investeerders ontstaat een groter totaalbudget.
                  Dat levert voordelen op:
                </p>

                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Professioneel property management</li>
                  <li>Lagere kosten per villa</li>
                  <li>Efficiënter verhuurbeheer</li>
                  <li>Betere onderhandelingspositie bij inkoop</li>
                </ul>
                <div className="flex items-center gap-1">
                  <Milestone className="w-4 h-4 text-warning" />
                  <p className="text-azure font-medium">
                    Je betaalt minder kosten, maar krijgt professioneel
                    vastgoedbeheer op hoog niveau.
                  </p>
                </div>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Hoger rendement door portfolio-effect
                </h3>

                <p className="text-muted-foreground">
                  Een enkele villa heeft beperkingen. Een portefeuille van 7
                  villa's:
                </p>

                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Vangt schommelingen op</li>
                  <li>Presteert gemiddeld hoger</li>
                  <li>Zorgt voor stabielere huurinkomsten</li>
                  <li>Maakt rendement minder afhankelijk van seizoen</li>
                </ul>
                <div className="flex items-center gap-1">
                  <Milestone className="w-4 h-4 text-warning" />
                  <p className="text-azure font-medium">
                    De kans op constante huuropbrengsten (13,3% netto verwacht)
                    is veel groter.
                  </p>
                </div>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Toegang tot vastgoed dat normaal niet haalbaar is
                </h3>

                <p className="text-muted-foreground">
                  Een individuele investeerder moet:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>€250.000+ investeren</li>
                  <li>Alle risico's zelf dragen</li>
                  <li>Zelf exploitatie en onderhoud regelen</li>
                </ul>

                <p className="text-muted-foreground">
                  Bij collectieve investering:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Instap vanaf €50.000</li>
                  <li>Professioneel beheer inbegrepen</li>
                  <li>Geen gedoe met verhuur, wetten of onderhoud</li>
                </ul>
                <div className="flex items-center gap-1">
                  <Milestone className="w-4 h-4 text-warning" />
                  <p className="text-azure font-medium">
                    Je investeert laagdrempelig, maar ontvangt rendement alsof
                    je een grote investeerder bent.
                  </p>
                </div>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Transparante structuur met jaarlijkse taxatie & winstuitkering
                </h3>

                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Jaarlijkse taxatie van de werkelijke waarde</li>
                  <li>Kwartaaluitkeringen van huurinkomsten</li>
                  <li>Winstverdeling bij verkoop naar rato</li>
                  <li>Volledige inzage in cijfers en contracten</li>
                </ul>
                <div className="flex items-center gap-1">
                  <Milestone className="w-4 h-4 text-warning" />
                  <p className="text-azure font-medium">
                    Als investeerder weet je precies waar je aan toe bent.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Separator />
          {/* Investment grid */}
          <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Euro className="w-4 h-4 text-sky" />
                <span className="text-sm text-muted-foreground uppercase">
                  Instap vanaf
                </span>
              </div>

              <span className="text-sm font-normal pl-5">€50.000</span>
            </li>

            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-sky" />
                <span className="text-sm text-muted-foreground uppercase">
                  Verwacht rendement
                </span>
              </div>

              <span className="text-sm font-normal pl-5">
                +20% netto per jaar
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-sky" />
                <span className="text-sm text-muted-foreground uppercase">
                  Collectief
                </span>
              </div>
              <span className="text-sm font-normal pl-5">
                In groepsverband via een gedeelde eigendomsstructuur binnen één
                PMA PT.
              </span>
            </li>

            <li className="flex flex-col gap-1 sm:col-span-2">
              <div className="flex items-center gap-1">
                <LineChart className="w-4 h-4 text-sky" />
                <span className="text-sm text-muted-foreground uppercase">
                  Schaalvoordeel
                </span>
              </div>

              <span className="text-sm font-normal pl-5">
                In plaats van één villa voor €250.000, investeer je mee in een
                portfolio van 5 villa's voor €50.000.
              </span>
            </li>
          </ul>

          {/* Fiscal block */}
          <div className=" bg-sky/20 p-4 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-sky" />
              <h3 className="text-xl font-light tracking-tight">
                Fiscaal voordeel (t.o.v. Box 3)
              </h3>
            </div>

            <p className="text-muted-foreground">
              Buitenlands vastgoed valt niet volledig onder de Nederlandse
              Box&nbsp;3-heffing. Door het belastingverdrag tussen Nederland en
              Indonesië wordt dubbele belasting voorkomen. In de praktijk betaal
              je in Nederland géén vermogensbelasting over dit object.
            </p>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Geen Box 3 heffing over dit vastgoed</li>
              <li>Lokale belastingdruk vaak lager dan NL-forfait</li>
              <li>Interessant voor portefeuille-spreiding en rendement</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION — Sticky Card */}
        <aside className=" sticky top-6 bg-sky/20 p-4 w-full h-fit">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-light uppercase tracking-tight">
              Investeringsoverzicht
            </h3>

            {/* Key numbers */}
            {[
              { label: "Instap", value: "€50.000" },
              { label: "Verwacht netto rendement", value: "20%+" },
              { label: "Huurinkomsten per jaar", value: "13,3% netto" },
              { label: "Verkoopwinst (geschat)", value: "33% netto" },
              { label: "Eigendom", value: "Collectief" },
              { label: "Type", value: "Portfolio van 1/2-bedroom pool villas" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-sm text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="text-sm font-normal">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-muted my-4" />

          {/* CTA */}
          <a
            href={`${siteConfig.links.whatsappnumber}?text=${encodeURIComponent(
              `Hi Jochgem, ik ben geïnteresseerd in gezamelijk investeren in Indonesische vastgoed projecten. Stuur me wat meer info alsjebieft.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="nature" className="w-full flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16.001 3.2c-7.063 0-12.8 5.737-12.8 12.8 0 2.257.589 4.457 1.71 6.4L3.2 28.8l6.595-1.697c1.843 1.004 3.929 1.537 6.206 1.537h.001c7.063 0 12.8-5.737 12.8-12.8s-5.737-12.8-12.8-12.8zm0 23.466h-.001c-1.998 0-3.944-.535-5.64-1.548l-.403-.239-3.913 1.006 1.044-3.82-.262-.393a10.56 10.56 0 01-1.662-5.774c0-5.854 4.766-10.62 10.62-10.62 5.853 0 10.62 4.766 10.62 10.62 0 5.853-4.767 10.62-10.62 10.62zm5.807-7.98c-.316-.159-1.868-.922-2.157-1.028-.289-.107-.5-.159-.711.159-.21.316-.82 1.027-1.006 1.238-.184.21-.369.237-.685.079-.316-.159-1.335-.492-2.542-1.57-.94-.84-1.574-1.876-1.758-2.192-.184-.316-.02-.487.138-.645.142-.142.316-.369.474-.553.158-.184.21-.316.316-.527.107-.21.053-.395-.026-.553-.079-.158-.71-1.71-.974-2.342-.256-.614-.518-.53-.71-.539l-.605-.01c-.21 0-.553.079-.842.395-.289.316-1.105 1.079-1.105 2.625 0 1.545 1.132 3.04 1.29 3.248.158.21 2.23 3.407 5.405 4.778.756.326 1.345.52 1.804.666.758.241 1.449.207 1.996.126.609-.091 1.868-.762 2.132-1.499.263-.737.263-1.368.184-1.499-.079-.132-.289-.21-.605-.369z" />
              </svg>
              WhatsApp mij
            </Button>
          </a>
          <div className="mt-4">
            <div className="relative pl-4 space-y-1">
              <TriangleAlert className="absolute left-0 top-0 w-3 h-3 text-warning" />

              <p className="text-xs text-muted-foreground indent-0">
                De fiscale voordelen kunnen verschillen per situatie,
                afhankelijk van:
              </p>
              <ul className="text-xs text-muted-foreground list-disc list-inside">
                <li>Het belastingverdrag tussen NL en Indonesië</li>
                <li>De gekozen investeringsstructuur</li>
                <li>Je persoonlijke woonplaats en fiscale positie</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
