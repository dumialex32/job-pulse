"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  formSchema,
  JobMode,
  JobStatus,
} from "@/types/formTypes/createJobFormTypes";
import FormField from "./FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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

  const getSelectValues = <T extends Record<string, string>>(x: T) => {
    return Object.entries(x).map(([key, value]) => ({
      label: key,
      value,
    }));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField form={form} name="position">
          <Input />
        </FormField>
        <FormField form={form} name="company">
          <Input />
        </FormField>
        <FormField form={form} name="location">
          <Input />
        </FormField>
        <FormField form={form} name="status">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {getSelectValues(JobStatus).map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField form={form} name="mode">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              {getSelectValues(JobMode).map((option) => (
                <SelectItem
                  key={option.value as string}
                  value={option.value as string}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateJobForm;
