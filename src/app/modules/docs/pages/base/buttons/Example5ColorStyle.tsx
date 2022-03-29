/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example5ColorStyle(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="color-style">
        <a href="#color-style" />
        Color Style
      </h1>
      <div className="py-5">
        Use
        <code>.btn-color-{"{text-color}"}</code>class to set a button&apos;s
        text and icon colors only:
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-bg-dark btn-color-white me-2 mb-2" href="#">
            White
          </a>
          <a className="btn btn-bg-light btn-color-primary me-2 mb-2" href="#">
            Primary
          </a>
          <a className="btn btn-bg-dark btn-color-secondary me-2 mb-2" href="#">
            Secondary
          </a>
          <a className="btn btn-bg-dark btn-color-light me-2 mb-2" href="#">
            Light
          </a>
          <a className="btn btn-bg-light btn-color-success me-2 mb-2" href="#">
            Success
          </a>
          <a className="btn btn-bg-light btn-color-info me-2 mb-2" href="#">
            Info
          </a>
          <a className="btn btn-bg-light btn-color-warning me-2 mb-2" href="#">
            Warning
          </a>
          <a className="btn btn-bg-light btn-color-danger me-2 mb-2" href="#">
            Danger
          </a>
          <a className="btn btn-bg-light btn-color-dark me-2 mb-2" href="#">
            Dark
          </a>
          <a className="btn btn-bg-light btn-color-muted me-2 mb-2" href="#">
            Muted
          </a>
          <a className="btn btn-bg-dark btn-color-gray-100 me-2 mb-2" href="#">
            Gray-100
          </a>
          <a className="btn btn-bg-dark btn-color-gray-200 me-2 mb-2" href="#">
            Gray-200
          </a>
          <a className="btn btn-bg-dark btn-color-gray-300 me-2 mb-2" href="#">
            Gray-300
          </a>
          <a className="btn btn-bg-light btn-color-gray-400 me-2 mb-2" href="#">
            Gray-400
          </a>
          <a className="btn btn-bg-light btn-color-gray-500 me-2 mb-2" href="#">
            Gray-500
          </a>
          <a className="btn btn-bg-light btn-color-gray-600 me-2 mb-2" href="#">
            Gray-600
          </a>
          <a className="btn btn-bg-light btn-color-gray-700 me-2 mb-2" href="#">
            Gray-700
          </a>
          <a className="btn btn-bg-light btn-color-gray-800 me-2 mb-2" href="#">
            Gray-800
          </a>
          <a className="btn btn-bg-light btn-color-gray-900 me-2 mb-2" href="#">
            Gray-900
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-bg-dark btn-color-white">White</a>
<a href="#" className="btn btn-bg-light btn-color-primary">Primary</a>
<a href="#" className="btn btn-bg-dark btn-color-secondary">Secondary</a>
<a href="#" className="btn btn-bg-dark btn-color-light">Light</a>
<a href="#" className="btn btn-bg-light btn-color-success">Success</a>
<a href="#" className="btn btn-bg-light btn-color-info">Info</a>
<a href="#" className="btn btn-bg-light btn-color-warning">Warning</a>
<a href="#" className="btn btn-bg-light btn-color-danger">Danger</a>
<a href="#" className="btn btn-bg-light btn-color-dark">Dark</a>
<a href="#" className="btn btn-bg-light btn-color-muted">Muted</a>
<a href="#" className="btn btn-bg-dark btn-color-gray-100">Gray-100</a>
<a href="#" className="btn btn-bg-dark btn-color-gray-200">Gray-200</a>
<a href="#" className="btn btn-bg-dark btn-color-gray-300">Gray-300</a>
<a href="#" className="btn btn-bg-light btn-color-gray-400">Gray-400</a>
<a href="#" className="btn btn-bg-light btn-color-gray-500">Gray-500</a>
<a href="#" className="btn btn-bg-light btn-color-gray-600">Gray-600</a>
<a href="#" className="btn btn-bg-light btn-color-gray-700">Gray-700</a>
<a href="#" className="btn btn-bg-light btn-color-gray-800">Gray-800</a>
<a href="#" className="btn btn-bg-light btn-color-gray-900">Gray-900</a>`;
