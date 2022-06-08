# DASHBOARD Aletheia Data

Aletheia is an Open Source project that seeks to encourage both public and private entities to facilitate
access to public information, so that it can have a more relevant social impact. 

As developers we have seen the need to make use of public information (information in the public
 domain that should be available and accessible by law), but in the search we quickly realized that
  although the information is (in part) available, it is not organized in a way that is easy to use (uses that
   can range from the simple consultation of the data, to statistical use or to create computer smart
    products oriented to citizens. 

Another problem that we frequently find is the lack of a standard in the format of these files. As well as
 the use of formats that DO NOT allow the extraction of the information. We know that, like us, there are
  other Citizens who need to access this data and this is why we decided to develop an Open API to
   facilitate access and distribution of resourceful public information. 


The objective is to create an ecosystem where these files are ALWAYS available, accessible 24 hours a
 day and accompanied by APIs to facilitate the consumption and exchange of this information while
  providing an immutable and reliable "single source of truth".

**Table of Contents**

- [🏄 Get Started](#-get-started)
- [✨ Code Style](#-code-style)
- [🛳 Build](#-build)
- [💖 Contributing](#-contributing)
## 🏄 Get Started

The app is a React app built with [React.js](https://reactjs.org/) + TypeScript.

To start local development:

```bash
git clone git@github.com:Aletheia-Data/app.aletheiadata.org.git

# when using nvm to manage Node.js versions
nvm use

npm install
```

Finally, set environment variables to use this local connection in `.env` in the app:

```bash
# modify env variables
cp .env.dist .env

npm start
```

This will start the development server under
`http://localhost:3000`.

## ✨ Code Style

Code style is automatically enforced through [ESLint](https://eslint.org) & [Prettier](https://prettier.io) rules:

- Git pre-commit hook runs `prettier` on staged files, setup with [Husky](https://typicode.github.io/husky)
- VS Code suggested extensions and settings for auto-formatting on file save
- CI runs a linting & TypeScript typings check as part of `npm test`, and fails if errors are found

For running linting and auto-formatting manually, you can use from the root of the project:

```bash
# linting check
npm run lint

# auto format all files in the project with prettier, taking all configs into account
npm run format
```

## 🛳 Build

To create a production build, run from the root of the project:

```bash
npm run build

# serve production build
npm run serve
```
## 💖 Contributing

We welcome contributions in form of bug reports, feature requests, code changes, or documentation improvements.

Please make sure to follow our guidelines:
- [Code of Conduct →](#)

For important changes please create first an (issue)[https://github.com/Aletheia-Data/app.aletheiadata.org/issues/new] to discuss what you would like to change.

Plase make sure that for each PR the necessary test are done.
## Gitpod

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/EnzoVezzaro/heptastadion.aletheiadata.org)