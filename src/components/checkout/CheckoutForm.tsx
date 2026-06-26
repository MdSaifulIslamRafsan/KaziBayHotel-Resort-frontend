"use client"
import { SubmitHandler } from "react-hook-form"
import CForm from "../form/CForm"
import CInput from "../form/CInput"
import CTextarea from "../form/CTextarea"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckoutFormType, checkoutSchema } from "@/schema"
import { Card, CardContent } from "../ui/card"
import { Separator } from "../ui/separator"

const CheckoutForm = () => {
  const handleSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    console.log(data);
  };
  return (
    <CForm
      onSubmit={handleSubmit}
      resolver={zodResolver(checkoutSchema)}
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        company: "",
        jobRole: "",
        bookingFor: "self",
        specialRequest: "",
      }}
      styles="space-y-5"
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <Card className="p-6 lg:p-8 lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4">
            Guest Information
          </h2>






          <div className="grid md:grid-cols-2 gap-5">

            <CInput
              fieldName="firstName"
              label="First Name"
              isRequired
            />

            <CInput
              fieldName="lastName"
              label="Last Name"
              isRequired
            />

            <CInput
              fieldName="email"
              type="email"
              label="Email Address"
              isRequired
            />

            <CInput
              fieldName="phone"
              label="Phone Number"
              isRequired
            />

            <CInput
              fieldName="country"
              label="Country"
              isRequired
            />

            <CInput
              fieldName="city"
              label="Town / City"
              isRequired
            />

            <CInput
              fieldName="company"
              label="Company (Optional)"
            />

            <CInput
              fieldName="jobRole"
              label="Job Role (Optional)"
            />
          </div>

          <div className="mt-8">
            <p className="font-medium mb-4">
              Who are you booking for?
            </p>

            {/* <RadioGroup defaultValue="self">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="self"
          id="self"
        />
        <Label htmlFor="self">
          I'm the main guest
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="other"
          id="other"
        />
        <Label htmlFor="other">
          I'm booking for someone else
        </Label>
      </div>
    </RadioGroup> */}
          </div>

          <CTextarea
            fieldName="specialRequest"
            label="Special Requests (Optional)"
            placeholder="Any special requirements..."
          />




        </Card>

        <Card className="sticky top-24 p-0 lg:col-span-2 h-fit">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">
              Booking Summary
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span>Premier Beachfront Suite × 1</span>
                <span>$399</span>
              </div>

              <div className="text-sm text-foreground/70">
                <p>
                  Check In: 26 Jun 2026
                </p>
                <p>
                  Check Out: 27 Jun 2026
                </p>
                <p>
                  Rooms: 1 • Adults: 1
                </p>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$399.00</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>$399.00</span>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full mt-6"
            >
              Confirm Booking
            </Button>
          </CardContent>
        </Card>

      </div>
    </CForm>
  )
}

export default CheckoutForm