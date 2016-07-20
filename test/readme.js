'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:readme', function() {
    before(function() {
        return generateFullProject().toPromise();
    });

    it('should generate readme.md file', function() {
        assert.file('readme.md');
    });
});
