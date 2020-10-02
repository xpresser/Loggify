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
    .required("Password is required.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain at least one number, at least one upper case letter and at least one special character."
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup.string().required("Email is required."),
  userPosition: yup.string(),
});

export { SignupValidationSchema };
