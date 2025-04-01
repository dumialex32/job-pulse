import { getJobsAction } from "@/utils/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useQueryParams from "./useQueryParams";
import { GetJobsActionResponse } from "@/types/actionTypes";

const useJobsQuery = (itemsPerPage: number) => {
  const queryClient = useQueryClient();
  const initialData = queryClient.getQueryData<GetJobsActionResponse>(["jobs"]);

  const { search, jobStatus, page } = useQueryParams();

  const {
    data = initialData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs", search, jobStatus, page, itemsPerPage],
    queryFn: () =>
      getJobsAction({ search, jobStatus, page, limit: Number(itemsPerPage) }),
    initialData,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { data, isLoading, isError, error };
};

export default useJobsQuery;
