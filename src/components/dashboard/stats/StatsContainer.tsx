"use client";

import StatsCard from "./StatsCard";
import Alert from "@/components/Alert";
import { Spinner } from "@/components/Spinner";
import { JobStatus } from "@/types/formTypes";
import useStatsQuery from "@/hooks/useStatsQuery";

const StatsContainer = () => {
  const { data, error, isError, isLoading } = useStatsQuery();

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <Alert
        type="destructive"
        message={error?.message || "Something went wrong while fetching stats."}
      />
    );
  if (!data) return <Alert message="No stats available" />;

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
