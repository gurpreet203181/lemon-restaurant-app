import * as React from "react";
import { BookingFormData, useBookingForm } from "src/hooks";
import { isEmail, isNotEmpty, matches } from "@mantine/form";

const BookingFormContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { FormProvider, useForm } = useBookingForm();

  const initialValues: BookingFormData = {
    seating: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    requests: "",
    accept: "",
  };
  const bookingFormValidation = {
    seating: isNotEmpty("Please select a seating."),
    date: isNotEmpty("Please select a date."),
    time: isNotEmpty("Please select a time."),
    guests: isNotEmpty("Please select the number of guests."),
    occasion: isNotEmpty("Please select an occasion."),
    firstName: isNotEmpty("First Name Required."),
    lastName: isNotEmpty("Last Name Required."),
    email: isEmail("Email Required."),
    phoneNumber: matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Phone Number Required."
    ),
    accept: isNotEmpty("Please. Agree on our friendly privacy policy."),
  };
  const form = useForm({
    initialValues,
    validate: bookingFormValidation,
  });

  return <FormProvider form={form}>{children}</FormProvider>;
};

export default BookingFormContextProvider;
