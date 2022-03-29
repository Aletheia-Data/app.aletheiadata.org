/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example7ActiveLightStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="Example7ActiveLightStyle">
        <a href="#Example7ActiveLightStyle" />
        Active Light Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-active-light-{"{color}"}</code>
        class to set a button&apos;s light color for active &amp; hover states
        only:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-active-light-primary me-2 mb-2" href="#">
            Primary
          </a>
          <a className="btn btn-active-light-success me-2 mb-2" href="#">
            Success
          </a>
          <a className="btn btn-active-light-info me-2 mb-2" href="#">
            Info
          </a>
          <a className="btn btn-active-light-warning me-2 mb-2" href="#">
            Warning
          </a>
          <a className="btn btn-active-light-danger me-2 mb-2" href="#">
            Danger
          </a>
          <a className="btn btn-active-light-dark me-2 mb-2" href="#">
            Dark
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-active-light-primary">Primary</a>
<a href="#" className="btn btn-active-light-success">Success</a>
<a href="#" className="btn btn-active-light-info">Info</a>
<a href="#" className="btn btn-active-light-warning">Warning</a>
<a href="#" className="btn btn-active-light-danger">Danger</a>
<a href="#" className="btn btn-active-light-dark">Dark</a>`;
