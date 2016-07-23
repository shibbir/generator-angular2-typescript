## Angular2-TypeScript generator
> Yeoman generator for scaffold out a front-end project with Angular2 and TypeScript

[![NPM](https://nodei.co/npm/generator-angular2-typescript.png?compact=true)](https://nodei.co/npm/generator-angular2-typescript/)

[![Build Status](https://travis-ci.org/shibbir/generator-angular2-typescript.svg?branch=master)](https://travis-ci.org/shibbir/generator-angular2-typescript)
[![Dependency Status](https://david-dm.org/shibbir/generator-angular2-typescript.svg)](https://david-dm.org/shibbir/generator-angular2-typescript)
[![Coverage Status](https://coveralls.io/repos/github/shibbir/generator-angular2-typescript/badge.svg?branch=master)](https://coveralls.io/github/shibbir/generator-angular2-typescript?branch=master)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Status: Work In Progress

## Installation

You need to have latest version of [Node.js](https://nodejs.org/en/) installed on your machine before running the followings:

```bash
npm install yo generator-angular2-typescript -g
```

Make a new directory, and cd into it:
```bash
mkdir my-new-project && cd $_
```

Run yo angular2-typescript, optionally passing an app name:
```bash
yo angular2-typescript [app-name]
```

That'll generate a project including:

- Configured `package.json` file
- [Gulp](http://gulpjs.com/) task runner
- Plain CSS, [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/) integration
- Either [Webpack](https://webpack.github.io/) or [SystemJS](https://github.com/systemjs/systemjs) integration
- [Karma](https://karma-runner.github.io/) unit test runner
- [TSLint](https://palantir.github.io/tslint/) linting for the TypeScript language
- [Istanbul](https://gotwarlost.github.io/istanbul/) code coverage
- [License](https://spdx.org/licenses/)

## Running Tests
```bash
npm test

# Code coverage report
npm run coverage
```

## License
<a href="https://opensource.org/licenses/MIT">The MIT License</a> Copyright &copy; 2016 Shibbir Ahmed
