/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { CustomLoadingButton, InputField } from "@/components/core";

import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import useMutation from "../hooks/useMutation";
import {
  designationValueType,
  formikProps,
  subCategoryMutation,
} from "../schemas";
import errorHelper from "../utils/error";

export default function AddUpdateDesignation({
  curSubCategory,
  mutate,
  subCategoryModelClose,
  categoryID,
}: {
  curSubCategory?: any;
  categoryID?: any;
  mutate?: () => void;
  subCategoryModelClose?: () => void;
}) {
  console.log(curSubCategory);
  const { mutation, isLoading } = useMutation();
  const ID = curSubCategory?.SubcategoryID;

  const {
    subCategorySchema,
    subCategorySchemaInitialValues,
    subCategorySchemaValidation,
  } = subCategoryMutation(curSubCategory, categoryID);

  const handleDesignationOperation = async (
    values: designationValueType,
    props: formikProps
  ) => {
    try {
      let res: any;
      const data: any = { ...values };
      if (ID) {
        res = await mutation(`update-subcategories/${ID}`, {
          method: "PUT",
          isAlert: true,
          body: {
            ...data,
          },
        });
      } else {
        res = await mutation(`add-subcategories`, {
          method: "POST",
          isAlert: true,
          body: {
            ...values,
          },
        });
      }
      console.log(res);
      if (res?.status === 201) {
        subCategoryModelClose && subCategoryModelClose();
        mutate && mutate();
        props.resetForm();
      }
    } catch (error: unknown) {
      errorHelper(error);
    }
  };

  return (
    <section className="p-5 w-full bg-white flex flex-col gap-5">
      <h1 className="graph-title w-full text-center">
        {curSubCategory?.title ? "Update" : "Create"} Sub Category
      </h1>
      <Formik
        initialValues={subCategorySchemaInitialValues}
        validationSchema={Yup.object(subCategorySchemaValidation)}
        onSubmit={handleDesignationOperation}
        enableReinitialize={curSubCategory?.title ? true : false}
      >
        {(formik) => (
          <Form className="w-full grid grid-cols-12 gap-2 md:gap-4">
            {subCategorySchema.map((inputItem) => (
              <Field name={inputItem.name} key={inputItem.key}>
                {(props: FieldProps<string>) => (
                  <div
                    className={`flex flex-col justify-center gap-2 ${inputItem.className}`}
                  >
                    <div className="font-semibold text-themeDarkGray">
                      {inputItem.label}{" "}
                      <span className="poppins">
                        {inputItem?.required ? "*" : ""}
                      </span>
                    </div>
                    <InputField
                      fullWidth
                      key={inputItem?.key}
                      name={inputItem?.name}
                      type={inputItem?.type}
                      disabled={inputItem?.disabled}
                      value={formik?.values[inputItem?.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]
                      )}
                      helperText={
                        formik?.touched[inputItem?.name] &&
                        formik?.errors[inputItem?.name]
                      }
                    />
                  </div>
                )}
              </Field>
            ))}
            <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
              <CustomLoadingButton
                title={
                  curSubCategory?.title
                    ? "Update Sub Category"
                    : "Add Sub Category"
                }
                loading={isLoading}
                type="submit"
                className="btn-primary py-3 rounded-md w-full"
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
