/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { Ktsvg } from "../../helpers";
import config from "../../../setup/config";

export type Props = {
  show: boolean;
  handleClose: () => void;
};

const InboxCompose: React.FC<Props> = ({ show, handleClose }) => {
  const composeToRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [composeCC, setComposeCC] = useState("");
  const [composeBCC, setComposeBCC] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!subject || !message) { return }
    setLoading(!loading);
    formRef.current?.submit()
  }

  return (
    <Modal
      className="modal-sticky modal-sticky-lg modal-sticky-bottom-right"
      id="kt_inbox_compose"
      role="dialog"
      data-backdrop="false"
      aria-hidden="true"
      tabIndex="-1"
      show={show}
      animation={false}
    >
      <div className="modal-content">
        {/* begin::Form */}
        <form
          ref={formRef}
          id="kt_inbox_compose_form"
          action="https://api.web3forms.com/submit" method="POST"
        >
          <input type="hidden" name="apikey" value={process.env.REACT_APP_WEB3_FORMS_API_KEY}></input>
          <input type="checkbox" name="botcheck" id="" style={{display: 'none'}}></input>
          {/*begin::Header*/}
          <div className="d-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-bottom">
            <h5 className="fw-bold m-0">Escríbenos</h5>
            <div className="d-flex ms-2">
              {/*begin::Close*/}
              <div
                className="btn btn-icon btn-sm btn-light-primary ms-2"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                <Ktsvg
                  className="svg-icon-1"
                  path="/media/icons/duotone/Navigation/Close.svg"
                />
              </div>
              {/*end::Close*/}
            </div>
          </div>
          {/*end::Header*/}

          {/*begin::Body*/}
          <div className="d-block">
            {/*begin::To*/}
            <div className="d-flex align-items-center border-bottom inbox-to px-8 min-h-45px">
              <div className="text-gray-600 w-75px">To:</div>
              <div className="d-flex align-items-center flex-grow-1">
                <input
                  type="text"
                  className="form-control border-0"
                  name="compose_to"
                  ref={composeToRef}
                  disabled={true}
                  value={config.brand.dashboardEmail}
                  required
                />
              </div>
              {/**
               * <div className="ms-2">
                <span
                  className="text-muted fw-bold cursor-pointer text-hover-primary me-2"
                  data-inbox="cc-show"
                >
                  Cc
                </span>
                <span
                  className="text-muted fw-bold cursor-pointer text-hover-primary"
                  data-inbox="bcc-show"
                >
                  Bcc
                </span>
              </div>
               */}
            </div>
            {/*end::To*/}

            {/*begin::Subject*/}
            <div className="border-bottom">
              <input
                className="form-control border-0 px-8 min-h-45px"
                name="compose_subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            {/*end::Subject*/}

            {/*begin::Subject*/}
            <div className="border-bottom">
              <textarea
                className="form-control border-0 px-8 min-h-200px"
                name="compose_message"
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
            {/*end::Subject*/}
          </div>
          {/*end::Body*/}

          {/*begin::Footer*/}
          <div className="d-flex align-items-center justify-content-between py-5 ps-8 pe-5 border-top">
            {/*begin::Actions*/}
            <div className="d-flex align-items-center me-3">
              {/*begin::Send*/}
              <button className="btn btn-primary me-4 px-6" type="submit" disabled={loading} onClick={submit}>Send</button>
              {
                loading &&
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Please wait...{" "}
                  <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
              }
              {/*end::Send*/}

              {/*begin::Other
              <a
                href="#"
                className="btn btn-icon btn-active-light-primary me-2"
                id="kt_inbox_compose_attachments_select"
              >
                <Ktsvg
                  className="svg-icon-1"
                  path="/media/icons/duotone/Files/Cloud-upload.svg"
                />
              </a>
              */}
              {/*end::Other*/}
            </div>
            {/*end::Actions*/}
          </div>
          {/*end::Footer*/}
        </form>
        {/*end::Form*/}
      </div>
    </Modal>
  );
};

export { InboxCompose };
