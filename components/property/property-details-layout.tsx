import { Ownership, Property } from "@prisma/client";
import { PropertyDetailsHero } from "./_components/property-details-hero";
import { PropertyDetailsInfo } from "./_components/property-details-info";
import { PropertyDetailsImages } from "./_components/property-details-images";
import { PropertyOverviewInfo } from "./_components/property-overview-info";

interface PropertyDetailsLayoutProps {
  property: Property;
}

export const PropertyDetailsLayout = ({
  property,
}: PropertyDetailsLayoutProps) => {
  const { images } = property;
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start flex-none h-min w-full pt-10 sm:pt-20 md:pt-40 pb-4">
      <div className="relative flex flex-col items-center justify-start flex-none h-min max-w-7xl w-full px-4">
        <PropertyDetailsHero property={property} />
        <PropertyDetailsInfo property={property} />
        <PropertyDetailsImages
          images={[
            { src: images[1], alt: "Vooraanzicht villa" },
            { src: images[2], alt: "Zwembad" },
          ]}
        />
        <PropertyOverviewInfo property={property} />
        <PropertyDetailsImages
          images={[
            { src: images[3], alt: "Interieur woonkamer" },
            { src: images[4], alt: "Uitzicht vanaf terras" },
          ]}
        />
      </div>
    </section>
  );
};
