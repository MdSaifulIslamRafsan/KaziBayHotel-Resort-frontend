"use client";

// import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { startOfToday } from "date-fns";
// import { DateRange } from "react-day-picker";
// import { addDays, startOfToday } from "date-fns";

const AvailabilityCalendar = () => {
    const today = startOfToday();
    // const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    //     from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    //     to: addDays(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), 2),
    // });

    const bookedDates = Array.from(
        { length: 5 },
        (_, i) => new Date(new Date().getFullYear(), new Date().getMonth() + 1, 20 + i)
    );

    return (
        <div className="">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Check Availability</h3>
            <div className="rounded-2xl border p-6">

                <Calendar
                    className="w-full"
                    classNames={{
                        day: "h-full w-full py-3 flex items-center justify-center",
                    }}
                    // mode="range"
                    // defaultMonth={dateRange?.from ?? today}
                    // selected={today}
                    // onSelect={setDateRange}
                    numberOfMonths={2}
                    disabled={[
                        { before: today },
                        ...bookedDates,
                    ]}
                    modifiers={{
                        booked: bookedDates,
                        today: today,
                    }}
                    modifiersClassNames={{
                        booked: "line-through opacity-100",
                        today:
                            "bg-primary/50 text-primary-foreground rounded-sm flex items-center justify-center font-semibold shadow-md",
                    }}
                />
            </div>
        </div>
    );
};

export default AvailabilityCalendar;


