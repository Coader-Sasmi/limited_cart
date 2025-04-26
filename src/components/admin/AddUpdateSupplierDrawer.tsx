/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { CustomLoadingButton, InputField } from "../core";
import useMutation from "../hooks/useMutation";
import { departmentValueType, formikProps, supplierMutation } from "../schemas";
import errorHelper from "../utils/error";

const AddUpdateSupplierDrawer = ({
  curSupplier,
  mutate,
  setOpenAddUpdateSupplierDrawer,
}: {
  setOpenAddUpdateSupplierDrawer: Dispatch<SetStateAction<boolean>>;
  curSupplier?: any;
  mutate?: () => void;
}) => {
  const {
    supplierSchema,
    supplierSchemaInitialValues,
    supplierSchemaValidation,
  } = supplierMutation(curSupplier);
  const { mutation, isLoading } = useMutation();

  const handleDepartmentOperation = async (
    values: departmentValueType,
    props: formikProps
  ) => {
    try {
      let res: any;
      if (curSupplier?.supplierID) {
        res = await mutation(`update-supplier/${curSupplier?.supplierID}`, {
          method: "PUT",
          isAlert: true,
          body: {
            ...values,
          },
        });
      } else {
        res = await mutation(`add-supplier`, {
          method: "POST",
          isAlert: true,
          body: {
            ...values,
          },
        });
      }
      console.log(res);
      if (res?.status === 201) {
        setOpenAddUpdateSupplierDrawer(false);
        mutate && mutate();
        props.resetForm();
      }
    } catch (error: unknown) {
      errorHelper(error);
    }
  };

  return (
    <section className="p-5 w-full bg-white flex flex-col gap-5">
      <h1 className="graph-title w-full text-center text-xl font-semibold">
        {curSupplier?.supplierID ? "Update" : "Create"} Supplier
      </h1>
      <Formik
        initialValues={supplierSchemaInitialValues}
        validationSchema={Yup.object(supplierSchemaValidation)}
        onSubmit={handleDepartmentOperation}
        enableReinitialize={curSupplier?.title ? true : false}
      >
        {(formik) => (
          <Form className="w-full grid grid-cols-12 gap-2">
            {supplierSchema.map((inputItem) => (
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
                      multiline={inputItem?.multiline}
                      placeholder={inputItem?.type === "select" ? "Select" : ""}
                      value={formik?.values[inputItem?.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows={inputItem?.rows}
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
                  curSupplier?.supplierID ? "Update Supplier" : "Add Supplier"
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
export default AddUpdateSupplierDrawer;
