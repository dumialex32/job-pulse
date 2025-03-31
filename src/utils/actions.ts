"use server";

import {
  createJobFormSchema,
  CreateOrEditJobFormValues,
  JobType,
} from "@/types/formTypes/createOrEditJobFormTypes";
import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  GetJobsActionProps,
  GetJobsActionResponse,
} from "@/types/actionsTypes/jobActionsTypes";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

const authAndRedirect = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return userId;
};

export const getJobsAction = async ({
  page = 1,
  limit = 10,
  search = "",
  jobStatus = "",
}: GetJobsActionProps): Promise<GetJobsActionResponse> => {
  console.log(limit);
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

    const skip = (page - 1) * limit;

    const [getJobs, count] = await Promise.all([
      prisma.job.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: skip,
      }),
      prisma.job.count({
        where: whereClause,
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return { jobs: getJobs, count, page, totalPages };
  } catch (err) {
    console.error(err);
    return { jobs: [], page: 1, totalPages: 0, count: 0 };
  }
};

export const getJobAction = async (id: string): Promise<JobType | null> => {
  try {
    const userId = await authAndRedirect();

    const job = await prisma.job.findUnique({
      where: {
        clerkId: userId,
        id,
      },
    });

    return job;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createJobAction = async (
  values: CreateOrEditJobFormValues
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

export const editJobAction = async (
  values: CreateOrEditJobFormValues,
  id: string
): Promise<JobType | null> => {
  try {
    createJobFormSchema.parse(values);

    const userId = await authAndRedirect();

    const job = await prisma.job.update({
      where: {
        clerkId: userId,
        id,
      },
      data: {
        ...values,
      },
    });

    return job;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteJobAction = async (
  jobId: string
): Promise<JobType | null> => {
  try {
    const userId = await authAndRedirect();

    const job = await prisma.job.delete({
      where: { id: jobId, clerkId: userId },
    });

    return job;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getStatsAction = async (): Promise<{
  pending: number;
  interview: number;
  declined: number;
}> => {
  try {
    const userId = await authAndRedirect();

    const stats = await prisma.job.groupBy({
      where: {
        clerkId: userId,
      },
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const statsObj = stats.reduce((acc, curr) => {
      acc[curr.status] = curr._count.status;

      return acc;
    }, {} as Record<string, number>);

    const defaultStats = {
      // ensure missing keys default to 0
      pending: 0,
      interview: 0,
      declined: 0,
      ...statsObj,
    };

    return defaultStats;
  } catch (err) {
    console.error(err);
    redirect("/jobs");
  }
};

export async function getChartsDataAction(): Promise<
  { date: string; count: number }[]
> {
  const sixMonthsAgo = dayjs().subtract(6, "month").toDate();
  try {
    const userId = await authAndRedirect();
    const jobs = await prisma.job.findMany({
      where: {
        clerkId: userId,
        createdAt: {
          gte: sixMonthsAgo,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const applicationsPerMonth = jobs.reduce((acc, job) => {
      const date = dayjs(job.createdAt).format("MMM YY");

      const existingEntry = acc.find((entry) => entry.date === date); // checks if we already recorded that month

      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        acc.push({ date, count: 1 });
      }

      return acc;
    }, [] as Array<{ date: string; count: number }>);

    return applicationsPerMonth;
  } catch (error) {
    console.log(error);
    redirect("/jobs");
  }
}
