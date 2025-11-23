"use client";

import { ModalAppointment } from "@/components/modals/modal-appointment";
import { ModalProperty } from "@/components/modals/modal-property";
import { Property } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import { formatArea, formatIdrPrice, formatFeatures } from "@/lib/format";

interface PropertyDetailsInfoProps {
  property: Property;
}

export const PropertyDetailsInfo = ({ property }: PropertyDetailsInfoProps) => {
  const {
    name,
    nameExt,
    description,
    descriptionExt,
    livingArea,
    bedrooms,
    bathrooms,
    landArea,
    yearCompleted,
    returnRoi,
    payback,
    features,
    indoPrice,
  } = property;

  const formatToNvt = (v: number | null) => (v === 0 ? "n.v.t." : `${v} m²`);
  const formatToNvtYear = (v: number | null) => (v === 0 ? "n.v.t." : `${v}`);

  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-medium tracking-tight">
            {name}
            <span className="font-light text-muted-foreground">
              {" "}
              - {nameExt}
            </span>
          </h2>
          <p className=" leading-relaxed">{description}</p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <ModalProperty title="Stuur mij de brochure" property={name} sky />
            <ModalAppointment title="Of plan een afspraak in" available />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {descriptionExt}
          </p>
        </div>

        {/* Right section */}
        <div className="w-full lg:max-w-lg mx-auto">
          {[
            { label: "Prijs IDR", value: formatIdrPrice(indoPrice) },
            { label: "Woonoppervlak", value: formatToNvt(livingArea) },
            { label: "Slaapkamers", value: formatToNvtYear(bedrooms) },
            { label: "Badkamers", value: formatToNvtYear(bathrooms) },
            { label: "Grondoppervlak", value: `${formatArea(landArea)} m²` },
            { label: "Bouwjaar", value: formatToNvtYear(yearCompleted) },
            { label: "Voorzieningen", value: formatFeatures(features) },
            { label: "Netto ROI per jaar", value: returnRoi },
            { label: "Terugverdientijd", value: `${payback} jaar` },
          ].map((item, i) => (
            <div key={i}>
              <div className="grid grid-cols-2 items-center gap-4 p-2">
                <p className="text-sm uppercase text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm uppercase text-foreground">
                  {item.value}
                </p>
              </div>
              {i < 8 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
