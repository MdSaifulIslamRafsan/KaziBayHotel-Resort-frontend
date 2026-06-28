"use client";

import { GUEST_OPTIONS, ROOM_DATA, ROOM_OPTIONS } from "@/types/RoomType";
import { FieldValues, SubmitHandler } from "react-hook-form";

import CForm from "../form/CForm";
import CDatePicker from "../form/CDatePicker";
import CSelect from "../form/CSelect";

import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";

const ReserveForm = () => {
    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log(data);
            router.push("/checkout");

        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <section className="mt-12">
            <div className="">
                <Card className="">
                    {/* Header */}
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground">
                            RESERVE ROOM
                        </CardTitle>

                        <p className="text-sm text-foreground/70">
                            From{" "}
                            <span className="text-primary font-semibold text-base">
                                {ROOM_DATA.currency}
                                {ROOM_DATA.pricePerNight}
                            </span>
                            /night
                        </p>
                    </CardHeader>

                    {/* Body */}
                    <CardContent>
                        <CForm onSubmit={onSubmit} styles="space-y-3">
                            {() => (
                                <div className="space-y-3">
                                    {/* Check In */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Check In
                                        </label>
                                        <CDatePicker
                                            name="checkIn"
                                            placeholder="Select check-in date"
                                        />
                                    </div>

                                    {/* Check Out */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Check Out
                                        </label>
                                        <CDatePicker
                                            name="checkOut"
                                            placeholder="Select check-out date"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Guests
                                        </label>
                                        <CSelect
                                            name="rooms"
                                            placeholder="1 Guest"
                                            options={GUEST_OPTIONS}
                                        />
                                    </div>

                                    {/* Rooms */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Rooms
                                        </label>
                                        <CSelect
                                            name="rooms"
                                            placeholder="1 Room"
                                            options={ROOM_OPTIONS}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
                                    >
                                        Book Your Room
                                    </Button>
                                </div>
                            )}
                        </CForm>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ReserveForm;