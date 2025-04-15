/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

const departmentMutation = (curDepartment?: any) => {
  const departmentSchema = [
    {
      key: "1",
      label: "Category Name",
      name: "CategoryName",
      type: "text",
      validationSchema: Yup.string()
        .required("Department CategoryName Is Required")
        .trim(),
      required: true,
      initialValue: curDepartment?.CategoryName
        ? curDepartment?.CategoryName
        : "",
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
      initialValue: curDepartment?.CategoryDescription
        ? curDepartment?.CategoryDescription
        : "",
      className: "col-span-12",
    },
  ];
  const departmentSchemaInitialValues = departmentSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const departmentSchemaValidation = departmentSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    departmentSchema,
    departmentSchemaInitialValues,
    departmentSchemaValidation,
  };
};

type departmentValueType =
  | any
  | {
      [key: string]: string;
    };

export { departmentMutation };
export type { departmentValueType };
