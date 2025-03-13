import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobType } from "@/types/formTypes/createJobFormTypes";
import JobInfo from "./JobInfo";
import DeleteJobButton from "./DeleteJobButton";

const JobCard = ({ job }: { job: JobType }) => {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle className="capitalize text-2xl">{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <JobInfo job={job} />
      </CardContent>
      <CardFooter>
        <DeleteJobButton />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
