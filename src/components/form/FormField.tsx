import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as ShadcnFormField,
} from "../ui/form";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";
import { Select } from "../ui/select";
import { capitalize } from "@/utils/stringUtils";

type FormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: React.ReactElement<{
    value?: string;
    onValueChange?: (value: string) => void;
  }>;
};

const FormField = <T extends FieldValues>({
  form,
  name,
  children,
}: FormFieldProps<T>) => {
  return (
    <ShadcnFormField
      control={form.control}
      name={name}
      render={({ field }) => {
        // Select element
        if (React.isValidElement(children) && children.type === Select) {
          return (
            <FormItem>
              <FormLabel>{String(capitalize(name))}</FormLabel>
              <FormControl>
                {React.cloneElement(children, {
                  value: field.value,
                  onValueChange: field.onChange,
                })}
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          );
        }

        {
          /* Input element */
        }
        return (
          <FormItem>
            <FormLabel>{String(capitalize(name))}</FormLabel>
            <FormControl>
              {React.cloneElement(children, { ...field })}
            </FormControl>
            <FormMessage className="text-red-300" />
          </FormItem>
        );
      }}
    />
  );
};

export default FormField;
