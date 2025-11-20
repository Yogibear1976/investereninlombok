import type { Metadata } from "next";
import { PageHeader } from "@/components/headers/page-header";
import { PageSubHeader } from "@/components/headers/page-sub-header";
import { OneImageStretched } from "@/components/images/one-image-stretched";
import { InvestmentExplainer } from "@/components/sections/collectief-investeren/investment-explainer";

export const metadata: Metadata = {
  title: {
    default:
      "Investeren in Lombok | Investeren in vastgoed in Lombo met 100% Nederlandstalige begeleiding.",
    template: "%s | investereninlombok.nl",
  },
  metadataBase: new URL("https://www.investereninlombok.nl"),
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
    },
  },
  description:
    "Smart Move Asia is hét Nederlandstalige platform voor veilig vastgoed kopen in Thailand, Maleisië of Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
  openGraph: {
    title:
      "Smart Move Asia | Wonen of investeren in Zuidoost-Azië met 100% Nederlandstalige begeleiding.",
    description:
      "Smart Move Asia is hét Nederlandstalige platform voor veilig vastgoed kopen in Thailand, Maleisië of Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
    url: "https://www.investereninlombok.nl/",
    images: "/socials/stackaware_social.png",
    siteName:
      "Smart Move Asia | Wonen of investeren in Zuidoost-Azië met 100% Nederlandstalige begeleiding.",
    type: "website",
    locale: "nl_NL",
  },
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-icon.png",
  },
  keywords: ["StackAware"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CollectiveInvestment() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Individueel of collectief investeren"
          subheader="Individueel of samen met andere investeerders: je bent op zoek naar een investering die rendement oplevert. Een verhuurvilla die je bovendien zelf kunt gebruiken voor vakanties."
          subject=""
        />
        <PageSubHeader
          smallTitleTop="Box 3-vriendelijk"
          iconName="Euro"
          title="Een laagdrempelige manier om mee te investeren in professioneel, hoogrendement vastgoed dat normaal alleen voor grotere investeerders toegankelijk is."
        />
        <OneImageStretched
          img={{
            src: "/one-image-stretched/test-1.jpg",
            alt: "Voorzijde villa",
          }}
        />
        <InvestmentExplainer />
        <div>
          <div className="my-6">
            <h1 className="text-lg">
              Creeer hier een invoerformulier waarin private en zakelijke
              investeerders hun aanvraag kunnen indienen om meer info te
              ontvangen. Richt je op 5 tot 10 investeerders die vraag hebben om
              samen een stuk land te kopen en hieruit rendement te halen.
            </h1>
          </div>
          <div>
            <h2>
              Waarom gezamenlijk investeren slimmer is dan individueel
              investeren
            </h2>

            <h3>1. Risicospreiding</h3>
            <p>
              Bij individueel bezit hangt je rendement af van één object. Bij
              collectieve investering deel je de inkomsten en waardestijging van
              meerdere villa’s.
            </p>
            <ul>
              <li>Minder impact van leegstand</li>
              <li>Minder afhankelijk van één marktsegment</li>
              <li>Minder onderhoudsrisico</li>
            </ul>
            <p>Je rendement wordt stabieler en voorspelbaarder.</p>

            <h3>2. Professionele exploitatie &amp; schaalvoordelen</h3>
            <p>
              Doordat er met meerdere investeerders wordt gewerkt, ontstaat er
              een groter totaalbudget. Dat levert voordelen op:
            </p>
            <ul>
              <li>Professioneel property management</li>
              <li>
                Lagere kosten per villa (onderhoud, schoonmaak, beveiliging)
              </li>
              <li>Efficiënter verhuurbeheer</li>
              <li>Betere onderhandelingspositie bij inkoop</li>
            </ul>
            <p>
              Je betaalt minder kosten, maar krijgt professioneel vastgoedbeheer
              op hoog niveau.
            </p>

            <h3>3. Hoger rendement door portfolio-effect</h3>
            <p>
              Een enkele villa heeft natuurlijke beperkingen: bezettingsgraad,
              locatie, seizoensinvloeden.
            </p>
            <p>Een portefeuille van 7 villa’s:</p>
            <ul>
              <li>vangt schommelingen op</li>
              <li>presteert gemiddeld hoger</li>
              <li>zorgt voor meer stabiel huurinkomen</li>
              <li>maakt rendement minder afhankelijk van pieken of dalen</li>
            </ul>
            <p>
              De kans op constante huuropbrengsten (13,3% netto verwacht) is
              veel groter.
            </p>

            <h3>4. Toegang tot vastgoed dat normaal niet haalbaar is</h3>
            <p>Een individuele investeerder moet:</p>
            <ul>
              <li>€200.000 of meer investeren</li>
              <li>volledige risico’s zelf dragen</li>
              <li>zelf exploitatie en onderhoud regelen</li>
            </ul>

            <p>Bij collectieve investering:</p>
            <ul>
              <li>Instap vanaf €50.000</li>
              <li>Professioneel beheer inbegrepen</li>
              <li>
                Geen gedoe met verhuur, contracten, lokale wetgeving of
                onderhoud
              </li>
            </ul>
            <p>
              Je investeert laagdrempelig, maar ontvangt wel een rendement alsof
              je een grote investeerder bent.
            </p>

            <h3>
              5. Transparante structuur met jaarlijks taxatie- en winstuitkering
            </h3>
            <ul>
              <li>Jaarlijkse taxatie om de reële waarde te bepalen</li>
              <li>Huuropbrengsten uitgekeerd per kwartaal</li>
              <li>
                Winstuitkering uit verkoop verdeeld naar rato van deelname
              </li>
              <li>Volledige inzage in kosten, opbrengsten en contracten</li>
            </ul>
            <p>Als investeerder weet je precies waar je aan toe bent.</p>
          </div>

          <div>
            <h2>
              Belastingtechnisch voordeel bij investeren in Indonesië (t.o.v.
              Box 3)
            </h2>
            <p>
              Een korte, heldere uitleg voor Nederlandse investeerders over de
              fiscale voordelen van buitenlands vastgoed.
            </p>

            <h3>
              1. Buitenlands vastgoed valt onder het belastingverdrag, niet
              volledig onder Box 3
            </h3>
            <p>
              Hoewel je het vastgoed moet aangeven in Box 3, mag Nederland niet
              over hetzelfde vastgoed heffen. Volgens het belastingverdrag met
              Indonesië ligt het heffingsrecht primair in Indonesië.
            </p>
            <p>Dit betekent:</p>
            <ul>
              <li>Je geeft het vastgoed op in Box 3</li>
              <li>
                Nederland verleent een vrijstelling om dubbele belasting te
                voorkomen
              </li>
              <li>
                Je betaalt in Nederland geen vermogensbelasting over de
                Indonesische villa’s
              </li>
            </ul>
            <p>
              Het volledige vermogen blijft buiten de Nederlandse Box 3-heffing.
            </p>

            <h3>2. Vaak lager effectief belastingtarief</h3>
            <p>
              De belasting in Indonesië over huur en waardestijging is doorgaans
              lager dan de forfaitaire Box 3-belasting in Nederland. Afhankelijk
              van jouw investeringsvorm (privé, BV of lokale entiteit) kan dit
              aanzienlijk gunstiger uitpakken.
            </p>

            <h3>
              3. Huurinkomsten en waardegroei vallen buiten de Nederlandse Box
              3-heffing
            </h3>
            <p>
              Zowel de waardestijging als de huuropbrengsten vallen onder
              Indonesische regels en dus niet onder Box 3.
            </p>
            <p>
              Interessant voor beleggers die rendement willen optimaliseren én
              fiscale spreiding zoeken.
            </p>

            <h3>Belangrijke disclaimer</h3>
            <p>
              De fiscale voordelen kunnen verschillen per situatie, afhankelijk
              van:
            </p>
            <ul>
              <li>Het belastingverdrag NL – Indonesië</li>
              <li>De gekozen investeringsstructuur</li>
              <li>Je persoonlijke woonplaats en fiscale positie</li>
            </ul>
            <p>
              Laat altijd een fiscalist met internationale ervaring naar jouw
              specifieke situatie kijken.
            </p>

            <h3>Kort samengevat</h3>
            <p>
              Investeren in dit Indonesische vastgoedproject is aantrekkelijk
              omdat:
            </p>
            <ul>
              <li>Je vanaf €50.000 kunt deelnemen</li>
              <li>
                Je profiteert van schaalvoordelen, spreiding en professionele
                exploitatie
              </li>
              <li>De verwachte netto ROI hoger is dan 20%</li>
              <li>Je Box 3-vriendelijk investeert</li>
              <li>Buitenlands vastgoed je portefeuille diversifieert</li>
            </ul>
            <p>
              Een laagdrempelige manier om mee te investeren in professioneel,
              hoogrendement vastgoed dat normaal alleen voor grotere
              investeerders toegankelijk is.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
