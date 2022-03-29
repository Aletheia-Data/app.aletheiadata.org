import React from "react";
import { CodeBlock } from "../../../../../_start/partials";

export function Deployment(): JSX.Element {
  const { REACT_APP_THEME_NAME } = process.env;

  return (
    <>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="deployment">
          <a href="#deployment" />
          Deployment
        </h1>
        <div className="py-5">
          <span>
            As the example of application URL:{" "}
            <code>https://example.com/my/app</code>
          </span>
          <ol className="pt-4">
            <li>
              <span>
                Setup <b>baseURL</b> via <code>homepage</code> entry in{" "}
                <code>package.json</code>.
              </span>
              <CodeBlock code={baseUrlCode} language="json" />
            </li>
            <li>
              <span>Run build..</span>
              <CodeBlock code="yarn build" language="bash" />
            </li>
          </ol>
        </div>
      </div>
      <div className="pb-10">
        <h1 className="anchor fw-bolder mb-5" id="serve-production-mode">
          <a href="#serve-production-mode" />
          Serve production mode
        </h1>
        <div className="py-5">
          <span>
            As the example of application URL:{" "}
            <code>http://localhost:5000</code>.
          </span>
          <ol className="pt-4">
            <li>
              <span>
                Setup <b>baseURL</b> via <code>homepage</code> entry in{" "}
                <code>package.json</code>.
              </span>
              <CodeBlock code={baseUrlCode} language="json" />
            </li>
            <li>
              <span>Run build..</span>
              <CodeBlock code="yarn build" language="bash" />
            </li>
            <li>
              <span>
                For environments using <code>Node</code>, the easiest way to
                handle this would be to install <code>serve</code> and let it
                handle the rest::
              </span>
              <CodeBlock code="yarn global add serve" language="bash" /> or{" "}
              <CodeBlock code="npm i serve -g" language="bash" />
              <span>Start runner:</span>
              <CodeBlock code="serve -s build -l 5000" language="bash" />
            </li>
            <li>
              <span>
                Open <code>http://localhost:5000</code> URL in your browser.
              </span>
            </li>
          </ol>
        </div>
        <div className="py-5">
          Host react application on Apache server setup:{" "}
          <a
            href="https://gist.github.com/ywwwtseng/63c36ccb58a25a09f7096bbb602ac1de"
            rel="noopener noreferrer"
            target="_blank"
          >
            CRA Apache setup
          </a>
        </div>
        <div className="py-5">
          <span>
            Our {REACT_APP_THEME_NAME} React application is based on{" "}
            <b>Create React App</b>. For more detailed information of the CRA,
            visit the official Create React App{" "}
            <a
              href="https://create-react-app.dev/docs/deployment"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation website
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
}

const baseUrlCode = `
- "homepage": "/start/build",
+ "homepage": "/my/app",
`;
