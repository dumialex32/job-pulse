import { FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  CustomFormSelectProps,
  SelectWidth,
} from "@/types/formTypes/customFormSelectTypes";

const mapSelectWidth: SelectWidth = {
  sm: "w-[140]",
  md: "w-[180]",
  lg: "w-[220]",
  full: "w-full",
};

const CustomFormSelect = <T extends FieldValues>({
  options,
  control,
  name,
  customLabel,
  width,
}: CustomFormSelectProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="capitalize">{customLabel || name}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger
                  className={`${mapSelectWidth[width || "full"]} bg-background`}
                >
                  <SelectValue placeholder={`Select ${name}`} />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormSelect;
