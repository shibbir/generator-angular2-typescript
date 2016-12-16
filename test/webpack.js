'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:webpack', function() {
    before(function () {
        return generateFullProject().withPrompts({ moduleLoader: 'webpack' }).toPromise();
    });

    it('reference webpack dependencies in package.json', function() {
        assert.fileContent('package.json', /"css-loader": "\^0.23.1"/);
        assert.fileContent('package.json', /"extract-text-webpack-plugin": "\^1.0.1"/);
        assert.fileContent('package.json', /"file-loader": "\^0.8.5"/);
        assert.fileContent('package.json', /"html-loader": "\^0.4.3"/);
        assert.fileContent('package.json', /"html-webpack-plugin": "\^2.15.0"/);
        assert.fileContent('package.json', /"null-loader": "\^0.1.1"/);
        assert.fileContent('package.json', /"raw-loader": "\^0.5.1"/);
        assert.fileContent('package.json', /"style-loader": "\^0.13.1"/);
        assert.fileContent('package.json', /"ts-loader": "\^0.8.1"/);
        assert.fileContent('package.json', /"webpack": "\^1.13.1"/);
        assert.fileContent('package.json', /"webpack-dev-server": "\^1.14.1"/);
        assert.fileContent('package.json', /"webpack-merge": "\^0.14.0"/);
    });

    it('generate webpack related files', function() {
        assert.file([
            'karma.conf.js',
            'config/karma-test-shim.js',

            'webpack.config.js',
            'config/webpack.common.js',
            'config/webpack.dev.js',
            'config/webpack.prod.js',
            'config/webpack.test.js',

            'src/polyfills.ts',
            'src/vendor.ts',
            'src/main.ts'
        ]);
    });
});
