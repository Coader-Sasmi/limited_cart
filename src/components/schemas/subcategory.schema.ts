/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

const subCategoryMutation = (curDesignation?: any, CategoryID?: any) => {
  const subCategorySchema = [
    {
      key: "1",
      label: "CategoryID",
      name: "CategoryID",
      type: "text",
      validationSchema: Yup.string().required("CategoryID Is Required").trim(),
      required: true,
      initialValue: curDesignation?.SubcategoryID ? CategoryID : CategoryID,
      className: `${"hidden"}`,
      disabled: true,
    },
    {
      key: "2",
      label: "Subcategory Name",
      name: "SubcategoryName",
      type: "text",
      validationSchema: Yup.string()
        .required("Subcategory Name Tittle Is Required")
        .trim(),
      required: true,
      initialValue: curDesignation?.SubcategoryName
        ? curDesignation?.SubcategoryName
        : "",
      className: "col-span-12",
    },
    {
      key: "3",
      label: "Subcategory Description",
      name: "SubcategoryDescription",
      type: "text",
      validationSchema: Yup.string().required("Required!"),
      required: true,
      initialValue: curDesignation?.SubcategoryDescription
        ? curDesignation?.SubcategoryDescription
        : "",
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
