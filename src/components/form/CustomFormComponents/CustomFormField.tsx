import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "../../ui/form";
import { FieldValues, Path, Control } from "react-hook-form";
import {} from "../../ui/select";
import { capitalize } from "@/utils/stringUtils";
import { Input } from "../../ui/input";

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

const CustomFormField = <T extends FieldValues>({
  name,
  control,
}: FormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{String(capitalize(name))}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage className="text-red-300" />
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormField;
