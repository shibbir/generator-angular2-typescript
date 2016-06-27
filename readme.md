## Angular2-TypeScript generator
> Yeoman generator for scaffold out a front-end project with Angular2 and TypeScript

[![Build Status](https://travis-ci.org/shibbir/generator-angular2-typescript.svg?branch=master)](https://travis-ci.org/shibbir/generator-angular2-typescript)
[![Dependency Status](https://david-dm.org/shibbir/generator-angular2-typescript.svg)](https://david-dm.org/shibbir/generator-angular2-typescript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Status: Work In Progress

## Installation

You need to have latest version of [Node.js](https://nodejs.org/en/) installed on your machine before running the followings:

```bash
npm install typescript yo generator-angular2-typescript -g
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
- Filled `package.json` file
- [gulp](http://gulpjs.com/) task runner
- CSS: [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/)
- Module loader: [Webpack](https://webpack.github.io/) or [SystemJS](https://github.com/systemjs/systemjs)
- [mocha](http://mochajs.org/) unit test
- [ESLInt](http://eslint.org/) linting and code style checking
- [Istanbul](https://gotwarlost.github.io/istanbul/) code coverage
- [License](https://spdx.org/licenses/)

## License
<a href="https://opensource.org/licenses/MIT">The MIT License</a> Copyright (c) 2016 Shibbir Ahmed
