import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobStatus } from "@/types/formTypes";

type Stats = { title: JobStatus; value: number };

type StatsCardProps = {
  stats: Stats;
};

const StatsCard = ({ stats }: StatsCardProps) => {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-3xl capitalize">{stats.title}</CardTitle>
        <CardDescription className="text-4xl text-primary font-bold">
          {stats.value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatsCard;
