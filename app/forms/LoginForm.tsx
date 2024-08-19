"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as yup from "yup";
import { userSchema } from "../../utils/UserSchema";
import { useFormik } from "formik";
import clsx from "clsx";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values, actions) => {
      console.log("formik:", JSON.stringify(values));
      actions.resetForm();
    },
  });
  console.log("formik:", formik);
  // const router = useRouter();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //     const response = await fetch('/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     });
    //     if (response.ok) {
    //         router.push('/dashboard'); // Redirect to dashboard upon successful login
    //     } else {
    //         console.error('Failed to login');
    //     }
    // } catch (error) {
    //     console.error('Error occurred:', error);
    // }
    // const isValid = await userSchema.isValid(formData);
    // console.log("handleSubmit:", JSON.stringify(formData));
  };

  return (
    <div>
      <h1 className="text-center">Login Page</h1>
      <div className="flex justify-center">
        <form className="p-5 border border-black rounded-xl" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={clsx(
                "border",
                formik.errors.email ?? formik.touched.email ? "border-red-500" : "border-black"
              )}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && <p className="text-red-500">{formik.errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={clsx(
                "border",
                formik.errors.password && formik.touched.password ? "border-red-500" : "border-black"
              )}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={clsx(
                "border",
                formik.errors.confirmPassword && formik.touched.confirmPassword ? "border-red-500" : "border-black"
              )}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <p className="text-red-500">{formik.errors.confirmPassword}</p>
            )}

            <button disabled={formik.isSubmitting} type="submit" className="border">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <Link className="text-blue-700 underline" href="/">
          Home Page
        </Link>
        <Link className="text-blue-700 underline" href="/posts">
          All Posts
        </Link>
      </div>
    </div>
  );
}
