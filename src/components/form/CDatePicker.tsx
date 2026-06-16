"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TDatePickerProps } from "@/types/CDatePickerTypes";



const CDatePicker = ({ name, label, placeholder, className }: TDatePickerProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div className="space-y-2 w-full">
                    {label && (
                        <label className="text-sm font-medium">
                            {label}
                        </label>
                    )}

                    <Popover >
                        <PopoverTrigger className="bg-transparent  hover:bg-transparent py-[22px]" asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full border-input justify-start text-left font-normal pr-10",
                                    !field.value && "text-muted-foreground",
                                    className
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value
                                    ? format(field.value, "PPP")
                                    : placeholder}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}

                            />
                        </PopoverContent>
                    </Popover>

                    {fieldState.error && (
                        <p className="text-sm text-red-500">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default CDatePicker;