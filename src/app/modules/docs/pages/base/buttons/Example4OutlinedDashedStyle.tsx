/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example4OutlinedDashedStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="Outline-Dashed-Style">
        <a href="#Outline-Dashed-Style" />
        Outline Dashed Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-outline</code>and
        <code>.btn-outline-dashed</code>classes with the standard outline theme
        color
        <code>.btn-outline-`color`</code>and
        <code>.btn-active-light-`color`</code>classes to have a button with
        outline dashed border style:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2"
            href="#"
          >
            Default
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary me-2 mb-2"
            href="#"
          >
            Primary
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-success btn-active-light-success me-2 mb-2"
            href="#"
          >
            Success
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-info btn-active-light-info me-2 mb-2"
            href="#"
          >
            Info
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-warning btn-active-light-warning me-2 mb-2"
            href="#"
          >
            Warning
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-danger btn-active-light-danger me-2 mb-2"
            href="#"
          >
            Danger
          </a>
          <a
            className="btn btn-outline btn-outline-dashed btn-outline-dark btn-active-light-dark me-2 mb-2"
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

const code = `<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">Default</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary">Primary</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-success btn-active-light-success">Success</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-info btn-active-light-info">Info</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-warning btn-active-light-warning">Warning</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-danger btn-active-light-danger">Danger</a>
<a href="#" class="btn btn-outline btn-outline-dashed btn-outline-dark btn-active-light-dark">Dark</a>`;
