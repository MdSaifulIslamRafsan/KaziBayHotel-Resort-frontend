
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {  Eye, EyeOff } from "lucide-react";
import { cn } from "../../lib/utils";
import { TCInput } from "@/types/CInputTypes";


const CInput = ({
  type = "text",
  label,
  fieldName,
  placeholder,
  isRequired,
  className,
}: TCInput) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <FormLabel htmlFor={fieldName}>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              {/* ✅ DATE INPUT (SHADCN CALENDAR) */}
              <>
                {/* NORMAL INPUT */}
                <Input
                  {...field}
                  type={inputType}
                  value={field.value ?? ""}
                  aria-invalid={!!fieldState.error}
                  placeholder={placeholder}
                  className={cn(
                    "pr-10",
                    fieldState.error && "border-destructive focus-visible:ring-destructive",
                    className
                  )}
                />

                {/* PASSWORD TOGGLE */}
                {type === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                )}
              </>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CInput;