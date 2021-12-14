import React from "react";

const Toggle = () => (
  <button
    id="kt_explore_toggle"
    className="explore-toggle btn btn-sm explore-btn-toggle shadow-sm position-fixed fw-bolder zindex-2 top-50 px-8 mt-10 end-0 transform-90 fs-5 rounded-top-0"
    title="Upgrade to pro"
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label">Upgrade to Pro</span>
  </button>
);

export { Toggle };
