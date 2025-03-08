import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: React.ReactElement;
};
