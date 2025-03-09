import { Control, FieldValues, Path } from "react-hook-form";

export type CustomFormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};
