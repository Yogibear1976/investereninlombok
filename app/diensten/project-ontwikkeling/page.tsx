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

export default function ProjectOntwikkeling() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="diensten"
          subheader="We helpen bedrijven en particuliere investeerders bij het bouwen van een huis, villa of een compleet project met meerdere villa’s, volledig volgens Europese kwaliteitseisen. De bouw en juridische zaken regelen wij van begin tot eind, zodat je niet zelf naar Lombok hoeft te komen."
          subject="Projectontwikkeling"
        />
        <h1>
          Hier leg ik uit dat ik projecten start voor Nederlandse investeerders
          die een huis of villa willen laten bouwen naar Europese
          kwaliteitseisen. Ik begeleidt de bouw en juridische zaken op afstand
          voor hen. Ik inspecteer de projecten en verzorg achteraf ook het
          propertymanagement. Ook sluit ik meerdere investeerders aan
          vastgoedprojecten die samen investeren in een gezamelijk bedrijf met
          als doel om meerdere villa's te verhuren op eigen - gekochte - grond.
          Gekochte grond, geen leaseconstructie, dus heel interessant.
        </h1>
      </main>
    </div>
  );
}
