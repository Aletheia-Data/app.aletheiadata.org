/* eslint-disable no-unreachable */
import React from "react";
import { Link } from "react-router-dom";
import { Ktsvg } from "../../../../../_start/helpers";
import { CodeBlock } from "../../../../../_start/partials";

export function Rating(): JSX.Element {
  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="overview">
          <a href="#overview" />
          Overview
        </h1>
        <div className="py-5">
          Rating is a custom component that can be used to display and edit star
          based rating.
        </div>
      </div>
      <div className="py-10">
        <h1 className="anchor fw-bolder mb-5" id="basic">
          <a href="#basic" />
          Basic Example
        </h1>

        <div className="py-5">
          Use
          <code>.rating</code>and
          <code>.rating-label</code>classes for displaying star based ratings.
          This examples uses a star icon from
          <Link className="fw-bold" to="/docs/icons/duotone">
            Duotone Svg Icons
          </Link>
          .
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <div className="rating">
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={code} language="markup" />
      </div>
      <div className="pt-10">
        <h1 className="anchor fw-bolder mb-5" id="font-icons">
          <a href="#font-icons" />
          Font Icons Example
        </h1>

        <div className="py-5">
          As a star icon any font icons can be used as well. This examples uses
          a star icon from
          <Link className="fw-bold" to="/docs/icons/duotone">
            Bootstrap Icons
          </Link>
          :
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <div className="rating">
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-1" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-1" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-1" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-1" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-1" />
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code2} language="markup" />
      </div>

      <div className="py-10">
        <h1 className="anchor fw-bolder mb-5" id="states">
          <a href="#states" />
          Star States
        </h1>

        <div className="py-5">
          By default each star&apos;s state is unchecked and to mark them as
          checked just use
          <code>.checked</code>class for
          <code>.rating-label</code>element.
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <div className="rating">
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label checked">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
              <div className="rating-label">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </div>
            </div>
            <div className="separator my-10" />
            <div className="rating">
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-2" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-2" />
              </div>
              <div className="rating-label me-2 checked">
                <i className="bi bi-star fs-2" />
              </div>
              <div className="rating-label me-2">
                <i className="bi bi-star fs-2" />
              </div>
              <div className="rating-label me-2">
                <i className="bi bi-star fs-2" />
              </div>
            </div>
          </div>
        </div>
        <CodeBlock code={code3} language="markup" />
      </div>

      <div className="pt-10">
        <h1 className="anchor fw-bolder mb-5" id="edit">
          <a href="#edit" />
          Edit Mode Examples
        </h1>

        <div className="py-5">
          Enable editable rating with Label and Radio input elements. Hover and
          click on the below rating to set a rating value that can be submitted
          along with attached radio inputs:
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <div className="rating">
              <label
                className="btn btn-light fw-bolder btn-sm rating-label me-3"
                htmlFor="kt_rating_input_0"
              >
                Reset
              </label>
              <input
                checked
                className="rating-input"
                id="kt_rating_input_0"
                name="rating"
                type="radio"
                value="0"
              />
              <label className="rating-label" htmlFor="kt_rating_input_1">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_input_1"
                name="rating"
                type="radio"
                value="1"
              />

              <label className="rating-label" htmlFor="kt_rating_input_2">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_input_2"
                name="rating"
                type="radio"
                value="2"
              />

              <label className="rating-label" htmlFor="kt_rating_input_3">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_input_3"
                name="rating"
                type="radio"
                value="3"
              />

              <label className="rating-label" htmlFor="kt_rating_input_4">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_input_4"
                name="rating"
                type="radio"
                value="4"
              />

              <label className="rating-label" htmlFor="kt_rating_input_5">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_input_5"
                name="rating"
                type="radio"
                value="5"
              />
            </div>
          </div>
        </div>
        <CodeBlock code={code4} language="markup" />

        <div className="pt-15 pb-5">
          Rating with default value can be setup through a radio input&apos;s
          <code>checked=&quot;checked&quot;</code>state. This examples shows a
          rating with 3 stars default value:
        </div>

        <div className="py-5">
          <div className="rounded border p-10">
            <div className="rating">
              <label
                className="btn btn-light fw-bolder btn-sm rating-label me-3"
                htmlFor="kt_rating_2_input_0"
              >
                Reset
              </label>
              <input
                checked
                className="rating-input"
                id="kt_rating_2_input_0"
                name="rating2"
                type="radio"
                value="0"
              />

              <label className="rating-label" htmlFor="kt_rating_2_input_1">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_2_input_1"
                name="rating2"
                type="radio"
                value="1"
              />

              <label className="rating-label" htmlFor="kt_rating_2_input_2">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_2_input_2"
                name="rating2"
                type="radio"
                value="2"
              />

              <label className="rating-label" htmlFor="kt_rating_2_input_3">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                checked
                className="rating-input"
                id="kt_rating_2_input_3"
                name="rating2"
                type="radio"
                value="3"
              />

              <label className="rating-label" htmlFor="kt_rating_2_input_4">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_2_input_4"
                name="rating2"
                type="radio"
                value="4"
              />

              <label className="rating-label" htmlFor="kt_rating_2_input_5">
                <Ktsvg
                  className="svg-icon svg-icon-1"
                  path="/media/icons/duotone/General/Star.svg"
                />
              </label>
              <input
                className="rating-input"
                id="kt_rating_2_input_5"
                name="rating2"
                type="radio"
                value="5"
              />
            </div>
          </div>
        </div>

        <CodeBlock code={code5} language="markup" />
      </div>
    </>
  );
}

const code = `<div className="rounded border p-10">
  <div className="rating">
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
</div>
`;

const code2 = `<div className="rating">
  <div className="rating-label me-2 checked">
    <i className="bi bi-star fs-1"></i>
  </div>
  <div className="rating-label me-2 checked">
    <i className="bi bi-star fs-1"></i>
  </div>
  <div className="rating-label me-2 checked">
    <i className="bi bi-star fs-1"></i>
  </div>
  <div className="rating-label me-2 checked">
    <i className="bi bi-star fs-1"></i>
  </div>
  <div className="rating-label me-2 checked">
    <i className="bi bi-star fs-1"></i>
  </div>
</div>`;

const code3 = `<div className="rounded border p-10">
  <div className="rating">
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label">
      <Ktsvg
        path="/media/icons/duotone/General/Star.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
  <div className="separator my-10"></div>
  <div className="rating">
    <div className="rating-label me-2 checked">
      <i className="bi bi-star fs-2"></i>
    </div>
    <div className="rating-label me-2 checked">
      <i className="bi bi-star fs-2"></i>
    </div>
    <div className="rating-label me-2 checked">
      <i className="bi bi-star fs-2"></i>
    </div>
    <div className="rating-label me-2">
      <i className="bi bi-star fs-2"></i>
    </div>
    <div className="rating-label me-2">
      <i className="bi bi-star fs-2"></i>
    </div>
  </div>
</div>
`;

const code4 = `<div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
`;

const code5 = `<div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_2_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_2_input_0"
  />

  <label className="rating-label" htmlFor="kt_rating_2_input_1">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="1"
    type="radio"
    id="kt_rating_2_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_2_input_2">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="2"
    type="radio"
    id="kt_rating_2_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_2_input_3">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="3"
    type="radio"
    checked={true}
    onChange={() => {}}
    id="kt_rating_2_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_2_input_4">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="4"
    type="radio"
    id="kt_rating_2_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_2_input_5">
    <Ktsvg
      path="/media/icons/duotone/General/Star.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating2"
    value="5"
    type="radio"
    id="kt_rating_2_input_5"
  />
</div>
`;
