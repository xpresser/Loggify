import * as yup from "yup";
// yup
//     .addMethod(yup.mixed, 'sameAs', function(ref, message) {
//       return this.test('sameAs', message, function (value){
//         let other = this.resolve(ref);
//         return !other || !value || value === other;
//       })
//     })
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
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  email: yup.string().required("Email is required."),
  userPosition: yup.string(),
});

export { SignupValidationSchema };
