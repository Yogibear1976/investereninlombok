import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeader } from "@/components/headers/page-header";
import { PropertyCardSmall } from "@/components/cards/property-card-small";
import { PageSubHeader } from "@/components/headers/page-sub-header";

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

export default async function UnderConstructionPropertiesPage() {
  const existingProperties = await prisma.property.findMany({
    where: {
      type: "in-aanbouw",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // if (!properties) return notFound();
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="aanbod"
          subheader="Objecten momenteel in ontwikkeling, de bouw is bezig. Oplevering meestal binnen 3 tot 12 maanden."
          subject="Vastgoed in aanbouw"
        />
        <PageSubHeader
          smallTitleTop="Woningen in aanbouw"
          iconName="Construction"
          title="Deze projecten zijn al gestart:"
          description="Nieuw in aanbouw, met oplevering binnen 3 tot 12 maanden. Ideaal voor investeerders die willen instappen vóór de marktwaarde stijgt en bij oplevering direct rendement willen behalen."
        />
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {existingProperties.map((property: any) => (
              <PropertyCardSmall key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
