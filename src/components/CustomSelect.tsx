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
  value: T;
  onValueChange: (value: T) => void;
  placeholder: string;
};

const CustomSelect = <T extends string | number>({
  value,
  options,
  placeholder,
  onValueChange,
}: CustomSelect<T>) => {
  return (
    <Select
      value={String(value)}
      onValueChange={(val) => onValueChange(val as T)}
    >
      <SelectTrigger className="max-w-[200px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => {
            return (
              <SelectItem key={option.value} value={String(option.value)}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
