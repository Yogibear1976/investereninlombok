import { AboutSection } from "@/components/sections/landingpage/about";
import { HeroSection } from "@/components/sections/landingpage/hero";
import { MarqueeServices } from "@/components/sections/landingpage/marquee-services";
import { OfferingSection } from "@/components/sections/landingpage/offering";
import { Updates } from "@/components/sections/landingpage/updates";
import { TwoSquareImages } from "@/components/images/two-images";

import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: {
    default:
      "Investeren in Lombok | Investeren in vastgoed in Lombok met 100% Nederlandstalige begeleiding.",
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
    "Investeren in Lombok is hét Nederlandstalige platform voor veilig vastgoed kopen in Lombok, Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
  openGraph: {
    title:
      "Investeren in Lombok | Investeren in vastgoed in Lombok met 100% Nederlandstalige begeleiding.",
    description:
      "Investeren in Lombok is hét Nederlandstalige platform voor veilig vastgoed kopen in Lombok, Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
    url: "https://www.investereninlombok.nl/",
    images: "/socials/stackaware_social.png",
    siteName:
      "Investeren in Lombok | Investeren in vastgoed in Lombok met 100% Nederlandstalige begeleiding.",
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

export default async function Home() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="h-full w-full">
      <main>
        <HeroSection />
        <MarqueeServices />
        <OfferingSection properties={properties} />
        <AboutSection
          imgA={{ src: "", alt: "Over_ons_a" }}
          imgB={{ src: "", alt: "Over_ons_b" }}
        />
        <Updates />
        <TwoSquareImages
          imgA={{ src: "", alt: "Voorzijde villa" }}
          imgB={{ src: "", alt: "Zwembad en tuin" }}
        />
      </main>
    </div>
  );
}
