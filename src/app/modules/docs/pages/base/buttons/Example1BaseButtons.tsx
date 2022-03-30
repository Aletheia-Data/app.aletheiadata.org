/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example1BaseButtons(): JSX.Element {
  const { REACT_APP_SASS_VARIABLES_PATH } = process.env;

  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="base-style">
        <a href="#base-style" />
        Base Buttons
      </h1>
      <div className="py-5">
        Use
        <code>.btn-{"{color}"}</code>class to set button base color defined with
        <code>$theme-colors</code>mapped in
        <code>{REACT_APP_SASS_VARIABLES_PATH}</code>:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-white me-2 mb-2" href="#">
            White
          </a>
          <a className="btn btn-primary me-2 mb-2" href="#">
            Primary
          </a>
          <a className="btn btn-light me-2 mb-2" href="#">
            Light
          </a>
          <a className="btn btn-secondary me-2 mb-2" href="#">
            Secondary
          </a>
          <a className="btn btn-success me-2 mb-2" href="#">
            Success
          </a>
          <a className="btn btn-info me-2 mb-2" href="#">
            Info
          </a>
          <a className="btn btn-warning me-2 mb-2" href="#">
            Warning
          </a>
          <a className="btn btn-danger me-2 mb-2" href="#">
            Danger
          </a>
          <a className="btn btn-dark me-2 mb-2" href="#">
            Dark
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-white">White</a>
<a href="#" className="btn btn-primary">Primary</a>
<a href="#" className="btn btn-light">Light</a>
<a href="#" className="btn btn-secondary">Secondary</a>
<a href="#" className="btn btn-success">Success</a>
<a href="#" className="btn btn-info">Info</a>
<a href="#" className="btn btn-warning">Warning</a>
<a href="#" className="btn btn-danger">Danger</a>
<a href="#" className="btn btn-dark">Dark</a>`;
