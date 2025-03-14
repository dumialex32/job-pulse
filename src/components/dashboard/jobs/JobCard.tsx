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
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <CardFooter className="flex items center gap-3">
        <Button asChild>
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>

        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
