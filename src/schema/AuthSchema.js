import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("ENTER YOUR EMAIL")
    .test("ISVALIDEMAIL", "ENTER A VALID EMAIL", (arg) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg)
    ),
  password: yup
    .string()
    .trim()
    .required("REQUIRED")
    .min(8, "INVALID PASSWORD")
    .max(16, "INVALID PASSWORD"),
});

export const RegisterSchema = yup.object().shape({
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
  email: yup
      .string()
      .trim()
      .required("ENTER YOUR EMAIL")
      .test('isvalidEmail', "ENTER A VALID EMAIL", (arg) => 
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg)),
  password: yup
      .string()
      .trim()
      .required("PASSWORD CANNOT BE EMPTY")
      .min(3, "TOO SHORT PASSWORD")
      .max(16, "TOO LONG PASSWORD")
      .test("isPerfectPassword", "ENTER A STRONG PASSWORD", (arg) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?!.*\s).{8,16}$/.test(arg)
      ),
});