"use client";

import {
  ShieldCheck,
  Users,
  Euro,
  TrendingUp,
  LineChart,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

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

                <p className="text-azure font-medium">
                  👉 Je rendement wordt stabieler en voorspelbaarder.
                </p>
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

                <p className="text-azure font-medium">
                  👉 Je betaalt minder kosten, maar krijgt professioneel
                  vastgoedbeheer op hoog niveau.
                </p>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Hoger rendement door portfolio-effect
                </h3>

                <p className="text-muted-foreground">
                  Een enkele villa heeft beperkingen. Een portefeuille van 7
                  villa’s:
                </p>

                <ul className="list-disc list-inside text-muted-foreground">
                  <li>vangt schommelingen op</li>
                  <li>presteert gemiddeld hoger</li>
                  <li>zorgt voor stabielere huurinkomsten</li>
                  <li>maakt rendement minder afhankelijk van seizoen</li>
                </ul>

                <p className="text-azure font-medium">
                  👉 De kans op constante huuropbrengsten (13,3% netto verwacht)
                  is veel groter.
                </p>
              </li>

              <li className="space-y-4">
                <h3 className="text-lg font-medium">
                  Toegang tot vastgoed dat normaal niet haalbaar is
                </h3>

                <p className="text-muted-foreground">
                  Een individuele investeerder moet:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>€200.000+ investeren</li>
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

                <p className="text-azure font-medium">
                  👉 Je investeert laagdrempelig, maar ontvangt rendement alsof
                  je een grote investeerder bent.
                </p>
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

                <p className="text-azure font-medium">
                  👉 Als investeerder weet je precies waar je aan toe bent.
                </p>
              </li>
            </ul>
          </div>

          {/* Investment grid */}
          <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="flex flex-col gap-1">
              <Euro className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">
                instap vanaf
              </span>
              <span className="text-sm font-normal">€50.000</span>
            </li>

            <li className="flex flex-col gap-1">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">
                verwacht rendement
              </span>
              <span className="text-sm font-normal">+20% netto per jaar</span>
            </li>

            <li className="flex flex-col gap-1">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">
                Collectief
              </span>
              <span className="text-sm font-normal">
                In groepsverband via gedeeld eigendom in 1 bedrijfsstructuur PMA
                PT.
              </span>
            </li>

            <li className="flex flex-col gap-1 sm:col-span-2">
              <LineChart className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">
                schaalvoordeel
              </span>
              <span className="text-sm font-normal">
                In plaats van één villa voor €200.000, investeer je mee in een
                portfolio van 4 villa's voor €50.000.
              </span>
            </li>
          </ul>

          {/* Fiscal block */}
          <div className="border border-border bg-muted/30 p-4 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-light tracking-tight">
                Fiscaal voordeel (t.o.v. Box 3)
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
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

            <p className="text-xs text-muted-foreground">
              * Laat je situatie beoordelen door een fiscalist.
            </p>
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
          <a href="#contact">
            <button className="w-full bg-primary text-white py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition">
              Ontvang volledige documentatie
            </button>
          </a>
          {/* Disclaimer Card (below sticky card) */}
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
