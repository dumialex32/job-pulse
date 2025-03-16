"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import {
  CreateOrEditJobFormValues,
  createJobFormSchema,
  JobMode,
  JobStatus,
} from "@/types/formTypes/createOrEditJobFormTypes";
import CustomFormSelect from "./CustomFormComponents/CustomFormSelect";
import CustomFormField from "./CustomFormComponents/CustomFormField";
import { getSelectOptions } from "@/utils/formUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction, editJobAction } from "@/utils/actions";
import { toast } from "sonner";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import ButtonLoader from "../ButtonLoader";
import { DialogClose, DialogTitle } from "../ui/dialog";
import { useRef } from "react";

const createOrEditJobDefaultValues = (
  editJobValues?: CreateOrEditJobFormValues
) => ({
  position: editJobValues?.position || "",
  company: editJobValues?.company || "",
  location: editJobValues?.location || "",
  status: editJobValues?.status || JobStatus.Pending,
  mode: editJobValues?.mode || JobMode.FullTime,
});

const CreateOrEditJobForm = ({
  edit = false,
  editJobValues,
}: {
  edit?: boolean;
  editJobValues?: CreateOrEditJobFormValues;
}) => {
  const form = useForm<CreateOrEditJobFormValues>({
    resolver: zodResolver(createJobFormSchema),
    defaultValues: createOrEditJobDefaultValues(editJobValues),
  });

  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate: createOrEditJob, isPending } = useMutation({
    mutationFn: ({
      jobValues,
      id,
    }: {
      jobValues: CreateOrEditJobFormValues;
      id: string;
    }) => {
      return edit ? editJobAction(jobValues, id) : createJobAction(jobValues);
    },
    onSuccess: (data) => {
      if (!data) {
        toast("There was an error");
        return;
      }

      toast(`Job successfully ${edit ? "updated" : "created"}.`, {
        description: dayjs().format("dddd, MMMM, D, YYYY"),
      });

      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      /* form.reset() // alternative instead of router.push */

      if (edit && dialogCloseRef.current) {
        dialogCloseRef.current.click(); // access close dialog function
      } else {
        router.push("/jobs");
      }
    },
    onError: () => {
      return toast("There was an error while creating job");
    },
  });

  const onSubmit = (values: CreateOrEditJobFormValues) => {
    const jobValues = { ...values };
    const id = editJobValues?.id || "";

    createOrEditJob({ jobValues, id });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-8 bg-muted rounded"
        >
          <DialogTitle asChild>
            <h2 className="text-4xl font-semibold mb-8 col-span-3 capitalize">
              {edit ? "edit job" : "create job"}
            </h2>
          </DialogTitle>
          <div
            className={`grid ${
              edit ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
            } gap-4 items-start`}
          >
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
              {isPending ? (
                <ButtonLoader color="white" />
              ) : (
                (edit && "Edit") || "CreateJob"
              )}
            </Button>

            {edit && (
              <DialogClose asChild ref={dialogCloseRef}>
                <Button>Cancel</Button>
              </DialogClose>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateOrEditJobForm;
