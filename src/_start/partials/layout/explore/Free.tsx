import React from "react";
import { KTSVG } from "../../../helpers";

const Free = () => (
  <>
    <div className="mb-5">
      {/* begin::Comparision */}
      <table className="table table-row-dashed table-row-gray-300 align-middle fs-6 fw-bold text-gray-800 gs-0 gy-3">
        <tbody>
          <tr className="border-bottom-0">
            <th className="fw-bolder text-dark fs-3">Pro Version Benefits</th>
            <th className="text-center">
              <span className="bg-light py-2 px-4 fw-bold fs-6 rounded">
                Free
              </span>
            </th>
            <th className="text-center">
              <span className="bg-light py-2 px-4 fw-bold fs-6 rounded">
                Pro
              </span>
            </th>
          </tr>
          <tr>
            <td>UI Elements</td>
            <td className="text-center">20</td>
            <td className="text-center">100</td>
          </tr>
          <tr>
            <td>In-house Components</td>
            <td className="text-center">20</td>
            <td className="text-center">40</td>
          </tr>
          <tr>
            <td>Crafted Pages</td>
            <td className="text-center">5</td>
            <td className="text-center">20</td>
          </tr>
          <tr>
            <td>Complete Documentation</td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Done-circle.svg"
                className="svg-icon-2 explore-icon-success"
              />
            </td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Done-circle.svg"
                className="svg-icon-2 explore-icon-success"
              />
            </td>
          </tr>
          <tr>
            <td>Product Support</td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Error-circle.svg"
                className="svg-icon-2 explore-icon-danger"
              />
            </td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Done-circle.svg"
                className="svg-icon-2 explore-icon-success"
              />
            </td>
          </tr>
          <tr>
            <td>Chat App</td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Error-circle.svg"
                className="svg-icon-2 explore-icon-danger"
              />
            </td>
            <td className="text-center">
              <KTSVG
                path="/media/icons/duotone/Code/Done-circle.svg"
                className="svg-icon-2 explore-icon-success"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* end::Comparision */}
    </div>
    <a
      href="https://keenthemes.com/products/start-react-pro"
      className="btn btn-lg explore-btn-primary w-100"
    >
      Upgrade to
      <span className="fw-bolder ms-1">Start React Pro</span>
    </a>
  </>
);

export { Free };
