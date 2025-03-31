"use client";

import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
import { getJobsAction } from "@/utils/actions";
import { useSearchParams } from "next/navigation";
import Alert from "@/components/Alert";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import JobLoadingCardList from "./JobLoadingCardList";
import Results from "@/components/pagination/Results";

const JobsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  console.log(itemsPerPage);

  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("status") || "all";
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["jobs", search, jobStatus, page, itemsPerPage],
    queryFn: () =>
      getJobsAction({ search, jobStatus, page, limit: Number(itemsPerPage) }),
  });

  if (isLoading) return <JobLoadingCardList itemsPerPage={itemsPerPage} />;

  if (!data || data.jobs.length === 0) {
    return (
      <Alert message="No jobs added yet. Start by adding your first job!" />
    );
  }

  const { jobs, totalPages, page: currentPage, count } = data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-x-2">
        <Results
          currentPage={currentPage}
          count={count}
          resource="job"
          itemsPerPage={itemsPerPage}
        />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          count={count}
          onSetItemsPerPage={setItemsPerPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <ul className="grid lg:grid-cols-3 items-center gap-4 ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
