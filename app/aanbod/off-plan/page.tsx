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

export default async function OffPlanPropertiesPage() {
  const existingProperties = await prisma.property.findMany({
    where: {
      type: "off-plan",
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
          subheader="Nog niet gebouwd, je investeert op tekening of in de planningsfase. Een goedkoper instapmoment."
          subject="Off-plan projecten"
        />
        <PageSubHeader
          smallTitleTop="Geplande villas en projecten"
          iconName="DraftingCompass"
          title="Deze projecten staan in de planning:"
          description="Een off-plan investering biedt de kans om vroeg in te stappen tegen een lagere prijs, te profiteren van waardestijging tijdens de bouw en bij oplevering direct rendement te behalen met een gloednieuw object."
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
