'use strict';

var path = require('path');
var helpers = require('yeoman-test');

exports.generateFullProject = function() {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
        css: 'none',
        moduleLoader: 'webpack',
        gulp: false,
        angularPackages: [],
        name: 'John Doe',
        email: 'john@doe.com',
        website: '',
        license: 'MIT'
    });
};
