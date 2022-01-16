import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import clsx from "clsx";
import Web3 from 'web3';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as auth from "../redux/AuthRedux";
import { login } from "../redux/AuthCRUD";
import { toAbsoluteUrl } from "../../../../_start/helpers";

const loginSchema = Yup.object().shape({
  account: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  provider: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  account: "none",
  provider: "metamask",
};

declare let window: any;

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {

  const web3 = new Web3(window.ethereum);

  let [connected, setConnected] = useState(false);
  let [account, setAccount] = useState('');
  let [netId, setNetId] = useState('');
  let [provider, setProvider] = useState('');

  // init web3 if available
  const initWeb3 = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //load balance
        if (accounts[0] && typeof accounts[0] !== 'undefined') {

          setConnected(true);
          setAccount(accounts[0]);
          setNetId(netId);
          setProvider('metamask');

          return accounts[0];

        } else {
          window.alert('Please login with MetaMask');
          throw false;
        }

        //load contracts
        /*
        TODO: create contracts for uploads' credit
        */
      } catch (error: any) {
        if (error.code === 4001) {
          // User rejected request
          throw false;
        }
      }
    } else {
      window.alert('Please install MetaMask');
      window.open('https://metamask.io/', '_blank');
      throw false;
    }
  }

  useEffect(() => {
    // initWeb3();
  }, [])

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {

      setLoading(true);

      const connect = (user: string) => {
        let accessToken = login(user, 'metamask');
        setLoading(false);
        dispatch(auth.actions.login(accessToken));
      }

      if (!account) {
        initWeb3().then(user => {
          connect(user);
        })
        setLoading(false);
        setSubmitting(false);
        // setStatus("Please login with MetaMask");
        return;
      } else {
        initWeb3().then(user => {
          connect(user);
        });
        setLoading(false);
      }

    },
  });

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >

      {/* begin::Aside Logo */}
      <div style={{
        borderRadius: '10px',
        display: 'flex',
        width: '60px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <img
          alt="Logo"
          src={toAbsoluteUrl("/media/logos/logo-compact.png")}
          className="h-75px"
        />
      </div>
      {/* end::Aside Logo */}

      {/* begin::Title */}
      <div className="pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">Bienvenido</h3>
        <div className="text-muted fw-bold fs-3">
          ¿Nuevo aquí?{" "}
          <Link
            to="#" // "/auth/registration"
            className="text-primary fw-bolder"
            id="kt_login_signin_form_singup_button"
          >
            Accede a nuestra Dashboard
          </Link>
        </div>
      </div>
      {/* begin::Title */}

      {
        formik.status ? (
          <div className="mb-lg-15 alert alert-danger">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-lg-15 alert alert-info">
            <div className="alert-text ">
              Accede con <strong>Metamask</strong>
            </div>
          </div>
        )
      }

      {/* begin::Form group 
      <div className="v-row mb-10 fv-plugins-icon-container">
        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
        <input
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.email}</div>
          </div>
        )}
      </div>
      */}
      {/* end::Form group */}

      {/* begin::Form group 
      <div className="fv-row mb-10 fv-plugins-icon-container">
        <div className="d-flex justify-content-between mt-n5">
          <label className="form-label fs-6 fw-bolder text-dark pt-5">
            Password
          </label>

          <Link
            to="/auth/forgot-password"
            className="text-primary fs-6 fw-bolder text-hover-primary pt-5"
            id="kt_login_signin_form_password_reset_button"
          >
            Forgot Password ?
          </Link>
        </div>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.password}</div>
          </div>
        )}
      </div>
      */}
      {/* end::Form group */}

      {/* begin::Action */}
      <div className="pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signin_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">
            <img
              src={toAbsoluteUrl("/media/svg/brand-logos/metamask.svg")}
              className="w-20px h-20px me-3"
              alt=""
            />
            Sign in with Metamask
          </span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  );
}
