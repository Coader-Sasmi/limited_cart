/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IconButton, InputAdornment } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as Yup from "yup";
import { CustomLoadingButton, InputField } from "../core";
import useAuth from "../hooks/useAuth";
import useMutation from "../hooks/useMutation";
import {
  formikProps,
  loginSchema,
  loginSchemaInitialValue,
  loginSchemaValidation,
  loginValueType,
} from "../schemas";
import { saveToLocalStorage } from "../utils";
import errorHelper from "../utils/error";

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setUser, getUser } = useAuth();
  const { isLoading, mutation } = useMutation();
  const { push } = useRouter();

  const handleSubmit = async (values: loginValueType, props: formikProps) => {
    try {
      let res = await mutation(`login`, {
        method: "POST",
        isAlert: true,
        body: {
          ...values,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });
      // console.log(res);
      let resData = res?.results;
      if (resData) {
        setUser({ ...resData?.user });
        saveToLocalStorage("ACCESS_TOKEN", resData?.access_token);
        getUser();
        props.resetForm();
        if (resData?.user?.id) push(`/product`);
      }
    } catch (error: unknown) {
      errorHelper(error);
    }
  };

  return (
    <Formik
      initialValues={loginSchemaInitialValue}
      validationSchema={Yup.object(loginSchemaValidation)}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="w-full space-y-4 justify-center items-center flex flex-col">
          {loginSchema.map((inputItem) => (
            <Field name={inputItem.name} key={inputItem.key}>
              {(props: FieldProps<string>) => (
                <div className={`flex flex-col justify-center gap-2`}>
                  <div className="block text-sm font-medium text-gray-800">
                    {inputItem.label}
                  </div>
                  <div className="w-80">
                    <InputField
                      id={inputItem?.key}
                      key={inputItem?.key}
                      name={inputItem?.name}
                      styleContact={
                        inputItem?.name === "photo" ? "!lg:w-72 lg:!h-56" : ""
                      }
                      type={
                        inputItem?.type === "password"
                          ? isPasswordVisible
                            ? "text"
                            : "password"
                          : inputItem?.type
                      }
                      placeholder={inputItem.placeHolder}
                      value={formik?.values[inputItem?.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      error={Boolean(
                        formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]
                      )}
                      helperText={
                        formik?.touched[inputItem?.name] &&
                        formik?.errors[inputItem?.name]
                      }
                      InputProps={{
                        style: {
                          borderRadius: "8px",
                          height: "3rem",
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            {inputItem.type === "password" && (
                              <IconButton
                                onClick={() =>
                                  setIsPasswordVisible(!isPasswordVisible)
                                }
                              >
                                {isPasswordVisible ? (
                                  <MdVisibility className="!text-themeDarkGray" />
                                ) : (
                                  <MdVisibilityOff className="!text-themeDarkGray" />
                                )}
                              </IconButton>
                            )}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              )}
            </Field>
          ))}
          <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
            <CustomLoadingButton
              title="Sign in"
              // loading={isLoading}
              type="submit"
              className="btn-primary py-3 rounded-md w-80"
            />
          </div>
          {/* <div className="flex items-center justify-end w-80">
            <p
              onClick={() => {
                handleForgetPassword();
              }}
              className="!text-sm !font-medium cursor-pointer !text-blue-500 hover:!underline"
            >
              Forgot password?
            </p>
          </div> */}
        </Form>
      )}
    </Formik>
  );
}
