import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

type CustomFormSelectProps<T extends FieldValues> = {
  options: Record<string, string>[];
  name: Path<T>;
  customLabel?: string;
  control: Control<T>;
};

const CustomFormSelect = <T extends FieldValues>({
  options,
  control,
  name,
  customLabel,
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
                <SelectTrigger className="w-[180px]">
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
