'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('app:configuration', function() {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                css: 'none',
                moduleLoader: 'webpack',
                gulp: false,
                angularPackages: [],
                name: 'John Doe',
                email: 'john@doe.com',
                website: '',
                license: 'MIT'
            }).toPromise();
    });

    it('should generate base files', function() {
        assert.file([
            '.gitignore',
            '.gitattributes',
            '.editorconfig',
            'package.json',
            'tsconfig.json',
            'tslint.json',
            'typings.json'
        ]);
    });
});
