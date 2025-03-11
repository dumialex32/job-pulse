"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import {
  CreateJobFormValues as CreateJobType,
  createJobFormSchema,
  JobMode,
  JobStatus,
} from "@/types/formTypes/createJobFormTypes";
import CustomFormSelect from "./CustomFormComponents/CustomFormSelect";
import CustomFormField from "./CustomFormComponents/CustomFormField";
import { getSelectOptions } from "@/utils/formUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";
import { toast } from "sonner";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const defaultValues: CreateJobType = {
  position: "",
  company: "",
  location: "",
  status: JobStatus.Pending,
  mode: JobMode.FullTime,
};

const CreateJobForm = () => {
  const form = useForm<CreateJobType>({
    resolver: zodResolver(createJobFormSchema),
    defaultValues,
  });

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: (newJob: CreateJobType) => {
      return createJobAction(newJob);
    },
    onSuccess: (data) => {
      if (!data) {
        toast("There was an error");
        return;
      }

      toast("Job has been created", {
        description: dayjs().format("dddd, MMMM, D, YYYY"),
      });

      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      // form.reset()

      router.push("/jobs");
    },
    onError: () => {
      return toast("There was an error while creating job");
    },
  });

  const onSubmit = (values: CreateJobType) => {
    const newJob = { ...values };

    mutate(newJob);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-8 bg-muted rounded"
        >
          <h2 className="text-4xl font-semibold mb-8 col-span-3">Add Job</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
            {/* position form input */}
            <CustomFormField control={form.control} name="position" />
            {/* ccompany form input */}
            <CustomFormField control={form.control} name="company" />
            {/* location form input */}
            <CustomFormField control={form.control} name="location" />
            {/* status form select */}
            <CustomFormSelect
              control={form.control}
              options={getSelectOptions(JobStatus)}
              name="status"
            />
            {/* mode form select */}
            <CustomFormSelect
              control={form.control}
              options={getSelectOptions(JobMode)}
              name="mode"
            />

            <Button
              className="self-end capitalize"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Loading" : "Create Job"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateJobForm;
