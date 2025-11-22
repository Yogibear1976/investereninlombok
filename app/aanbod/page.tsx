import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

import Link from "next/link";
import { notFound } from "next/navigation";
import { OneImageStretched } from "@/components/images/one-image-stretched";
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

//   {
//     id: 1,
//     date: "2025-07-11T16:17:59.165+00:00",
//     title: "Villa Sun Palm",
//     slug: "villa-sun-palm",
//     type: "off-plan",
//     desc: "De bouw van de nieuwe villa’s in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
//     image: "/cards/large-card.jpg",
//     updateLink: "/updates/villaTestOpLombok",
//   },
//   {
//     id: 2,
//     date: "2025-08-18T16:17:59.165+00:00",
//     title: "Townhouses Hillside land",
//     slug: "townhouses-hillside",
//     type: "bestaand",
//     desc: "De bouw van de nieuwe villa’s in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
//     image: "/cards/large-card.jpg",
//     location: "Lombok",
//     price: 234006,
//   },
//   {
//     id: 3,
//     date: "2025-02-03T16:17:59.165+00:00",
//     title: "Eale Villas",
//     slug: "eale-villas",
//     type: "land",
//     desc: "De bouw van de nieuwe villa’s in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
//     image: "/cards/large-card.jpg",
//     location: "Lombok",
//     price: 234006,
//   },
//   {
//     id: 4,
//     date: "2025-09-02T16:17:59.165+00:00",
//     title: "Joe on the Hill",
//     slug: "joe-on-the-hill",
//     type: "in-aanbouw",
//     desc: "De bouw van de nieuwe villa's in fase 2 is gestart — de funderingen zijn inmiddels gelegd en de eerste muren verrijzen.",
//     image: "/cards/large-card.jpg",
//     location: "Lombok",
//     price: 234006,
//   },
// ];

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log(properties);

  // if (!properties) return notFound();
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Aanbod in Zuid-Lombok"
          subheader="Ideaal voor zowel particuliere als zakelijke investeerders die op zoek zijn naar rendement en zekerheid."
          subject=""
        />
        <OneImageStretched
          img={{
            src: "/one-image-stretched/test-1.jpg",
            alt: "Voorzijde villa",
          }}
        />
        <PageSubHeader
          smallTitleTop="Vastgoed"
          iconName="Euro"
          title="Al ons zorgvuldig geselecteerde aanbod van vastgoed en investeringsprojecten:"
        />
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property: any) => (
              <PropertyCardSmall key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
