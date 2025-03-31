"use client";

import Alert from "@/components/Alert";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import JobLoadingCardList from "./JobLoadingCardList";
import Results from "@/components/pagination/Results";
import useJobsQuery from "@/hooks/useJobsQuery";
import JobCardsContainer from "./JobCardsContainer";

const JobsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const { data, isLoading, isError, error } = useJobsQuery(itemsPerPage);

  if (isLoading) return <JobLoadingCardList itemsPerPage={itemsPerPage} />;
  if (isError)
    return <Alert message={error?.message || "Error fetching jobs"} />;
  if (!data?.jobs?.length) {
    return <Alert message="No jobs available!" />;
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

      <JobCardsContainer jobs={jobs} />
    </div>
  );
};

export default JobsList;
