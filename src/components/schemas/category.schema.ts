/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

const categoryMutation = (curCategory?: any) => {
  const categorySchema = [
    {
      key: "1",
      label: "Category Name",
      name: "CategoryName",
      type: "text",
      validationSchema: Yup.string()
        .required("Department CategoryName Is Required")
        .trim(),
      required: true,
      initialValue: curCategory?.CategoryName ? curCategory?.CategoryName : "",
      className: "col-span-12",
    },
    {
      key: "2",
      label: "Category Description",
      name: "CategoryDescription",
      type: "text",
      validationSchema: Yup.string()
        .required("Department CategoryDescription Is Required")
        .trim(),
      required: true,
      initialValue: curCategory?.CategoryDescription
        ? curCategory?.CategoryDescription
        : "",
      className: "col-span-12",
    },
  ];
  const categorySchemaInitialValues = categorySchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const categorySchemaValidation = categorySchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    categorySchema,
    categorySchemaInitialValues,
    categorySchemaValidation,
  };
};

type departmentValueType =
  | any
  | {
      [key: string]: string;
    };

export { categoryMutation };
export type { departmentValueType };
