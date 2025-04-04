import { JobStatus } from "@/types/formTypes";
import { Job } from "@/types/jobTypes";
import dayjs from "dayjs";
import {
  BriefcaseBusiness,
  Calendar,
  CircleX,
  Loader,
  MapPin,
  Radio,
} from "lucide-react";

type MapStatus = {
  [key in JobStatus as string]: { icon: React.ReactElement; style: string };
};

const mapStatus: MapStatus = {
  pending: { icon: <Loader />, style: "bg-blue-400" },
  interview: { icon: <Radio />, style: "bg-green-400" },
  declined: { icon: <CircleX />, style: "bg-red-400" },
};

const JobInfo = ({ job }: { job: Job }) => {
  return (
    <div className="grid grid-cols-2 justify-between gap-y-4">
      <div className="flex items-center gap-2">
        <BriefcaseBusiness /> <span>{job.mode}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin /> <span className="capitalize">{job.location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar /> <span>{dayjs(job.createdAt).format("DD/MM/YY")}</span>
      </div>
      <div
        className={`flex items-center gap-2 rounded px-3 py-0.5 ${
          mapStatus[job.status].style
        }`}
      >
        {mapStatus[job.status].icon}
        <span>{job.status}</span>
      </div>
    </div>
  );
};

export default JobInfo;
