"use server";

import JobsList from "@/components/dashboard/jobs/JobsList";
import SearchForm from "@/components/dashboard/jobs/SearchForm";
import { getJobsAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const JobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 0],
    queryFn: () => getJobsAction({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <SearchForm />

        <JobsList />
      </div>
    </HydrationBoundary>
  );
};

export default JobsPage;
