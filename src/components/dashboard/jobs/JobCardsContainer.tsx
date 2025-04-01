import { Job } from "@/types/jobTypes";
import JobCard from "./JobCard";

const JobCardsContainer = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul className="grid lg:grid-cols-3 items-center gap-4 ">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobCardsContainer;
