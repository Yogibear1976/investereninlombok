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
          title="Collectief investeren"
          subheader="Een laagdrempelige manier om mee te investeren in professioneel, hoogrendement vastgoed dat normaal alleen voor grotere investeerders toegankelijk is."
          subject=""
        />
        <PageSubHeader
          smallTitleTop="Box 3-vriendelijk"
          iconName="Euro"
          title="Buitenlands vastgoed valt niet volledig onder de Nederlandse Box 3-heffing. Door het belastingverdrag tussen Nederland en Indonesië wordt dubbele belasting voorkomen. In de praktijk betaal je in Nederland géén vermogensbelasting over dit object."
        />
        <OneImageStretched
          img={{
            src: "/one-image-stretched/test-1.jpg",
            alt: "Voorzijde villa",
          }}
        />
        <InvestmentExplainer />
      </main>
    </div>
  );
}
