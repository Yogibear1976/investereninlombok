import { prisma } from "@/lib/prisma";
import { PageSubHeader } from "@/components/headers/page-sub-header";
import { PropertyCardSmall } from "@/components/cards/property-card-small";

export default async function ExistingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const currentProperty = await prisma.property.findUnique({
    where: { slug: params.slug },
    select: { id: true, type: true },
  });

  const offplanProperties = await prisma.property.findMany({
    where: {
      type: currentProperty?.type, // fetch properties of same type
      id: { not: currentProperty?.id },
    },
    orderBy: { createdAt: "desc" },
  });

  const propertyTitle = (() => {
    switch (currentProperty?.type) {
      case "bestaand":
        return "Meer bestaande objecten hieronder:";
      case "off-plan":
        return "Meer objecten gepland hieronder:";
      case "in-aanbouw":
        return "Meer objecten in aanbouw hieronder:";
      case "land":
        return "Meer stukken land te koop hieronder:";
      default:
        return "Vergelijkbare objecten hieronder:";
    }
  })();

  return (
    <main className="min-h-screen">
      {children}

      <PageSubHeader
        smallTitleTop="Vastgoed"
        iconName="Euro"
        title={propertyTitle}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {offplanProperties.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            Er zijn op dit moment geen vergelijkbare objecten beschikbaar.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offplanProperties.map((property: any) => (
              <PropertyCardSmall key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
