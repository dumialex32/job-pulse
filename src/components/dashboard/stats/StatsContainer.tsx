"use client";

import StatsCard from "./StatsCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStatsAction } from "@/utils/actions";
import Alert from "@/components/Alert";
import { JobStatus } from "@/types/formTypes/createOrEditJobFormTypes";
import { Spinner } from "@/components/Spinner";
import { StatsData } from "@/types/stats/statsContainerTypes";

const StatsContainer = () => {
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

  if (isLoading) return <Spinner />;

  if (isError) return <Alert type="destructive" message={error.message} />;

  if (!data) return <Alert message="No stats found" />;

  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(data).map(([status, count]) => (
        <StatsCard
          key={status}
          stats={{ title: status as JobStatus, value: count }}
        />
      ))}
    </div>
  );
};

export default StatsContainer;
