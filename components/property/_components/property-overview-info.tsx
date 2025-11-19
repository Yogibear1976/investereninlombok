"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Property } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, TriangleAlert } from "lucide-react";
import {
  formatArea,
  formatIdrPrice,
  formatFeatures,
  formatEuroPrice,
} from "@/lib/format";

interface PropertyOverviewInfoProps {
  property: Property;
}

export const PropertyOverviewInfo = ({
  property,
}: PropertyOverviewInfoProps) => {
  const {
    name,
    location,
    type,
    propertyOverview,
    livingArea,
    bedrooms,
    bathrooms,
    landArea,
    euroPrice,
    yearCompleted,
    ownership,
    returnRoi,
    payback,
    features,
    indoPrice,
  } = property;
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start max-w-7xl mx-auto">
        {/* Left section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-light tracking-tight">
            Vastgoedinformatie
          </h2>
          <p className="leading-relaxed">{propertyOverview}</p>
          <h3 className="text-3xl font-light tracking-tight">
            Investeringsoverzicht
          </h3>
          <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase">
                Locatie
              </span>
              <span className="text-sm font-normal">Kuta, Zuid-Lombok</span>
            </li>

            <li className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase">
                Beschikbaarheid
              </span>
              <span className="text-sm font-normal">17 units</span>
            </li>

            <li className="flex flex-col sm:col-span-2">
              <span className="text-sm text-muted-foreground uppercase">
                Type
              </span>
              <span className="text-sm font-normal">
                1-slaapkamer villa met privé buitenruimte en infinity pool met
                uitzicht op de rijstvelden
              </span>
            </li>

            <li className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase">
                Eigendom
              </span>
              <span className="text-sm font-normal">
                40-jarig leasehold (verlengbaar)
              </span>
            </li>

            <li className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase">
                Start verhuur
              </span>
              <span className="text-sm font-normal">Q2 2026</span>
            </li>

            <li className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase">
                Netto rendement (per jaar) uit verhuur na alle kosten
              </span>
              <span className="text-sm font-normal">
                13,3% netto ROI per jaar
              </span>
            </li>

            <li className="flex flex-col sm:col-span-2">
              <span className="text-sm text-muted-foreground uppercase">
                Toegang
              </span>
              <span className="text-sm font-normal">
                5 min naar Kuta centrum · 2 min naar Mandalika Circuit · 20 min
                naar de luchthaven
              </span>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="w-full mx-auto">
          <aside className="hidden md:block sticky top-6 bg-muted/40 p-6 w-full">
            {/* Price */}
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-normal text-primary uppercase">
                {formatEuroPrice(euroPrice)}
              </span>
              <span className="text-base text-muted-foreground uppercase">
                ≈ {formatIdrPrice(indoPrice)}
              </span>
              <div className="relative pl-4">
                <TriangleAlert className="absolute left-0 top-0 w-3 h-3 text-warning" />

                <p className="text-[10px] text-muted-foreground leading-tight indent-0">
                  Prijzen in vreemde valuta zijn bedoeld als schatting en worden
                  aangepast op basis van de wisselkoers tijdens de transactie.
                  Alle transacties vinden plaats in Indonesische Rupiah.
                </p>
              </div>
            </div>

            <div className="h-px bg-muted my-4"></div>

            {/* Overview */}
            <div className="flex flex-col gap-4">
              <span className="text-xl font-light uppercase tracking-tight">
                Overzicht
              </span>

              {[
                { label: "Objectcode", value: "code" },
                { label: "Eigendom", value: ownership },
                { label: "Bouwjaar", value: yearCompleted },
                { label: "Woonoppervlak", value: `${livingArea} m²` },
                { label: "Perceel", value: `${formatArea(landArea)} m²` },
                { label: "Status", value: type },
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-sm text-muted-foreground uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm font-normal">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-muted my-4"></div>

            {/* Contact Agent */}
            <div className="flex flex-col gap-4">
              <span className="text-xl font-light uppercase tracking-tight">
                Contact
              </span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/avatars/portrait_2.jpg"
                    alt="alt"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm tracking-tight font-medium">
                    Jochgem van Delft
                  </span>
                  <span className="text-xs text-muted-foreground">
                    +31 627 330 867
                  </span>
                </div>
              </div>
              <a
                href={`${
                  siteConfig.links.whatsappnumber
                }?text=${encodeURIComponent(
                  `Hi Jochgem, ik ben geïnteresseerd in ${name}. Stuur me wat meer info alsjebieft.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="nature"
                  className="w-full flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.001 3.2c-7.063 0-12.8 5.737-12.8 12.8 0 2.257.589 4.457 1.71 6.4L3.2 28.8l6.595-1.697c1.843 1.004 3.929 1.537 6.206 1.537h.001c7.063 0 12.8-5.737 12.8-12.8s-5.737-12.8-12.8-12.8zm0 23.466h-.001c-1.998 0-3.944-.535-5.64-1.548l-.403-.239-3.913 1.006 1.044-3.82-.262-.393a10.56 10.56 0 01-1.662-5.774c0-5.854 4.766-10.62 10.62-10.62 5.853 0 10.62 4.766 10.62 10.62 0 5.853-4.767 10.62-10.62 10.62zm5.807-7.98c-.316-.159-1.868-.922-2.157-1.028-.289-.107-.5-.159-.711.159-.21.316-.82 1.027-1.006 1.238-.184.21-.369.237-.685.079-.316-.159-1.335-.492-2.542-1.57-.94-.84-1.574-1.876-1.758-2.192-.184-.316-.02-.487.138-.645.142-.142.316-.369.474-.553.158-.184.21-.316.316-.527.107-.21.053-.395-.026-.553-.079-.158-.71-1.71-.974-2.342-.256-.614-.518-.53-.71-.539l-.605-.01c-.21 0-.553.079-.842.395-.289.316-1.105 1.079-1.105 2.625 0 1.545 1.132 3.04 1.29 3.248.158.21 2.23 3.407 5.405 4.778.756.326 1.345.52 1.804.666.758.241 1.449.207 1.996.126.609-.091 1.868-.762 2.132-1.499.263-.737.263-1.368.184-1.499-.079-.132-.289-.21-.605-.369z" />
                  </svg>
                  WhatsApp mij
                </Button>
              </a>
            </div>
          </aside>
          {/* Mobile Sticky Bottom Bar */}
          <div
            className="
      md:hidden
      fixed bottom-0 left-0 w-full
      bg-muted/40 backdrop-blur-lg
      p-4 z-50 shadow-xl
      flex justify-between items-center
    "
          >
            <div className="flex flex-col">
              <span className="text-3xl font-normal text-primary uppercase">
                {formatEuroPrice(euroPrice)}
              </span>
              <span className="text-base text-muted-foreground uppercase">
                ≈ {formatIdrPrice(indoPrice)}
              </span>
            </div>

            <a
              href={`${
                siteConfig.links.whatsappnumber
              }?text=${encodeURIComponent(
                `Hi Jochgem, ik ben geïnteresseerd in ${name}. Stuur me wat meer info alsjebieft.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="nature"
                className="w-full flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16.001 3.2c-7.063 0-12.8 5.737-12.8 12.8 0 2.257.589 4.457 1.71 6.4L3.2 28.8l6.595-1.697c1.843 1.004 3.929 1.537 6.206 1.537h.001c7.063 0 12.8-5.737 12.8-12.8s-5.737-12.8-12.8-12.8zm0 23.466h-.001c-1.998 0-3.944-.535-5.64-1.548l-.403-.239-3.913 1.006 1.044-3.82-.262-.393a10.56 10.56 0 01-1.662-5.774c0-5.854 4.766-10.62 10.62-10.62 5.853 0 10.62 4.766 10.62 10.62 0 5.853-4.767 10.62-10.62 10.62zm5.807-7.98c-.316-.159-1.868-.922-2.157-1.028-.289-.107-.5-.159-.711.159-.21.316-.82 1.027-1.006 1.238-.184.21-.369.237-.685.079-.316-.159-1.335-.492-2.542-1.57-.94-.84-1.574-1.876-1.758-2.192-.184-.316-.02-.487.138-.645.142-.142.316-.369.474-.553.158-.184.21-.316.316-.527.107-.21.053-.395-.026-.553-.079-.158-.71-1.71-.974-2.342-.256-.614-.518-.53-.71-.539l-.605-.01c-.21 0-.553.079-.842.395-.289.316-1.105 1.079-1.105 2.625 0 1.545 1.132 3.04 1.29 3.248.158.21 2.23 3.407 5.405 4.778.756.326 1.345.52 1.804.666.758.241 1.449.207 1.996.126.609-.091 1.868-.762 2.132-1.499.263-.737.263-1.368.184-1.499-.079-.132-.289-.21-.605-.369z" />
                </svg>
                WhatsApp mij
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
