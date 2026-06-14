import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TCSelect } from "@/types/CSelectTypes";
import { cn } from "@/lib/utils";

const CSelect = ({
  label,
  name,
  placeholder,
  options,
  isRequired,
  className,
  onValueChange,
}: TCSelect) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {isRequired && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                onValueChange?.(value);
              }}
              value={field.value}
              defaultValue={field.value}

            >
              <SelectTrigger className={cn("w-full", className)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CSelect;