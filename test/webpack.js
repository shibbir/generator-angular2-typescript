'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:webpack', function() {
    before(function () {
        return generateFullProject().withPrompts({ moduleLoader: 'webpack' }).toPromise();
    });

    it('generate webpack related files', function() {
        assert.file([
            'karma.conf.js',
            'config/karma-test-shim.js',
            'config/helpers.js',

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
