import { Control, FieldValues, Path } from "react-hook-form";

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
