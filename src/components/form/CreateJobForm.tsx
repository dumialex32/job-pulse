"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import {
  CreateJobFormValues,
  createJobFormSchema,
  JobMode,
  JobStatus,
} from "@/types/formTypes/createJobFormTypes";
import CustomFormSelect from "./CustomFormComponents/CustomFormSelect";
import CustomFormField from "./CustomFormComponents/CustomFormField";
import { getSelectOptions } from "@/utils/formUtils";

const defaultValues: CreateJobFormValues = {
  position: "",
  company: "",
  location: "",
  status: JobStatus.Pending,
  mode: JobMode.FullTime,
};

const CreateJobForm = () => {
  const form = useForm<CreateJobFormValues>({
    resolver: zodResolver(createJobFormSchema),
    defaultValues,
  });

  const onSubmit = (values: CreateJobFormValues) => {
    console.log(values);
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

            <Button className="self-end capitalize" type="submit">
              Create Job
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateJobForm;
