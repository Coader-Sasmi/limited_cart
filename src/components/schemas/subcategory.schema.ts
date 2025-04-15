/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

const subCategoryMutation = (curDesignation?: any) => {
  const subCategorySchema = [
    {
      key: "1",
      label: "Department",
      name: "departmentId",
      type: "text",
      validationSchema: Yup.string().required("Department Is Required").trim(),
      required: true,
      initialValue: curDesignation?.departmentId?.title
        ? curDesignation?.departmentId?.title
        : "",
      className: `${
        curDesignation?.departmentId?.title ? "col-span-12" : "hidden"
      }`,
      disabled: true,
    },
    {
      key: "2",
      label: "Title",
      name: "title",
      type: "text",
      validationSchema: Yup.string()
        .required("Designation Tittle Is Required")
        .trim(),
      required: true,
      initialValue: curDesignation?.title ? curDesignation?.title : "",
      className: "col-span-12",
    },
    {
      key: "3",
      label: "Level",
      name: "level",
      type: "number",
      validationSchema: Yup.number().positive().required("Required!"),
      required: true,
      initialValue: curDesignation?.level ? String(curDesignation?.level) : "",
      className: "col-span-12",
    },
  ];
  const subCategorySchemaInitialValues = subCategorySchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const subCategorySchemaValidation = subCategorySchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema | Yup.NumberSchema }
  );

  return {
    subCategorySchema,
    subCategorySchemaInitialValues,
    subCategorySchemaValidation,
  };
};

type designationValueType =
  | any
  | {
      [key: string]: string;
    };

export { subCategoryMutation };
export type { designationValueType };
