"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import {
  formSchema,
  JobMode,
  JobStatus,
} from "@/types/formTypes/createJobFormTypes";
import CustomFormSelect from "./CustomFormComponents/CustomFormSelect";
import CustomFormField from "./CustomFormComponents/CustomFormField";

const defaultValues: z.infer<typeof formSchema> = {
  position: "",
  company: "",
  location: "",
  status: JobStatus.Pending,
  mode: JobMode.FullTime,
};

const CreateJobForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const getSelectOptions = <T extends Record<string, string>>(x: T) => {
    return Object.entries(x).map(([key, value]) => ({
      label: key,
      value,
    }));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField control={form.control} name="position" />
        <CustomFormField control={form.control} name="company" />
        <CustomFormField control={form.control} name="location" />

        <CustomFormSelect
          control={form.control}
          options={getSelectOptions(JobStatus)}
          name="status"
        />

        <CustomFormSelect
          control={form.control}
          options={getSelectOptions(JobMode)}
          name="mode"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateJobForm;
