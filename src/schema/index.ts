import { z } from "zod";


export const contactSchema = z.object({
    fullName: z.string()
        .min(1, "Full name is required")
        .min(2, "Name must be at least 2 characters"),

    email: z.string()
        .min(1, "Email is required")
        .email("Invalid email address"),

    phone: z.string()
        .min(1, "Phone number is required")
        .min(11, "Phone number must be at least 11 characters"),

    subject: z.string()
        .min(1, "Subject is required")
        .min(3, "Subject must be at least 3 characters"),

    message: z.string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters"),
});

export type ContactFormType = z.infer<typeof contactSchema>;






export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(11, "Phone number must be at least 11 characters"),

  country: z
    .string()
    .min(1, "Country is required"),

  city: z
    .string()
    .min(1, "Town/City is required"),

  company: z
    .string()
    .optional(),

  jobRole: z
    .string()
    .optional(),

  bookingFor: z.enum(
    ["self", "other"],
    {
    required_error: "Please select who you are booking for",
    invalid_type_error: "Please select who you are booking for",
  }
  ),

  specialRequest: z
    .string()
    .max(500, "Special request cannot exceed 500 characters")
    .optional(),
});

export type CheckoutFormType = z.infer<typeof checkoutSchema>;