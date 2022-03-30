/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import React from "react";
import { CodeBlock } from "../../../../../../_start/partials";

export function Example10SocialButtons(): JSX.Element {
  return (
    <div className="pb-10">
      <h1 className="anchor fw-bolder mb-5" id="social-buttons">
        <a href="#buttons" />
        Social Buttons
      </h1>
      <div className="py-5">
        Use
        <code>.btn-{"{social}"}</code>and
        <code>.btn-light-{"{social}"}</code>classes with
        <a className="fw-bold" href="https://fontawesome.com" target="_blank">
          Font Awesome
        </a>
        &nbsp; or
        <a
          className="fw-bold"
          href="https://icons.getbootstrap.com"
          target="_blank"
        >
          Bootstrap Icons
        </a>
        &nbsp; social icons for supporting buttons with social brand logos and
        colors.
      </div>

      <div className="py-5">
        Where
        <code>social</code>is one the below options defined with
        <code>$social-colors</code>custom variable in
        <code>src/sass/_variables.scss</code>.
        <ul className="py-3">
          <li className="py-2">
            <code>facebook</code>
          </li>
          <li className="py-2">
            <code>google</code>
          </li>
          <li className="py-2">
            <code>twitter</code>
          </li>
          <li className="py-2">
            <code>instagram</code>
          </li>
          <li className="py-2">
            <code>youtube</code>
          </li>
          <li className="py-2">
            <code>linkedin</code>
          </li>
        </ul>
        Other social colors can be added by referring to
        <a className="fw-bold" href="https://brandcolors.net/">
          brandcolors.net
        </a>
        .
      </div>
      <div className="py-5">
        <div className="rounded border p-10">
          <a className="btn btn-icon btn-facebook me-5" href="#">
            <i className="fab fa-facebook-f fs-4" />
          </a>
          <a className="btn btn-icon btn-google me-5" href="#">
            <i className="fab fa-google fs-4" />
          </a>
          <a className="btn btn-icon btn-twitter me-5" href="#">
            <i className="fab fa-twitter fs-4" />
          </a>
          <a className="btn btn-icon btn-instagram me-5" href="#">
            <i className="fab fa-instagram fs-4" />
          </a>
          <a className="btn btn-icon btn-youtube me-5" href="#">
            <i className="fab fa-youtube fs-4" />
          </a>
          <a className="btn btn-icon btn-linkedin me-5" href="#">
            <i className="fab fa-linkedin fs-4" />
          </a>
          <div className="separator my-10" />
          <a className="btn btn-icon btn-light-facebook me-5" href="#">
            <i className="fab fa-facebook-f fs-4" />
          </a>
          <a className="btn btn-icon btn-light-google me-5" href="#">
            <i className="fab fa-google fs-4" />
          </a>
          <a className="btn btn-icon btn-light-twitter me-5" href="#">
            <i className="fab fa-twitter fs-4" />
          </a>
          <a className="btn btn-icon btn-light-instagram me-5" href="#">
            <i className="fab fa-instagram fs-4" />
          </a>
          <a className="btn btn-icon btn-light-youtube me-5" href="#">
            <i className="fab fa-youtube fs-4" />
          </a>
          <a className="btn btn-icon btn-light-linkedin me-5" href="#">
            <i className="fab fa-linkedin fs-4" />
          </a>
        </div>
      </div>
      <CodeBlock code={code} language="markup" />
    </div>
  );
}

const code = `<a href="#" className="btn btn-icon btn-facebook me-5 "><i className="fab fa-facebook-f fs-4"></i></a>
<a href="#" className="btn btn-icon btn-google me-5 "><i className="fab fa-google fs-4"></i></a>
<a href="#" className="btn btn-icon btn-twitter me-5 "><i className="fab fa-twitter fs-4"></i></a>
<a href="#" className="btn btn-icon btn-instagram me-5 "><i className="fab fa-instagram fs-4"></i></a>
<a href="#" className="btn btn-icon btn-youtube me-5 "><i className="fab fa-youtube fs-4"></i></a>
<a href="#" className="btn btn-icon btn-linkedin me-5 "><i className="fab fa-linkedin fs-4"></i></a>

<a href="#" className="btn btn-icon btn-light-facebook me-5 "><i className="fab fa-facebook-f fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-google me-5 "><i className="fab fa-google fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-twitter me-5 "><i className="fab fa-twitter fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-instagram me-5 "><i className="fab fa-instagram fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-youtube me-5 "><i className="fab fa-youtube fs-4"></i></a>
<a href="#" className="btn btn-icon btn-light-linkedin me-5 "><i className="fab fa-linkedin fs-4"></i></a>`;
