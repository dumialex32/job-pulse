"use server";

import {
  createJobFormSchema,
  CreateJobFormValues,
  JobType,
} from "@/types/formTypes/createJobFormTypes";
import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const authAndRedirect = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // for dev only

  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return userId;
};

export const createJobAction = async (
  values: CreateJobFormValues
): Promise<JobType | null> => {
  try {
    createJobFormSchema.parse(values);

    const userId = await authAndRedirect();

    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });

    return job;
  } catch (err) {
    console.error(err);
    return null;
  }
};
