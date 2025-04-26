/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

const supplierMutation = (curSupplier?: any) => {
  const supplierSchema = [
    {
      key: "1",
      label: "Supplier Name",
      name: "SupplierName",
      type: "text",
      validationSchema: Yup.string()
        .required("Supplier Name Is Required")
        .trim(),
      required: true,
      initialValue: curSupplier?.CategoryName ? curSupplier?.CategoryName : "",
      className: "col-span-12",
    },
    {
      key: "2",
      label: "Supplier Description",
      name: "SupplierDescription",
      type: "text",
      validationSchema: Yup.string()
        .required("Supplier Description Is Required")
        .trim(),
      required: true,
      initialValue: curSupplier?.CategoryDescription
        ? curSupplier?.CategoryDescription
        : "",
      className: "col-span-12",
    },
    {
      key: "3",
      label: "Supplier EmailId",
      name: "SupplierEmailId",
      type: "email",
      validationSchema: Yup.string()
        .email("Invalid email")
        .required("Email is Required !")
        .trim(),
      required: true,
      initialValue: curSupplier?.SupplierEmailId
        ? curSupplier?.SupplierEmailId
        : "",
      className: "col-span-12",
    },
    {
      key: "4",
      label: "Supplier Phone",
      name: "SupplierPhone",
      type: "number",
      validationSchema: Yup.string()
        .required("Phone Number is Required!")
        //   .matches(/^[0-9]*$/, "Phone number must only contain digits")
        //   .min(10, "Phone number must be 10 digit number")
        //   .max(10)
        .trim(),
      required: true,
      initialValue: curSupplier?.SupplierPhone
        ? curSupplier?.SupplierPhone
        : "",
      className: "col-span-12",
    },
    {
      key: "5",
      label: "Supplier Address",
      name: "SupplierAddress",
      type: "text",
      multiline: true,
      rows: 4,
      validationSchema: Yup.string()
        .required("Supplier Address Is Required")
        .trim(),
      required: true,
      initialValue: curSupplier?.SupplierAddress
        ? curSupplier?.SupplierAddress
        : "",
      className: "col-span-12",
    },
  ];
  const supplierSchemaInitialValues = supplierSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const supplierSchemaValidation = supplierSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    supplierSchema,
    supplierSchemaInitialValues,
    supplierSchemaValidation,
  };
};

type supplierValueType =
  | any
  | {
      [key: string]: string;
    };

export { supplierMutation };
export type { supplierValueType };
