/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { CustomLoadingButton, InputField } from "../core";
import useMutation from "../hooks/useMutation";
import { categoryMutation, departmentValueType, formikProps } from "../schemas";
import errorHelper from "../utils/error";

const AddUpdateCategoryDialog = ({
  curCategory,
  mutate,
  setCategoryModel,
}: {
  setCategoryModel: Dispatch<SetStateAction<boolean>>;
  curCategory?: any;
  mutate?: () => void;
}) => {
  const {
    categorySchema,
    categorySchemaInitialValues,
    categorySchemaValidation,
  } = categoryMutation(curCategory);
  const { mutation, isLoading } = useMutation();

  const handleDepartmentOperation = async (
    values: departmentValueType,
    props: formikProps
  ) => {
    try {
      let res: any;
      if (curCategory?.CategoryID) {
        res = await mutation(`update-category/${curCategory?.CategoryID}`, {
          method: "PUT",
          isAlert: true,
          body: {
            ...values,
          },
        });
      } else {
        res = await mutation(`add-category`, {
          method: "POST",
          isAlert: true,
          body: {
            ...values,
          },
        });
      }
      // console.log(res?.status === 201);
      if (res?.status === 201) {
        setCategoryModel(false);
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
        {curCategory?.CategoryID ? "Update" : "Create"} Category
      </h1>
      <Formik
        initialValues={categorySchemaInitialValues}
        validationSchema={Yup.object(categorySchemaValidation)}
        onSubmit={handleDepartmentOperation}
        enableReinitialize={curCategory?.title ? true : false}
      >
        {(formik) => (
          <Form className="w-full grid grid-cols-12 gap-2 md:gap-4">
            {categorySchema.map((inputItem) => (
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
                      placeholder={inputItem?.type === "select" ? "Select" : ""}
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
                  curCategory?.CategoryID ? "Update Category" : "Add Category"
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
};
export default AddUpdateCategoryDialog;
