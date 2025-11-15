import { prisma } from "../lib/prisma";

async function main() {
  await prisma.property.createMany({
    data: [
      {
        name: "Merati villas",
        description:
          "The complex will have 10 individual villas, reception area and parking for clients. Each villa will have approximately 90 m2 to 100 m2 and will be distributed in bedroom, bathroom and terrace with a private pool.",
        slug: "merati-villas",
        location: "Sengiggi",
        price: 45000,
        area: 161,
        images: [
          "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1762423027/villa_test_2_h59yt0.jpg",
        ],
        features: ["AIRCONDITIONING"],
        bedrooms: 2,
        bathrooms: 1,
        livingArea: 98,
        landArea: 298,
        type: "off-plan",
        ownership: "HGB",
        yearCompleted: 2025,
        return: "13%",
        payback: "5",
        createdAt: "2025-07-11T16:17:59.165+00:00",
        updatedAt: "2025-07-11T16:17:59.165+00:00",
      },
      {
        name: "Lombok Studios",
        description:
          "The complex will have 6 individual 1 bedroom studiovillas, reception area and parking for clients. Each villa will have approximately 90 m2 to 100 m2 and will be distributed in bedroom, bathroom and terrace with a private pool.",
        slug: "merati-villas",
        location: "Sengiggi",
        price: 25595,
        area: 110,
        images: [
          "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1762423028/villa_test_ii93tl.jpg",
        ],
        features: ["AIRCONDITIONING"],
        bedrooms: 1,
        bathrooms: 1,
        livingArea: 35,
        landArea: 78,
        type: "in-aanbouw",
        ownership: "HGB",
        yearCompleted: 2026,
        return: "15%",
        payback: "4",
        createdAt: "2025-07-11T16:17:59.165+00:00",
        updatedAt: "2025-07-11T16:17:59.165+00:00",
      },
    ],
  });
}

main()
  .then(() => console.log("Database seeded"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
