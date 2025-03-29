import StatsLoadingCard from "@/components/dashboard/stats/StatsLoadingCard";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <StatsLoadingCard />
      <StatsLoadingCard />
      <StatsLoadingCard />
    </div>
  );
};

export default loading;
