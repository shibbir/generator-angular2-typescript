'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('css:framework', function() {
    describe('bootstrap with webpack', function() {
        before(function() {
            return generateFullProject().withPrompts({ css: 'bootstrap', moduleLoader: 'webpack' }).toPromise();
        });

        it('reference bootstrap in package.json', function() {
            assert.fileContent('package.json', /"bootstrap": "\^3.3.6"/);
        });

        it('import bootstrap.js in src/vendor.ts', function() {
            assert.fileContent('src/vendor.ts', /import 'bootstrap\/dist\/js\/bootstrap';/);
        });

        it('import bootstrap.css in src/app/app.component.ts', function() {
            assert.fileContent('src/app/app.component.ts', /import 'bootstrap\/dist\/css\/bootstrap.css';/);
        });

        it('reference jQuery in package.json', function() {
            assert.fileContent('package.json', /"jquery": "\^2.2.4"/);
        });

        it('configure jQuery in webpack.common.js', function() {
            assert.fileContent('config/webpack.common.js', /\$: 'jquery',/);
            assert.fileContent('config/webpack.common.js', /jQuery: 'jquery',/);
            assert.fileContent('config/webpack.common.js', /'window.jQuery': 'jquery'/);
        });
    });

    describe('bootstrap with systemjs', function() {
        before(function() {
            return generateFullProject().withPrompts({ css: 'bootstrap', moduleLoader: 'systemjs' }).toPromise();
        });

        it('reference jQuery in src/index.html', function() {
            assert.fileContent('src/index.html', /<script src="node_modules\/jquery\/dist\/jquery.js"><\/script>/);
        });

        it('reference bootstrap.css in src/index.html', function() {
            assert.fileContent('src/index.html', /<link rel="stylesheet" href="node_modules\/bootstrap\/dist\/css\/bootstrap.css">/);
        });

        it('reference bootstrap.js in src/index.html', function() {
            assert.fileContent('src/index.html', /<script src="node_modules\/bootstrap\/dist\/js\/bootstrap.js"><\/script>/);
        });
    });

    describe('foundation with webpack', function() {
        before(function() {
            return generateFullProject().withPrompts({ css: 'foundation', moduleLoader: 'webpack' }).toPromise();
        });

        it('reference foundation in package.json', function() {
            assert.fileContent('package.json', /"foundation-sites": "\^6.2.3"/);
        });

        it('import foundation.js in src/vendor.ts', function() {
            assert.fileContent('src/vendor.ts', /import 'foundation-sites\/dist\/foundation';/);
        });

        it('import foundation.css in src/vendor.ts', function() {
            assert.fileContent('src/app/app.component.ts', /import 'foundation-sites\/dist\/foundation.css';/);
        });

        it('reference jQuery in package.json', function() {
            assert.fileContent('package.json', /"jquery": "\^2.2.4"/);
        });

        it('configure jQuery in webpack.common.js', function() {
            assert.fileContent('config/webpack.common.js', /\$: 'jquery',/);
            assert.fileContent('config/webpack.common.js', /jQuery: 'jquery',/);
            assert.fileContent('config/webpack.common.js', /'window.jQuery': 'jquery'/);
        });
    });

    describe('foundation with systemjs', function() {
        before(function() {
            return generateFullProject().withPrompts({ css: 'foundation', moduleLoader: 'systemjs' }).toPromise();
        });

        it('reference jQuery in src/index.html', function() {
            assert.fileContent('src/index.html', /<script src="node_modules\/jquery\/dist\/jquery.js"><\/script>/);
        });

        it('reference foundation.css in src/index.html', function() {
            assert.fileContent('src/index.html', /<link rel="stylesheet" href="node_modules\/foundation-sites\/dist\/foundation.css">/);
        });

        it('reference foundation.js in src/index.html', function() {
            assert.fileContent('src/index.html', /<script src="node_modules\/foundation-sites\/dist\/foundation.js"><\/script>/);
        });
    });
});
