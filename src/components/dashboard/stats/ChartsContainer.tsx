"use client";

import Alert from "@/components/Alert";
import { Spinner } from "@/components/Spinner";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useChartsQuery from "@/hooks/useChartsQuery";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  count: {
    label: "Count",
    color: "#7c3aed",
  },
  date: { label: "Date", color: "#a070f2" },
};

const ChartsContainer = () => {
  const { data, isLoading, isError, error } = useChartsQuery();

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <Alert
        message={`${
          error?.message || "Something went wrong while fetching charts data"
        }`}
      />
    );
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
