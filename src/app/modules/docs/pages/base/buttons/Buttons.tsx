/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Example10SocialButtons } from "./Example10SocialButtons";
import { Example1BaseButtons } from "./Example1BaseButtons";
import { Example2LightStyle } from "./Example2LightStyle";
import { Example3BackgroundStyle } from "./Example3BackgroundStyle";
import { Example4OutlinedDashedStyle } from "./Example4OutlinedDashedStyle";
import { Example5ColorStyle } from "./Example5ColorStyle";
import { Example6ActiveStyle } from "./Example6ActiveStyle";
import { Example7ActiveLightStyle } from "./Example7ActiveLightStyle";
import { Example8ActiveColorStyle } from "./Example8ActiveColorStyle";
import { Example9Icons } from "./Example9Icons";

export function Buttons() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
    REACT_APP_SASS_VARIABLES_PATH,
  } = process.env;
  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>Overview
        </h1>
        <div className="py-5">
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp; customizes the{" "}
          <a
            href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/components/buttons`}
            className="fw-bold"
          >
            Bootstrap Buttons
          </a>
          &nbsp; through the SASS variables in
          <code>{REACT_APP_SASS_VARIABLES_PATH}</code>and adds additonal options in
          <code>{REACT_APP_SASS_PATH}/buttons</code>.
        </div>
      </div>
      <Example1BaseButtons />
      <Example2LightStyle />
      <Example3BackgroundStyle />
      <Example4OutlinedDashedStyle />
      <Example5ColorStyle />
      <Example6ActiveStyle />
      <Example7ActiveLightStyle />
      <Example8ActiveColorStyle />
      <Example9Icons />
      <Example10SocialButtons />
    </>
  );
}
