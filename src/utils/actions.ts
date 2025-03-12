"use server";

import {
  createJobFormSchema,
  CreateJobFormValues,
  JobType,
} from "@/types/formTypes/createJobFormTypes";
import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  GetJobsActionProps,
  GetJobsActionResponse,
} from "@/types/actionsTypes/jobActionsTypes";
import { Prisma } from "@prisma/client";

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

const getJobsAction: Promise<GetJobsActionResponse> = async ({
  page = 1,
  limit = 10,
  search,
  jobStatus,
}: GetJobsActionProps) => {
  try {
    const userId = await authAndRedirect();

    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          { position: { contains: search, mode: "insensitive" } },
          {
            company: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      };
    }

    if (jobStatus && jobStatus !== "all") {
      whereClause = { ...whereClause, status: jobStatus };
    }

    const [getJobs, getResultsCount] = await Promise.all([
      prisma.job.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: (page - 1) * limit,
      }),
      prisma.job.count({
        where: whereClause,
      }),
    ]);

    const totalPages = Math.ceil(getResultsCount / limit);

    return { jobs: getJobs, totalPages, count: getResultsCount };
  } catch (err) {
    console.error(err);
    return { jobs: [], totalPages: 0, count: 0 };
  }
};
