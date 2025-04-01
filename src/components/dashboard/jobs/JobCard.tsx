import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import JobInfo from "./JobInfo";
import DeleteJobButton from "./DeleteJobButton";
import EditJobButton from "./EditJobButton";
import { Job } from "@/types/jobTypes";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle className="capitalize text-2xl text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
          {job.position}
        </CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <JobInfo job={job} />
      </CardContent>
      <CardFooter className="flex items center gap-3">
        <EditJobButton job={job} />

        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
