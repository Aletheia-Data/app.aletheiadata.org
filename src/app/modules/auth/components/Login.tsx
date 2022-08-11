import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as auth from "../redux/AuthRedux";
import { login } from "../redux/AuthCRUD";
import { toAbsoluteUrl } from "../../../../_start/helpers";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";

const magic = new Magic(`${process.env.REACT_APP_MAGIC_LINK_API_KEY}`, {
  network: "rinkeby",
  locale: "en_US",
  extensions: [new ConnectExtension()],
});
const web3 = new Web3(magic.rpcProvider);

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
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [netId, setNetId] = useState("");
  const [provider, setProvider] = useState("");

  console.log(`connected to provider (${provider}): ${connected}`);

  const signAuth = async () => {
    // await authenticate({ signingMessage: "Aletheia Data te dà la bienvenida" });
    // let userWallet: any = await user?.get("ethAddress");
    // console.log(isAuthenticated, user?.get("ethAddress"));
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    return new Promise((resolve) => {
      // console.log(accounts);
      resolve(accounts[0]);
    });
  };

  // init web3 if available
  const initWeb3 = async () => {
    let user: any = "";

    if (window.ethereum) {
      // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      user = await signAuth();
    } else {
      window.alert("Please install MetaMask");
      window.open("https://metamask.io/", "_blank");

      return false;
    }

    return new Promise((resolve, reject) => {
      //load balance
      if (user) {
        console.log(user);
        setConnected(true);
        setAccount(user);
        setNetId(netId);
        setProvider("metamask");
        resolve(user);
      }

      // user rejection
      setLoading(false);
      reject(false);
    });
  };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);

      const connect = (user: any) => {
        const accessToken = login(user, "metamask");
        console.log(accessToken);

        setLoading(false);
        dispatch(auth.actions.login(accessToken));
      };

      if (!account) {
        try {
          initWeb3()
            .then((user) => {
              // console.log(user);
              if (!user) {
                return "error login with Magic Connect";
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
            Accede con <strong>Magic Connect</strong>
          </div>
        </div>
      )}
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
                src={toAbsoluteUrl("/media/svg/brand-logos/icon-magic.svg")}
              />
              Sign in with Magic Connect
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
