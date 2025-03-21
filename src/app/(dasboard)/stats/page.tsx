import ChartsContainer from "@/components/dashboard/stats/ChartsContainer";
import StatsContainer from "@/components/dashboard/stats/StatsContainer";
import { getChartsDataAction, getStatsAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function StatsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-8">
        <StatsContainer />
        <ChartsContainer />
      </div>
    </HydrationBoundary>
  );
}
export default StatsPage;
