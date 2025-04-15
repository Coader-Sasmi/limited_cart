/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { CustomLoadingButton, InputField } from "../core";
import useMutation from "../hooks/useMutation";
import {
  departmentMutation,
  departmentValueType,
  formikProps,
} from "../schemas";
import errorHelper from "../utils/error";

const AddUpdateCategoryDialog = ({
  curDepartment,
  mutate,
  setDepartMentModel,
}: {
  setDepartMentModel: Dispatch<SetStateAction<boolean>>;
  curDepartment?: any;
  mutate?: () => void;
}) => {
  const {
    departmentSchema,
    departmentSchemaInitialValues,
    departmentSchemaValidation,
  } = departmentMutation(curDepartment);
  const { mutation, isLoading } = useMutation();

  const handleDepartmentOperation = async (
    values: departmentValueType,
    props: formikProps
  ) => {
    try {
      let res: any;
      if (curDepartment?.CategoryID) {
        res = await mutation(`update-category/${curDepartment?.CategoryID}`, {
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
        setDepartMentModel(false);
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
        {curDepartment?.title ? "Update" : "Create"} Department
      </h1>
      <Formik
        initialValues={departmentSchemaInitialValues}
        validationSchema={Yup.object(departmentSchemaValidation)}
        onSubmit={handleDepartmentOperation}
        enableReinitialize={curDepartment?.title ? true : false}
      >
        {(formik) => (
          <Form className="w-full grid grid-cols-12 gap-2 md:gap-4">
            {departmentSchema.map((inputItem) => (
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
                  curDepartment?.CategoryID ? "Update Category" : "Add Category"
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
