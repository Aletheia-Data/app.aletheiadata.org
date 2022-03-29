import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
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

export function Login(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [netId, setNetId] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [provider, setProvider] = useState("");

  const signAuth = async () => {
    return new Promise(async (resolve) => {
      // await authenticate({ signingMessage: "Aletheia Data te dà la bienvenida" });
      // let userWallet: any = await user?.get("ethAddress");
      // console.log(isAuthenticated, user?.get("ethAddress"));
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log(accounts);
      resolve(accounts[0]);
    });
  };

  // init web3 if available
  const initWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const user: any = await signAuth();

        //load balance
        if (user) {
          setConnected(true);
          setAccount(user);
          setNetId(netId);
          setProvider("metamask");

          resolve(user);
        }

        // user rejection
        setLoading(false);
        reject(false);
      } else {
        window.alert("Please install MetaMask");
        window.open("https://metamask.io/", "_blank");
        reject(false);
      }
    });
  };

  useEffect(() => {
    // initWeb3();
  }, []);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);

      const connect = (user: any) => {
        const accessToken = login(user, "metamask");
        setLoading(false);
        dispatch(auth.actions.login(accessToken));
      };

      if (!account) {
        try {
          initWeb3()
            .then((user) => {
              console.log(user);
              if (!user) {
                return "error login with metamask";
              }

              connect(user);
              setLoading(false);
              setSubmitting(false);
            })
            .catch((error) => {
              setLoading(false);
              setSubmitting(false);
              throw error;
            });
        } catch (error) {
          setLoading(false);
          setSubmitting(false);
          throw error;
        }
      }
    },
  });

  return (
    <form
      noValidate
      className="form w-100"
      id="kt_login_signin_form"
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Aside Logo */}
      <div
        style={{
          borderRadius: "10px",
          display: "flex",
          width: "60px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <img
          alt="Logo"
          className="h-75px"
          src={toAbsoluteUrl("/media/logos/logo-compact.png")}
        />
      </div>
      {/* end::Aside Logo */}

      {/* begin::Title */}
      <div className="pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">Bienvenido</h3>
        <div className="text-muted fw-bold fs-3">
          ¿Nuevo aquí?{" "}
          <Link
            className="text-primary fw-bolder" // "/auth/registration"
            id="kt_login_signin_form_singup_button"
            to="#"
          >
            Accede a nuestra Dashboard
          </Link>
        </div>
      </div>
      {/* begin::Title */}

      {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : (
        <div className="mb-lg-15 alert alert-info">
          <div className="alert-text ">
            Accede con <strong>Metamask</strong>
          </div>
        </div>
      )}

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
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
          disabled={formik.isSubmitting || !formik.isValid}
          id="kt_login_signin_form_submit_button"
          type="submit"
        >
          {!loading && (
            <span className="indicator-label">
              <img
                alt=""
                className="w-20px h-20px me-3"
                src={toAbsoluteUrl("/media/svg/brand-logos/metamask.svg")}
              />
              Sign in with Metamask
            </span>
          )}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  );
}
