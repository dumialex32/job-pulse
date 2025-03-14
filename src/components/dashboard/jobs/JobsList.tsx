"use client";

import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
import { getJobsAction } from "@/utils/actions";
import { useSearchParams } from "next/navigation";
import Alert from "@/components/Alert";
import { Spinner } from "@/components/Spinner";

const JobsList = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("status") || "all";
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getJobsAction({ search, jobStatus, page }),
  });

  if (isLoading) return <Spinner />;
  if (!data || data.jobs.length === 0)
    return (
      <Alert message="No jobs added yet. Start by adding your first job!" />
    );

  return (
    <ul className="grid lg:grid-cols-3 items-center gap-4 ">
      {data.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobsList;
