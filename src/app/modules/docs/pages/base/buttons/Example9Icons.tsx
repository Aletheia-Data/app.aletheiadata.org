/* eslint-disable no-unreachable */
import React from "react";
import { Link } from "react-router-dom";
import { Ktsvg } from "../../../../../../_start/helpers";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example9Icons(): JSX.Element {
  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="icons">
          <a href="#icons" />
          Icons
        </h1>
        <div className="py-5">
          Use{" "}
          <a
            className="fw-bold"
            href="/themes/start/html/dist/?page=documentation/general/icons/duotone"
          >
            Duotone Svg Icons
          </a>
          &nbsp;in conbination with buttons as shown below:
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <a className="btn btn-primary me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />{" "}
              Caption
            </a>

            <a className="btn btn-info me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />{" "}
              Caption
            </a>
            <a className="btn btn-warning me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />{" "}
              Caption
            </a>
            <a className="btn btn-danger me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />{" "}
              Caption
            </a>
            <a className="btn btn-dark me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />{" "}
              Caption
            </a>
            <div className="separator my-10" />
            <a className="btn btn-icon btn-primary me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
            <a className="btn btn-icon btn-success me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
            <a className="btn btn-icon btn-info me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
            <a className="btn btn-icon btn-warning me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
            <a className="btn btn-icon btn-danger me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
            <a className="btn btn-icon btn-dark me-2 mb-2" href="#">
              <Ktsvg
                className="svg-icon svg-icon-1"
                path="/media/icons/duotone/Shopping/Chart-bar3.svg"
              />
            </a>
          </div>
        </div>
        <CodeBlock code={code} language="markup" />
      </div>
      <div className="pt-5 pb-20">
        <div className="py-5">
          Use{` `}
          <Link className="fw-bold" to="/docs/icons/bootstrap">
            Bootstrap Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>
        <div className="py-5">
          <div className="rounded border p-10">
            <a className="btn btn-primary me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-success me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-info me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-warning me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-danger me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-dark me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4 me-2" />
              Caption
            </a>
            <div className="separator my-10" />
            <a className="btn btn-icon btn-primary me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
            <a className="btn btn-icon btn-success me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
            <a className="btn btn-icon btn-info me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
            <a className="btn btn-icon btn-warning me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
            <a className="btn btn-icon btn-danger me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
            <a className="btn btn-icon btn-dark me-2 mb-2" href="#">
              <i className="bi bi-chat-square-text-fill fs-4" />
            </a>
          </div>
        </div>
        <CodeBlock code={code2} language="markup" />
      </div>

      <div className="pt-5 pb-20">
        <div className="py-5">
          Use{" "}
          <Link className="fw-bold" to="/docs/icons/fontawesome">
            Font Awesome Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>
        <div className="py-5">
          <div className="rounded border p-10">
            <a className="btn btn-primary me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-success me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-info me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-warning me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-danger me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <a className="btn btn-dark me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4 me-2" />
              Caption
            </a>
            <div className="separator my-10" />
            <a className="btn btn-icon btn-primary me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
            <a className="btn btn-icon btn-success me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
            <a className="btn btn-icon btn-info me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
            <a className="btn btn-icon btn-warning me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
            <a className="btn btn-icon btn-danger me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
            <a className="btn btn-icon btn-dark me-2 mb-2" href="#">
              <i className="fas fa-envelope-open-text fs-4" />
            </a>
          </div>
        </div>
        <CodeBlock code={code3} language="markup" />
      </div>

      <div className="pt-5 pb-20">
        <div className="py-5">
          Use{" "}
          <Link className="fw-bold" to="/docs/icons/lineawesome">
            Line Awesome Icons
          </Link>
          &nbsp;in conbination with buttons as shown below:
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <a className="btn btn-primary me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <a className="btn btn-success me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <a className="btn btn-info me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <a className="btn btn-warning me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <a className="btn btn-danger me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <a className="btn btn-dark me-2 mb-2" href="#">
              <i className="las la-wallet fs-2 me-2" />
              Caption
            </a>
            <div className="separator my-10" />
            <a className="btn btn-icon btn-primary me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
            <a className="btn btn-icon btn-success me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
            <a className="btn btn-icon btn-info me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
            <a className="btn btn-icon btn-warning me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
            <a className="btn btn-icon btn-danger me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
            <a className="btn btn-icon btn-dark me-2 mb-2" href="#">
              <i className="las la-wallet fs-2" />
            </a>
          </div>
        </div>

        <CodeBlock code={code4} language="markup" />
      </div>
    </>
  );
}

const code = `<a href="#" className="btn btn-primary"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-success"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-info"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-warning"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-danger"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>
<a href="#" className="btn btn-dark"><span className="svg-icon svg-icon-1"><svg>...</svg></span>Caption</a>

<a href="#" className="btn btn-icon btn-primary"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-success"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-info"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-warning"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-danger"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>
<a href="#" className="btn btn-icon btn-dark"><span className="svg-icon svg-icon-1"><svg>...</svg></span></a>`;

const code2 = `<a href="#" className="btn btn-primary"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-success"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-info"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-warning"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-danger"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-dark"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="bi bi-chat-square-text-fill fs-4 me-2"></i></a>`;

const code3 = `<a href="#" className="btn btn-primary"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-success"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-info"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-warning"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-danger"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>
<a href="#" className="btn btn-dark"><i className="fas fa-envelope-open-text fs-4 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="fas fa-envelope-open-text fs-4 me-2"></i></a>`;

const code4 = `<a href="#" className="btn btn-icon btn-primary"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-success"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-info"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-warning"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-danger"><i className="las la-wallet fs-2 me-2"></i> Caption</a>
<a href="#" className="btn btn-icon btn-dark"><i className="las la-wallet fs-2 me-2"></i> Caption</a>

<a href="#" className="btn btn-icon btn-primary"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-success"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-info"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-warning"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-danger"><i className="las la-wallet fs-2 me-2"></i></a>
<a href="#" className="btn btn-icon btn-dark"><i className="las la-wallet fs-2 me-2"></i></a>`;
