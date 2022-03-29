/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example3BackgroundStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="bg-style">
        <a href="#bg-style" />
        Background Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-bg-{`{color}`}</code>
        class to set a button&apos;s background color only without hover or
        active states:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-bg-white text-inverse-white me-2 mb-2" href="#">
            White
          </a>
          <a
            className="btn btn-bg-primary text-inverse-primary me-2 mb-2"
            href="#"
          >
            Primary
          </a>
          <a className="btn btn-bg-light text-inverse-light me-2 mb-2" href="#">
            Light
          </a>
          <a
            className="btn btn-bg-secondary text-inverse-secondary me-2 mb-2"
            href="#"
          >
            Secondary
          </a>
          <a
            className="btn btn-bg-success text-inverse-success me-2 mb-2"
            href="#"
          >
            Success
          </a>
          <a className="btn btn-bg-info text-inverse-info me-2 mb-2" href="#">
            Info
          </a>
          <a
            className="btn btn-bg-warning text-inverse-warning me-2 mb-2"
            href="#"
          >
            Warning
          </a>
          <a
            className="btn btn-bg-danger text-inverse-danger me-2 mb-2"
            href="#"
          >
            Danger
          </a>
          <a className="btn btn-bg-dark text-inverse-dark me-2 mb-2" href="#">
            Dark
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-bg-white">White</a>
<a href="#" className="btn btn-bg-primary">Primary</a>
<a href="#" className="btn btn-bg-light">Light</a>
<a href="#" className="btn btn-bg-secondary">Secondary</a>
<a href="#" className="btn btn-bg-success">Success</a>
<a href="#" className="btn btn-bg-info">Info</a>
<a href="#" className="btn btn-bg-warning">Warning</a>
<a href="#" className="btn btn-bg-danger">Danger</a>
<a href="#" className="btn btn-bg-dark">Dark</a>`;
