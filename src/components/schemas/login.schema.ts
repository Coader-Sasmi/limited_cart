/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikHelpers } from "formik";
import * as Yup from "yup";

const loginSchema = [
  {
    key: "1",
    name: "email",
    label: "Email ",
    type: "email",
    required: true,
    validationSchema: Yup.string()
      .required("Please provide a email")
      .email("Invalid email ID")
      .trim(),
    initialValue: "",
    placeHolder: "name@company.com",
  },
  {
    key: "2",
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    validationSchema: Yup.string()
      .required("Please provide a password")
      .min(6, "Password must be 6 characters long")
      .trim(),
    placeHolder: "********",
    initialValue: "",
  },
];

const loginSchemaInitialValue: { [key: string]: string } = loginSchema.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  },
  {} as { [key: string]: string }
);

const loginSchemaValidation: { [key: string]: Yup.StringSchema<string> } =
  loginSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });

type loginValueType =
  | {
      userId: string;
      password: string;
    }
  | {
      [key: string]: string;
    };

type loginMutationType =
  | {
      results: { data: { user: any; token: string } };
      status: number;
    }
  | undefined;

type formikProps = FormikHelpers<{ [key: string]: string }>;
export { loginSchema, loginSchemaInitialValue, loginSchemaValidation };
export type { formikProps, loginMutationType, loginValueType };
