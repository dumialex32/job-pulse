import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const JobLoadingCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <Skeleton className="h-6 w-[150px]" />

        <Skeleton className="h-3 w-[100px]" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </CardContent>
      <CardFooter className="flex items center gap-3">
        <Skeleton className="h-6 w-[80px] rounded-md" />
        <Skeleton className="h-6 w-[80px] rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default JobLoadingCard;
