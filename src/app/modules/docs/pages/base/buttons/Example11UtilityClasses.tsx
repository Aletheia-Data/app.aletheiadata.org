/* eslint-disable no-unreachable */
import React from "react";
import { Ktsvg } from "../../../../../../_start/helpers";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example11UtilityClasses(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="utility-classes">
        <a href="#utility-classes" />
        Utility Classes
      </h1>
      <div className="py-5">
        Use
        <code>.btn-flush</code>class to remove paddings, borders, background and
        rounded corners:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-flush" href="#">
            Flushed button
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
      <div className="pt-10 pb-5">
        Use
        <code>.btn-flex</code>class to vertically center button inner elements
        with
        <code>display: inline-flex</code>and
        <code>align-items: center</code>:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-flex btn-primary px-6" href="#">
            <Ktsvg
              className="svg-icon svg-icon-2x"
              path="/media/icons/duotone/Shopping/Chart-bar3.svg"
            />

            <span className="d-flex flex-column align-items-start ms-2">
              <span className="fs-3 fw-bolder">Caption</span>
              <span className="fs-7">Some description</span>
            </span>
          </a>
        </div>
      </div>
      <CodeBlock code={code2} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-flush">Flushed button</a>`;
const code2 = `<a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><svg>...</svg></span>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">Caption</span>
      <span className="fs-7">Some description</span>
  </span>
</a>`;
