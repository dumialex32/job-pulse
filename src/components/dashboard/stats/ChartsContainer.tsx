"use client";

import Alert from "@/components/Alert";
import { Spinner } from "@/components/Spinner";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartData } from "@/types/stats/chartsContainerTypes";
import { getChartsDataAction } from "@/utils/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  count: {
    label: "Count",
    color: "#7c3aed",
  },
  date: { label: "Date", color: "#a070f2" },
};

const ChartsContainer = () => {
  const queryClient = useQueryClient();

  // retrieve prefetched data
  const initialData = queryClient.getQueryData<ChartData>(["charts"]);
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

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert message={`Error loading chart data: ${error.message}`} />;
  }

  if (!data?.length) {
    return <Alert message="No chart data available" />;
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={"date"}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey={"count"} fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartsContainer;
