import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "../../ui/form";
import { FieldValues } from "react-hook-form";
import {} from "../../ui/select";
import { capitalize } from "@/utils/stringUtils";
import { Input } from "../../ui/input";
import { CustomFormFieldProps } from "@/types/formTypes/customFormFieldTypes";

const CustomFormField = <T extends FieldValues>({
  name,
  control,
}: CustomFormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{String(capitalize(name))}</FormLabel>
            <FormControl>
              <Input {...field} className="bg-background" />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormField;
