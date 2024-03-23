import * as yup from "yup";

export const userDetailsSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("ENTER YOUR EMAIL")
    .test("isvalidEmail", "ENTER A VALID EMAIL", (arg) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg)
    ),
  firstName: yup
    .string()
    .trim()
    .required("FIRST NAME CANNOT BE EMPTY")
    .matches(/^[A-Za-z]+$/, "ENTER A VALID FIRST NAME"),
  lastName: yup
    .string()
    .trim()
    .required("LAST NAME CANNOT BE EMPTY")
    .matches(/^[A-Za-z]+$/, "ENTER A VALID LAST NAME"),
  phoneNumber: yup
    .string()
    .trim()
    .required("PHONE NUMBER CANNOT BE EMPTY")
    .matches(/^\d{10}$/, "ENTER A VALID PHONE NUMBER"),
  zipCode: yup
    .string()
    .trim()
    .required("ZIP CODE CANNOT BE EMPTY")
    .matches(/^\d{6}$/, "ENTER A VALID ZIP CODE"),
  gender: yup
    .string()
    .trim()
    .required("GENDER CANNOT BE EMPTY")
    .oneOf(["male", "female", "other"], "SELECT A VALID GENDER"),
});

export const billigAddressSchema = yup.object().shape({
  addressLine1: yup.string().trim().required("ADDRESS LINE 1 CANNOT BE EMPTY"),
  addressLine2: yup.string().trim(),
  pinCode: yup
    .string()
    .trim()
    .required("PIN CODE CANNOT BE EMPTY")
    .matches(/^\d{6}$/, "ENTER A VALID PIN CODE"),
  city: yup.string().trim().required("CITY CANNOT BE EMPTY"),
  state: yup.string().trim().required("STATE CANNOT BE EMPTY"),
});

export const DeliveryAddressSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("FIRST NAME CANNOT BE EMPTY")
    .matches(/^[A-Za-z]+$/, "ENTER A VALID FIRST NAME"),
  lastName: yup
    .string()
    .trim()
    .required("LAST NAME CANNOT BE EMPTY")
    .matches(/^[A-Za-z]+$/, "ENTER A VALID LAST NAME"),
  addressLine1: yup.string().trim().required("ADDRESS LINE 1 CANNOT BE EMPTY"),
  addressLine2: yup.string().trim(),
  pinCode: yup
    .string()
    .trim()
    .required("PIN CODE CANNOT BE EMPTY")
    .matches(/^\d{6}$/, "ENTER A VALID PIN CODE"),
  city: yup.string().trim().required("CITY CANNOT BE EMPTY"),
  state: yup.string().trim().required("STATE CANNOT BE EMPTY"),
  parimay: yup.boolean().default(false),
});
