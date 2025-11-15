import { PropertyDetailsLayout } from "@/components/property/property-details-layout";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface ParamsShape {
  slug: string;
}

export async function generateStaticParams() {
  const properties = await prisma.property.findMany({
    select: { slug: true },
  });

  return properties.map((p) => ({ slug: p.slug }));
}

export default async function UnderConstructionPropertyPage({
  params,
}: {
  params: ParamsShape | Promise<ParamsShape>;
}) {
  const { slug } = await params;
  if (!slug) return notFound();

  const property = await prisma.property.findUnique({
    where: { slug },
  });

  if (!property) return notFound();

  return <PropertyDetailsLayout property={property} />;
}
