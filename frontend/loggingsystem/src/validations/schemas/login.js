import * as yup from "yup";

const LoginValidationSchema = yup.object({
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters.")
    .max(40, "Username should be less than 40 characters.")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters.")
    .required("Password is required."),
});

export { LoginValidationSchema };
