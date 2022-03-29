/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example8ActiveColorStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="active-style-color">
        <a href="#active-style-color" />
        Active Color Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-active-color-{"{color}"}</code>
        class to set a button&apos;s text and icon colors for active and hover
        states only:
      </div>

      <div className="py-5">
        <div className="rounded border p-10">
          <a
            className="btn btn-bg-light btn-active-color-primary me-2 mb-2"
            href="#"
          >
            Primary
          </a>
          <a
            className="btn btn-bg-light btn-active-color-success me-2 mb-2"
            href="#"
          >
            Success
          </a>
          <a
            className="btn btn-bg-light btn-active-color-info me-2 mb-2"
            href="#"
          >
            Info
          </a>
          <a
            className="btn btn-bg-light btn-active-color-warning me-2 mb-2"
            href="#"
          >
            Warning
          </a>
          <a
            className="btn btn-bg-light btn-active-color-danger me-2 mb-2"
            href="#"
          >
            Danger
          </a>
          <a
            className="btn btn-bg-light btn-active-color-dark me-2 mb-2"
            href="#"
          >
            Dark
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-bg-light btn-active-color-primary">Primary</a>
<a href="#" className="btn btn-bg-light btn-active-color-success">Success</a>
<a href="#" className="btn btn-bg-light btn-active-color-info">Info</a>
<a href="#" className="btn btn-bg-light btn-active-color-warning">Warning</a>
<a href="#" className="btn btn-bg-light btn-active-color-danger">Danger</a>
<a href="#" className="btn btn-bg-light btn-active-color-dark">Dark</a>`;
