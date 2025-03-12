import { JobType } from "../formTypes/createJobFormTypes";

export type GetJobsActionProps = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export type GetJobsActionResponse = {
  jobs: JobType[];
  count: number;
  totalPages: number;
  page: number;
};
