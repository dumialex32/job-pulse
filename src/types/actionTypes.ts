import { Job } from "./jobTypes";
import { ChartData, StatsData } from "./statsTypes";

//////////////////////
/* job action types */
//////////////////////

// getJobsAction
export type GetJobsActionProps = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};
export type GetJobsActionResponse = {
  jobs: Job[];
  count: number;
  totalPages: number;
  page: number;
};

// getJobAction
export type GetJobActionResponse = Job | null;

// createJobAction
export type CreateJobActionResponse = Job | null;

// editJobAction
export type EditJobActionResponse = Job | null;

//deleteJobAction
export type DeleteJobActionResponse = Job | null;

/////////////////////////
/* stats actions types */
/////////////////////////

// getStatsAction
export type GetStatsActionResponse = StatsData;

// getChartsAction
export type GetChartsActionResponse = ChartData[];
