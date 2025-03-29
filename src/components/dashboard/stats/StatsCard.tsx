import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobStatus } from "@/types/formTypes/createOrEditJobFormTypes";

const StatsCard = ({
  stats,
}: {
  stats: { title: JobStatus; value: number };
}) => {
  console.log("stats:", stats);
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
