export const formatEuroPrice = (price: number) => {
  return (
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price) + ",-"
  );
};

export const formatIdrPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatArea = (area: number | null) => {
  if (area == null) return "0";
  return new Intl.NumberFormat("nl-NL").format(area);
};

function formatFeature(feature: string): string {
  if (!feature) return "";

  return feature
    .toLowerCase() // make all lowercase
    .replace(/_/g, " ") // replace underscores with spaces
    .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter
}

export function formatFeatures(features: string[] = []): string {
  return features.map(formatFeature).join(", ");
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // split accents from letters
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with "-"
    .replace(/^-+|-+$/g, ""); // remove leading/trailing "-"
}
