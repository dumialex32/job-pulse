import { StatsData } from "@/types/statsTypes";
import { getStatsAction } from "@/utils/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useStatsQuery = () => {
  const queryClient = useQueryClient();
  const initialData = queryClient.getQueryData<StatsData>(["stats"]);

  const {
    data = initialData,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
    initialData,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
export default useStatsQuery;
