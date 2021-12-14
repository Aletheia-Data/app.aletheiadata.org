/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Example1ThemeColors } from "./Example1ThemeColors";
import { Example2Spacing } from "./Example2Spacing";
import { Example3FontSize } from "./Example3FontSize";
import { Example4LineHeight } from "./Example4LineHeight";
import { Example5LetterSpacing } from "./Example5LetterSpacing";
import { Example6Opacity } from "./Example6Opacity";
import { Example7OpacityHover } from "./Example7OpacityHover";
import { Example8WidthAndHeight } from "./Example8WidthAndHeight";
import { Example9ZIndex } from "./Example9ZIndex";

export function Utilities() {
  const {
    REACT_APP_THEME_NAME,
    REACT_APP_BOOTSTRAP_DOCS_LINK,
    REACT_APP_SASS_PATH,
  } = process.env;
  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>Overview
        </h1>
        <div className="py-5">
          <strong>{REACT_APP_THEME_NAME}</strong>&nbsp;fully utilizes the {' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/utilities/api`} className="fw-bold">
            Bootstrap Utility API
          </a>
          &nbsp; in
          <code>{REACT_APP_SASS_PATH}/_utilities.scss</code>to generate additional utility
          classes to cover its own design system. The customized utility SASS
          variables are defined in
          <code>{REACT_APP_SASS_PATH}/_variables.scss</code>and in
          <code>{REACT_APP_SASS_PATH}/_variables.custom.scss</code>you can override any
          variable for your needs.
        </div>
      </div>
      <Example1ThemeColors />
      <Example2Spacing />
      <Example3FontSize />
      <Example4LineHeight />
      <Example5LetterSpacing />
      <Example6Opacity />
      <Example7OpacityHover />
      <Example8WidthAndHeight />
      <Example9ZIndex />
    </>
  );
}
