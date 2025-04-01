import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

type CustomSelect<T extends string | number> = {
  options: { label: string; value: T }[];
  value?: T;
  onValueChange?: (value: T) => void;
  placeholder?: string;
  name?: string;
  defaultValue?: T;
};

const CustomSelect = <T extends string | number>({
  value,
  options,
  placeholder = "Select an option",
  onValueChange,
  name,
  defaultValue,
}: CustomSelect<T>) => {
  // local state for uncontrolled mode (when `value` is not provided)
  const [selectedValue, setSelectedValue] = useState<T | undefined>(
    defaultValue
  );

  const handleChange = (val: string) => {
    const newValue = val as T;

    if (!value) {
      setSelectedValue(newValue);
    }

    onValueChange?.(newValue);
  };

  return (
    <>
      {/* hidden input ensures value is included in form submissions */}
      {name && (
        <input type="hidden" name={name} value={value ?? selectedValue} />
      )}

      <Select
        value={value ? String(value) : String(selectedValue) || undefined}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-full bg-background">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={String(value)}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default CustomSelect;
