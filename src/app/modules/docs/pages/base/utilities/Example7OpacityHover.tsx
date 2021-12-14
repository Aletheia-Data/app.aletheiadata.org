/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example7OpacityHover() {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="Example7OpacityHover">
        <a href="#Example7OpacityHover"></a>Opacity Hover
      </h1>

      <div className="py-5">
        Use
        <code>.opacity-{`{0, 5, 10, 15, 20, 25, 50, 75, 100}`}-hover</code>
        &nbsp;class to set an element's opacity on hover:
      </div>
      <div className="py-5">
        <div className="rounded border p-10 d-flex flex-wrap">
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-0-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-0-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-5-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-5-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-10-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-10-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-15-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-15-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-20-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-20-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-25-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-25-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-50-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-50-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-75-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-75-hover</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-100px h-100px opacity-100 opacity-100-hover bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-100-hover</div>
          </div>
        </div>
      </div>
      <CodeBlock language="markup" code={code} />
    </div>
  );
}

const code = `<div className="opacity-hover-0"></div>
<div className="opacity-hover-5"></div>
<div className="opacity-hover-10"></div>
<div className="opacity-hover-15"></div>
<div className="opacity-hover-20"></div>
<div className="opacity-hover-25"></div>
<div className="opacity-hover-50"></div>
<div className="opacity-hover-75"></div>
<div className="opacity-hover-100"></div>`;
