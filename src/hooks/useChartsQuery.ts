import { ChartData } from "@/types/statsTypes";
import { getChartsDataAction } from "@/utils/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useChartsQuery = () => {
  const queryClient = useQueryClient();

  // retrieve prefetched data
  const initialData = queryClient.getQueryData<ChartData[]>(["charts"]);
  const initialDataUpdatedAt = queryClient.getQueryState([
    "charts",
  ])?.dataUpdatedAt;

  const {
    data = initialData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
    initialData,
    initialDataUpdatedAt,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useChartsQuery;
