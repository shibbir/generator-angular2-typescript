'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('app:readme', function() {
    before(function() {
        return helpers.run(path.join(__dirname, '../generators/readme')).toPromise();
    });

    it('should generate readme.md file', function() {
        assert.file('readme.md');
    });
});
