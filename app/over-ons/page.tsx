import type { Metadata } from "next";
import { PageHeader } from "@/components/headers/page-header";
import { Faqs } from "@/components/sections/over-ons/faqs";
import { HighLights } from "@/components/sections/over-ons/highlights";
import { About } from "@/components/sections/over-ons/about";
import { TwoImagesShort } from "@/components/images/two-images-short";

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

export default function OverOns() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Over Investeren in Lombok"
          subheader="Wij helpen bedrijven en particuliere investeerders met het realiseren van hoogwaardige vastgoedprojecten op Zuid-Lombok. Dankzij onze lokale expertise, transparante werkwijze en focus op kwaliteit bouwen we aan duurzame relaties én succesvolle projecten."
          subject=""
        />
        <About />
        <HighLights />
        <TwoImagesShort
          imgA={{ src: "", alt: "Voorzijde villa" }}
          imgB={{ src: "", alt: "Zwembad en tuin" }}
        />
        <Faqs />
      </main>
    </div>
  );
}
