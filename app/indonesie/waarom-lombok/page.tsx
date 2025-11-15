import type { Metadata } from "next";
import { PageHeader } from "@/components/headers/page-header";

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

export default function WhyLombok() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Indonesie"
          subheader="Investeer in kwalitatief vakantie- of beleggingsvastgoed in Lombok en profiteer van hoog rendement, sterke waardegroei en een fiscaal aantrekkelijke structuur buiten Box 3 — terwijl je ook nog eens een eigen tropisch toevluchtsoord bezit."
          subject="Waarom investeren in Lombok?"
        />
        <div className="container mx-auto">
          <h1>Waarom Lombok:</h1>
          <ul className="gap-6 grid">
            <li>
              Top islands in Asia 2025. Lombok, Indonesia, second place behind
              Bali.
            </li>
            <li>
              De rijkste mensen die ik ken, investeren niet in spullen, maar in
              ervaringen. Reizen met familie. Diners met vrienden. Ze weten dat
              dingen kapotgaan, maar ervaringen groeien in waarde. Herinneringen
              worden meer waard — spullen verliezen hun waarde. Twintig jaar
              later herinnert niemand zich de auto, maar iedereen herinnert zich
              de reis. Investeer in herinneringen. Dat is de enige investering
              die écht blijft, ook als jij er niet meer bent.
            </li>
            <li>
              Grond- en villaprijzen op Lombok liggen aanzienlijk lager dan op
              Bali — tot wel 70% goedkoper — terwijl de vastgoedwaarde jaarlijks
              met ongeveer 8–12% stijgt. Deze groei wordt ondersteund door het
              bloeiende toerisme en grootschalige ontwikkelingen zoals de
              Mandalika Special Economic Zone en de uitbreiding van het
              vliegveld.
            </li>
            <li>
              <h1>Lombok: het nieuwe investeringsjuweel van Indonesië</h1>
              <p>
                Lombok ontwikkelt zich in rap tempo tot een van de meest
                veelbelovende toeristische bestemmingen van Indonesië. Het
                eiland ligt ideaal tussen Bali in het westen en Sumbawa in het
                oosten. Vooral Kuta – Lombok kent een sterke economische groei
                en is inmiddels uitgegroeid tot het toeristische hart van het
                eiland.
              </p>
            </li>
            <li>
              <h1>Indonesië: een stabiele en groeiende markt</h1>
              <p>
                Indonesië is de laatste jaren uitgegroeid tot een zeer
                aantrekkelijk land voor buitenlandse investeringen. Met een
                sterke en veerkrachtige economie, een stabiel politiek klimaat
                en een overvloed aan natuurlijke hulpbronnen zoals olie, gas en
                mineralen, behoort het land tot de snelst groeiende economieën
                ter wereld. Volgens economische voorspellingen zal Indonesië
                tegen het einde van dit decennium zelfs behoren tot de vijf
                grootste economieën wereldwijd — een overtuigend signaal voor
                investeerders die op zoek zijn naar duurzame groei.
              </p>
            </li>
            <li>
              <h1>Overheidsfocus: Lombok als nieuwe toeristische motor</h1>
              <p>
                De Indonesische overheid heeft een duidelijke strategie: het
                stimuleren van de toerismesector (momenteel goed voor 10% van
                het BBP) en het ontlasten van het overvolle Bali. Daarom wordt
                er fors geïnvesteerd in infrastructuur en toeristische
                ontwikkeling op Lombok, met name in de regio Kuta Mandalika.
              </p>
            </li>
            <li>
              <h1>Kuta Mandalika: prioriteitsregio voor investeringen</h1>
              <p>
                Kuta Mandalika ligt in het zuiden van Lombok, op slechts 25
                minuten van de internationale luchthaven. Deze regio staat
                centraal in het ambitieuze “Mandalika Project”, een grootschalig
                ontwikkelingsprogramma waarin overheid en private partijen
                samenwerken aan de toekomst van het eiland.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
