export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

//////////////////

import { z } from "zod";

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

// form zod schema validation
const POSITION_MIN_LENGTH = 2;
const POSITION_MAX_LENGTH = 18;

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

export const formSchema = z.object({
  position: stringValidation("Position"),
  company: stringValidation("Company"),
  location: stringValidation("Location"),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});
