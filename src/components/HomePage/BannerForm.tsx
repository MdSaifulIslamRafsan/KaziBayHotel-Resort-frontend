"use client";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CForm from "../form/CForm";
import CSelect from "../form/CSelect";
import { Button } from "../ui/button";
import CDatePicker from "../form/CDatePicker";

const BannerForm = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Search Data:", data);
    };
    return (
        <CForm
            onSubmit={onSubmit}

            styles="backdrop-blur-xl border border-border shadow-sm mt-12 p-4 md:p-6 rounded-2xl max-w-5xl mx-auto w-full"
        >
            {() => (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">

                    {/* Check-in */}
                    <CDatePicker
                        name="checkIn"
                        placeholder="Check-in"
                        className="text-foreground/60"
                    />

                    {/* Check-out */}
                    <CDatePicker
                        name="checkOut"
                        placeholder="Check-out"
                        className="text-foreground/60"
                    />

                    {/* Guests */}
                    <CSelect
                        name="guests"
                        placeholder="Guests"
                        // className="text-muted"
                        options={[
                            { label: "1 Guest", value: "1" },
                            { label: "2 Guests", value: "2" },
                            { label: "3 Guests", value: "3" },
                            { label: "4+ Guests", value: "4+" },
                        ]}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full h-11 md:h-12 text-base font-medium"
                    >
                        Search Rooms
                    </Button>

                </div>
            )}
        </CForm>
    )
}

export default BannerForm;