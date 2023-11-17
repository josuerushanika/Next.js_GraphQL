import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.create({
      data: {
        email: "testemail@gmail.com",
        role: "ADMIN",
      },
    });

    // Assuming 'link' is the correct model and has 'url' and 'description' fields
    await prisma.link.createMany({
      data: links.map(link => ({
        url: link.url,
        description: link.description,
      })),
    });

    console.log("Seed data inserted successfully.");
  } catch (e) {
    console.error("Error during seeding:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
