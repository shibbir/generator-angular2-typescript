## <%= appname %>
> This project is generated with [generator-angular2-typescript](https://github.com/shibbir/generator-angular2-typescript) version <%= version %>.<% if (license === 'MIT') { %>

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)<% } %>

## Installation

```bash
$ npm install -g typescript
$ npm start
```

## Production Build
```bash
$ npm run build
```

## Running Unit Tests
```bash
$ npm test
```

## Running End-to-End Tests
```bash
# make sure you have a running app
$ npm run e2e
```<% if (license) { %>

## License
<a href="https://opensource.org/licenses/<%= license %>"><%= license %> License</a><% } %>
