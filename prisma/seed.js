import { PrismaClient } from "@prisma/client";

import data from "./mock_data.json" assert { type: "json" };

const prisma = new PrismaClient();

const main = async () => {
  const clerkId = "your_clerk_id"; // hardcode your clerk id for seeding
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
