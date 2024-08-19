import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,10}$/;

export const userSchema = yup.object().shape({
  email: yup.string().email("Please, enter a valid email").required("Required field"),
  password: yup
    .string()
    .min(4)
    .max(10)
    .matches(passwordRegex, { message: "Please create a stronger password" })
    .required("Required field"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"), // add null to default value
});
