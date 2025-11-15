"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/utils/logo";
import { Icons } from "@/components/icons/Icons";
import { FooterItem } from "./footer-item";
import { Separator } from "../ui/separator";

// effects
// import { ColourfulText } from "@/components/ui/colourful-text";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-muted py-6 md:px-8 md:py-0">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pt-4 pb-6 sm:py-24 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <div className="flex gap-2">
              <Logo />
            </div>
            <div className="mt-3 max-w-md xl:pr-6">
              <p className="text-primary font-normal text-xs">
                Wij helpen Nederlanders bij de aankoop of het bouwen van een
                vakantiewoning bestemd voor verhuur of wonen in Zuid-Lombok.
              </p>
              <div className="mt-2">
                <div className="flex justify-start items-center gap-2">
                  <Icons.email className="text-muted-foreground h-4 w-4" />
                  <p className="my-1 text-md font-medium opacity-80 hover:opacity-100 hover:text-sky transition duration-300 ease-in-out cursor-pointer">
                    <a href="mailto:jochgem@investereninlombok.nl">
                      jochgem@investereninlombok.nl
                    </a>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <Icons.whatsapp className="text-nature h-4 w-4" />
                  <Link
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="my-1 text-md font-medium opacity-80 hover:opacity-100 hover:text-sky transition duration-300 ease-in-out cursor-pointer">
                      +31 627 330 867
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2 my-4">
                <Icons.location className="text-muted-foreground h-4 w-4" />
                <h3 className="text-md font-medium">locaties</h3>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-sm mb-1 text-muted-foreground">
                    Indonesië
                  </h4>
                  <p className="text-[11px]">588/226 Double U Condo</p>
                  <p className="text-[11px]">Lad Prao Wanghin Rd.,</p>
                  <p className="text-[11px]">Lad Prao, Bangkok 10230</p>
                </div>
                <div>
                  <h4 className="text-sm mb-1 text-muted-foreground">
                    Maleisië
                  </h4>
                  <p className="text-[11px]">Kerkstraat 38</p>
                  <p className="text-[11px]">3741 AK Baarn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-medium leading-6 text-primary uppercase">
                  Over ons
                </h3>
                <div role="list" className="mt-4 space-y-3">
                  <FooterItem
                    label="over investeren in lombok"
                    onClick={() => router.push("/over-ons")}
                  />
                  <FooterItem
                    label="contact"
                    onClick={() => router.push("/contact")}
                  />
                  <FooterItem
                    label="updates"
                    onClick={() => router.push("/updates")}
                  />
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-medium leading-6 text-primary uppercase">
                  Diensten
                </h3>
                <div role="list" className="mt-4 space-y-3">
                  <FooterItem
                    label="Aankoopbegeleiding"
                    onClick={() => router.push("/diensten/aankoopbegeleiding")}
                  />
                  <FooterItem
                    label="Project ontwikkeling"
                    onClick={() =>
                      router.push("/diensten/project-ontwikkeling")
                    }
                  />
                  <FooterItem
                    label="Property Management"
                    onClick={() => router.push("/diensten/property-management")}
                  />
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-medium leading-6 text-primary uppercase">
                  Projecten
                </h3>
                <div role="list" className="mt-4 space-y-3">
                  <FooterItem
                    label="Off-plan"
                    onClick={() => router.push("/aanbod/off-plan")}
                  />
                  <FooterItem
                    label="In aanbouw"
                    onClick={() => router.push("/aanbod/in-aanbouw")}
                  />
                  <FooterItem
                    label="Bestaand"
                    onClick={() => router.push("/aanbod/bestaand")}
                  />
                  <FooterItem
                    label="Land"
                    onClick={() => router.push("/aanbod/land")}
                  />
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-medium leading-6 text-primary uppercase">
                  Waarom Indonesië?
                </h3>
                <div role="list" className="mt-4 space-y-3">
                  <FooterItem
                    label="Waarom Lombok?"
                    onClick={() => router.push("/indonesie/waarom-lombok")}
                  />
                  <FooterItem
                    label="Nieuws"
                    onClick={() => router.push("/indonesie/nieuws-artikelen")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 sm:mt-10 lg:mt-12 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href={siteConfig.links.youtube}>
              <Icons.youtube className="h-6 w-6 text-destructive" />
            </Link>
            <Link href={siteConfig.links.instagram}>
              <Icons.instagram className="h-6 w-6 text-primary" />
            </Link>
            <Link href={siteConfig.links.facebook}>
              <Icons.facebook className="h-6 w-6 text-sky" />
            </Link>
          </div>
          <p className="mt-8 text-xs text-center font-normal sm:text-left leading-5 text-muted-foreground md:order-1 md:mt-0">
            © Investereninlombok.nl division of PT Maju Operations & Development{" "}
            {new Date().getFullYear()} -{" "}
            <Link href="/algemene-voorwaarden" className="hover:underline">
              Algemene voorwaarden
            </Link>{" "}
            -{" "}
            <Link href="/privacy-cookies" className="hover:underline">
              Privacy & Cookie beleid
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
