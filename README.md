## NextJS MaterialUI Starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

Get up and running with a complete Next.js site developed using Material UI and TypeScript.

<hr>

### Table of contents

1. [Installation](#installation)
2. [Main libraries used](#main-libraries-used)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing Guidelines](#contributing-guidelines)

<hr>

### Installation

Open a new terminal and enter the following commands:

```shell
git clone https://github.com/Andrew2432/nextjs-material-ui-starter.git

# If you are using npm:
npm install

# If you are ysing Yarn:
yarn install
```

<hr>

### Main Libraries used:

- Next.js
- Material UI
- TypeScript
- ESLint
- Prettier

<hr>

### Usage

A simple hello world page has been built for you as an example.

You can run the project in development mode using:

```shell
# NPM
npm run dev

# Yarn
yarn dev
```

You can generate a production build using:

```shell
# NPM
npm build

# Yarn
yarn build
```

Once a build is generated, you can run the build in local production using:

```shell
# NPM
npm start

# Yarn
yarn start
```

Some scripts are added as helpers for you:

```shell
# Linting with ESLint and Prettier
# NPM
npm run lint

# Yarn
yarn lint

# Commiting using commitizen (if you intend to contribute)
# NPM
npm run commit

# Yarn
yarn commit

# Clean node_modules, lock files and build cache and install again (hard reset)
# NPM
npm run hard-reset:npm

# Yarn
yarn hard-reset:yarn

# Clean your build cache
# NPM
npm run clean

# Yarn
yarn clean
```

<hr>

### Features

- Added `_app.tsx` and `_document.tsx` pages to support Material UI.
- Basic rules in ESLint and Prettier.
- A `Layout` component for wrapping pages.
- A `SEO` component for adding title and description for pages.

### Contributing Guidelines

1. We use commitizen for standardized commits. You can use it during commit as follows:

```shell
# Add files to staging area
git add .

# Using commitizen
# NPM
npm run commit

# Yarn
yarn commit
```

2. All PRs are welcome!
