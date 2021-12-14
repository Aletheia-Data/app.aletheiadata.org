import React, { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { requestPassword } from "../redux/AuthCRUD";

const initialValues = {
  email: "admin@demo.com",
};

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
});

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setHasErrors(undefined);
      setTimeout(() => {
        requestPassword(values.email)
          .then(({ data: { result } }) => {
            setHasErrors(false);
            setLoading(false);
          })
          .catch(() => {
            setHasErrors(true);
            setLoading(false);
            setSubmitting(false);
            setStatus("The login detail is incorrect");
          });
      }, 1000);
    },
  });

  return (
    <>
      <form
        className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        noValidate
        id="kt_login_password_reset_form"
        onSubmit={formik.handleSubmit}
      >
        <div className="pb-5 pb-lg-10">
          <h3 className="fw-bolder text-dark display-6">
            Forgotten Password ?
          </h3>
          <p className="text-muted fw-bold fs-3">
            Enter your email to reset your password
          </p>
        </div>

        {/* begin::Title */}
        {hasErrors === true && (
          <div className="mb-lg-15 alert alert-danger">
            <div className="alert-text font-weight-bold">
              Sorry, looks like there are some errors detected, please try
              again.
            </div>
          </div>
        )}

        {hasErrors === false && (
          <div className="mb-lg-15 alert alert-info">
            <div className="alert-text ">
              Sent password reset. Please check your email
            </div>
          </div>
        )}
        {/* end::Title */}

        {/* begin::Form group */}
        <div className="fv-row mb-10">
          <label className="form-label fs-6 fw-bolder text-dark pt-5">
            Email
          </label>
          <input
            type="email"
            placeholder=""
            autoComplete="off"
            {...formik.getFieldProps("email")}
            className={clsx(
              "form-control form-control-lg form-control-solid",
              { "is-invalid": formik.touched.email && formik.errors.email },
              {
                "is-valid": formik.touched.email && !formik.errors.email,
              }
            )}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className="d-flex flex-wrap pb-lg-0">
          <button
            type="submit"
            id="kt_login_password_reset_form_submit_button"
            className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4"
          >
            Submit
          </button>
          <Link to="/auth/login">
            <button
              type="button"
              id="kt_login_password_reset_form_cancel_button"
              className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Cancel
            </button>
          </Link>{" "}
          {loading && (
            <span
              className="spinner-border text-primary ms-3 mt-6"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
          )}
        </div>
        {/* end::Form group */}
      </form>
    </>
  );
}
