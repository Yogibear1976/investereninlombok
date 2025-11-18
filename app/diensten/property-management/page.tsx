import type { Metadata } from "next";
import { PageHeader } from "@/components/headers/page-header";
import { PageSubHeader } from "@/components/headers/page-sub-header";
import { Packages } from "@/components/sections/property-management/packages";

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

export default function PropertyManagement() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="diensten"
          subheader="Laat je woning regelmatig controleren door ons lokale team. Wij zorgen voor een grondige inspectie van de staat van je villa, zodat je investering veilig, goed onderhouden en verhuurklaar blijft. Ook als je zelf niet op het eiland bent."
          subject="Property management"
        />
        <PageSubHeader
          smallTitleTop="Packages"
          iconName="Handshake"
          title="Wij beheren niet alleen villa's. Wij helpen eigenaren om duurzame waarde op te bouwen met betere boekingen, lokale ondersteuning en zorgvuldig vastgoedbeheer dat je investering beschermt."
        />
        <Packages />
        <h1>
          Laat je woning regelmatig controleren door ons lokale team. Wij zorgen
          voor een grondige inspectie van de staat van je villa, zodat je
          investering veilig, goed onderhouden en verhuurklaar blijft — ook als
          je zelf niet op het eiland bent. Of je nu een luxe villa of een tweede
          huis bezit in Kuta of Zuid-Lombok, onze flexibele managementpakketten
          dekken alles: van onderhoud en personeel tot gastservices en
          opbrengstoptimalisatie. Kies het pakket dat bij jouw behoeften past,
          en laat ons de rest verzorgen.
        </h1>
        <br />
        <h1>
          Render hier 3 packages. "ontdek hier onze opties". Maintenance
          package, Full package en Premium package.
        </h1>
      </main>
    </div>
  );
}
