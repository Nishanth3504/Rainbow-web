import * as Yup from "yup";

export const LoginValidation = Yup.object({
//   mobilenumber: Yup.string().min(10).max(10).required("Please enter Mobile number"),
   mobilenumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number starting with 6-9")
    .required("Mobile number is required"),
});

export const registration = Yup.object({
name: Yup.string().required("Please enter First name"),
title: Yup.string().required("Please select a Title"),
lastname: Yup.string().required("Please enter Last name"),
mobileno: Yup.string()
     .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number starting with 6-9")
     .required("Mobile number is required"),
Country: Yup.string().required("Please select a Country"),
datename: Yup.string().required("Please select a Date"),
Gender: Yup.string().required("Please select a Gender"),
addressname: Yup.string().required("Please enter Address"),
pincode: Yup.string().required("Please enter Pin code"),
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(6).required("Please enter your password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
});