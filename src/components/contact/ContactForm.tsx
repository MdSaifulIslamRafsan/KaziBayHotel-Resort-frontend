"use client";

import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import CTextarea from "@/components/form/CTextarea";
import { Button } from "@/components/ui/button";
import { SubmitHandler } from "react-hook-form";
import { ContactFormType, contactSchema } from "@/schema";
import { zodResolver } from '@hookform/resolvers/zod';



const ContactForm = () => {
    const handleSubmit: SubmitHandler<ContactFormType> = async (data) => {
        console.log(data);

    };

    return (
        <div className="bg-card p-5 lg:p-8 rounded-xl border">
            <h2 className="text-3xl font-semibold mb-8">
                Send Message
            </h2>

            <CForm
                onSubmit={handleSubmit}
                resolver={zodResolver(contactSchema)}
                defaultValues={{
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                }}
                styles="space-y-5"
            >

                <div className="grid md:grid-cols-2 gap-5">
                    <CInput
                        fieldName="fullName"
                        placeholder="e.g., John Doe"
                        label="Full Name"
                        isRequired={true}
                    />

                    <CInput
                        fieldName="email"
                        type="email"
                        placeholder="e.g., john.doe@example.com"
                        label="Email"
                        isRequired={true}
                    />

                    <CInput
                        fieldName="phone"
                        placeholder="eg: +880 1234-567890"
                        label="Phone Number"
                        isRequired={true}
                    />

                    <CInput
                        fieldName="subject"
                        label="Subject"
                        placeholder="e.g., Room Inquiry, Booking Assistance"
                        isRequired={true}
                    />
                </div>

                <CTextarea
                    fieldName="message"
                    label="Message"
                    placeholder="e.g., I have a question about room availability for next month..."
                    isRequired={true}
                />

                <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                    Send Message
                </Button>

            </CForm>
        </div>
    );
};

export default ContactForm;