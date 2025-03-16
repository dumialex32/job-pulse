import CreateOrEditJobForm from "@/components/form/CreateOrEditJobForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  CreateOrEditJobFormValues,
  JobMode,
  JobStatus,
  JobType,
} from "@/types/formTypes/createOrEditJobFormTypes";
import { useMemo } from "react";

const EditJobButton = ({ job }: { job: JobType }) => {
  const editJobValues: CreateOrEditJobFormValues = useMemo(
    () => ({
      id: job.id,
      position: job.position,
      company: job.company,
      location: job.location,
      status: job.status as JobStatus,
      mode: job.mode as JobMode,
    }),
    [job]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>

      <DialogContent className="p-8">
        <CreateOrEditJobForm edit={true} editJobValues={editJobValues} />
      </DialogContent>
    </Dialog>
  );
};

export default EditJobButton;
