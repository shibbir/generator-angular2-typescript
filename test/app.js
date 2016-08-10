'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:configuration', function() {
    before(function () {
        return generateFullProject().toPromise();
    });

    it('generate base files', function() {
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

    it('gulpfile.js should not generated if not selected', function () {
        assert.noFile('gulpfile.js');
    });

    it('generate generic source files', function() {
        assert.file([
            'src/index.html',
            'src/styles.css',

            'src/app/app.component.ts',
            'src/app/app.module.ts',
            'src/app/app.routing.ts',
            'src/app/app.component.html',
            'src/app/app.component.spec.ts',

            'src/app/home/home.component.ts',
            'src/app/home/home.component.html',
            'src/app/home/home.component.spec.ts',

            'src/app/about/about.component.ts',
            'src/app/about/about.component.html',
            'src/app/about/about.component.spec.ts'

        ]);
    });
});

describe('app:gulpfile', function () {
    before(function () {
        return generateFullProject().withPrompts({ gulp: true }).toPromise();
    });

    it('generate gulpfile.js if gulp is selected', function () {
        assert.file('gulpfile.js');
    });

    it('reference gulp tasks via npm scripts in package.json', function () {
        assert.fileContent('package.json', /"start": "gulp"/);
        assert.fileContent('package.json', /"build": "gulp build"/);
        assert.fileContent('package.json', /"test": "karma start"/);
    });
});
