/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example6ActiveStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="active-style">
        <a href="#active-style" />
        Active Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-active-{"{color}"}</code>
        class to set a button&apos;s color for active &amp; hover states only:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-active-white me-2 mb-2" href="#">
            White
          </a>
          <a className="btn btn-active-primary me-2 mb-2" href="#">
            Primary
          </a>
          <a className="btn btn-active-light me-2 mb-2" href="#">
            Light
          </a>
          <a className="btn btn-active-secondary me-2 mb-2" href="#">
            Secondary
          </a>
          <a className="btn btn-active-success me-2 mb-2" href="#">
            Success
          </a>
          <a className="btn btn-active-info me-2 mb-2" href="#">
            Info
          </a>
          <a className="btn btn-active-warning me-2 mb-2" href="#">
            Warning
          </a>
          <a className="btn btn-active-danger me-2 mb-2" href="#">
            Danger
          </a>
          <a className="btn btn-active-dark me-2 mb-2" href="#">
            Dark
          </a>
        </div>
      </div>

      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-active-white">White</a>
<a href="#" className="btn btn-active-primary">Primary</a>
<a href="#" className="btn btn-active-light">Light</a>
<a href="#" className="btn btn-active-secondary">Secondary</a>
<a href="#" className="btn btn-active-success">Success</a>
<a href="#" className="btn btn-active-info">Info</a>
<a href="#" className="btn btn-active-warning">Warning</a>
<a href="#" className="btn btn-active-danger">Danger</a>
<a href="#" className="btn btn-active-dark">Dark</a>`;
