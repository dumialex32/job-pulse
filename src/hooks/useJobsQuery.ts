import { getJobsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import useQueryParams from "./useQueryParams";

const useJobsQuery = (itemsPerPage: number) => {
  const { search, jobStatus, page } = useQueryParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jobs", search, jobStatus, page, itemsPerPage],
    queryFn: () =>
      getJobsAction({ search, jobStatus, page, limit: Number(itemsPerPage) }),
  });

  return { data, isLoading, isError, error };
};

export default useJobsQuery;
