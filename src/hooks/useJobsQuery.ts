import { getJobsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useJobsQuery = (itemsPerPage: number) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("status") || "all";
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jobs", search, jobStatus, page, itemsPerPage],
    queryFn: () =>
      getJobsAction({ search, jobStatus, page, limit: Number(itemsPerPage) }),
  });

  return { data, isLoading, isError, error };
};

export default useJobsQuery;
