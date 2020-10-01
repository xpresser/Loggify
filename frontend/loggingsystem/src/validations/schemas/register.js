import * as yup from "yup";

const SignupValidationSchema = yup.object({
  fullName: yup
    .string()
    .min(4, "Name should be at least 4 characters.")
    .max(40, "Name should be less than 40 characters.")
    .required("Name is required"),
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters.")
    .max(40, "Username should be less than 40 characters.")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters.")
    .required("Password is required."),
  email: yup.string().required("Email is required."),
  userPosition: yup.string(),
});

export { SignupValidationSchema };
