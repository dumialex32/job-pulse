import { JobType } from "../formTypes/createOrEditJobFormTypes";

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
};
