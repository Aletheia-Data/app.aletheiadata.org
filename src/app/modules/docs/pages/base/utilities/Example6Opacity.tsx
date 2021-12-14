/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example6Opacity() {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="opacity">
        <a href="#active-style"></a>Opacity
      </h1>
      <div className="py-5">
        Use
        <code>.opacity-{`{0, 5, 10, 15, 20, 25, 50, 75, 100}`}</code>
        &nbsp;class to set an element's opacity:
      </div>
      <div className="py-5">
        <div className="rounded border p-10 d-flex flex-wrap">
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-0 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-0</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-5 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-5</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-10 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-10</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-15 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-15</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-20 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-20</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-25 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-25</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-50 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-50</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-75 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-75</div>
          </div>
          <div className="d-flex flex-column me-5 mb-5">
            <div className="w-90px h-90px opacity-100 bg-dark flex-grow-1"></div>
            <div className="fw-bold py-2">opacity-100</div>
          </div>
        </div>
      </div>
      <CodeBlock language="markup" code={code} />
    </div>
  );
}

const code = `<div className="opacity-0"></div>
<div className="opacity-5"></div>
<div className="opacity-10"></div>
<div className="opacity-15"></div>
<div className="opacity-20"></div>
<div className="opacity-25"></div>
<div className="opacity-50"></div>
<div className="opacity-75"></div>
<div className="opacity-100"></div>`;
