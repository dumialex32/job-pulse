import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StatsLoadingCard = () => {
  return (
    <Card className="w-[320px] h-[90px]">
      <CardHeader className="flex items-center justify-between flex-row">
        <div className="flex items center space-x-4">
          <Skeleton className="h-[36px] w-[36px] rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default StatsLoadingCard;
