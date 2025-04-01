import { z } from "zod";
import { Control, FieldValues, Path, UseFormReturn } from "react-hook-form";

//////////////////////////
/* CustomFormField types*/
//////////////////////////
export type FormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: React.ReactElement;
};

export type CustomFormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

////////////////////////////
/* CustomFormSelect types */
////////////////////////////
export type SelectWidth = {
  sm: "w-[140]";
  md: "w-[180]";
  lg: "w-[220]";
  full: "w-full";
};
export type CustomFormSelectProps<T extends FieldValues> = {
  options: Record<string, string>[];
  name: Path<T>;
  customLabel?: string;
  control: Control<T>;
  width?: keyof SelectWidth;
};

//////////////////////////////
/* createOrEditJobFormTypes */
//////////////////////////////
export type CreateOrEditJobFormValues = z.infer<typeof createJobFormSchema> & {
  id?: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

// createJobForm schema
const POSITION_MIN_LENGTH = 2;
const POSITION_MAX_LENGTH = 32;

const setInputLengthValidationMessage = (fieldName: string) => {
  return `${fieldName} must be between ${POSITION_MIN_LENGTH} and ${POSITION_MAX_LENGTH} characters long. `;
};

const stringValidation = (fieldName: string) =>
  z
    .string()
    .min(POSITION_MIN_LENGTH, {
      message: setInputLengthValidationMessage(fieldName),
    })
    .max(POSITION_MAX_LENGTH, {
      message: setInputLengthValidationMessage(fieldName),
    });

export const createJobFormSchema = z.object({
  position: stringValidation("Position"),
  company: stringValidation("Company"),
  location: stringValidation("Location"),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});
