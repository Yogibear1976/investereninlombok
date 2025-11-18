import type { Metadata } from "next";

import { PageHeader } from "@/components/headers/page-header";
import { PageSubHeader } from "@/components/headers/page-sub-header";
import { Steps } from "@/components/sections/diensten/steps";
import { TwoImagesShort } from "@/components/sections/over-ons/two-images-short";
import InvestorNote from "@/components/sections/diensten/investor-note";

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

export default function Diensten() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Diensten"
          subheader="Investeren in Lombok is een lokaal makelaarskantoor in Kuta. Wij ondersteunen grondeigenaren, investeerders en kopers bij het aankopen, beveiligen en beheren van vastgoed in Zuid-Lombok."
          subject=""
        />
        <PageSubHeader
          smallTitleTop="Diensten"
          iconName="Handshake"
          title="Persoonlijke begeleiding voor uw vastgoed in Indonesië."
        />
        <Steps />
        <InvestorNote />
        <TwoImagesShort
          imgA={{ src: "/two-images/test_1.jpg", alt: "Voorzijde villa" }}
          imgB={{ src: "/two-images/test_2.jpg", alt: "Zwembad en tuin" }}
        />
      </main>
    </div>
  );
}
