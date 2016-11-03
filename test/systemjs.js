'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:systemjs', function() {
    before(function () {
        return generateFullProject().withPrompts({ moduleLoader: 'systemjs', gulp: true }).toPromise();
    });

    it('reference systemjs dependencies in package.json', function() {
        assert.fileContent('package.json', /"gulp": "\^3.9.1"/);
        assert.fileContent('package.json', /"gulp-clean-css": "\^2.0.12"/);
        assert.fileContent('package.json', /"gulp-concat": "\^2.6.0"/);
        assert.fileContent('package.json', /"gulp-connect": "\^5.0.0"/);
        assert.fileContent('package.json', /"gulp-inject": "\^4.1.0"/);
        assert.fileContent('package.json', /"gulp-inline-ng2-template": "\^3.0.2"/);
        assert.fileContent('package.json', /"gulp-load-plugins": "\^1.3.0"/);
        assert.fileContent('package.json', /"gulp-sourcemaps": "\^1.6.0"/);
        assert.fileContent('package.json', /"gulp-typescript": "\^3.0.1"/);
        assert.fileContent('package.json', /"gulp-uglify": "\^2.0.0"/);
        assert.fileContent('package.json', /"html-minifier": "\^3.1.0"/);
        assert.fileContent('package.json', /"systemjs": "0.19.39"/);
        assert.fileContent('package.json', /"systemjs-builder": "\^0.15.32"/);
    });

    it('generate systemjs related files', function() {
        assert.file([
            'src/systemjs.config.js',
            'src/app/main.ts'
        ]);
    });

    it('reference @angular dependencies in src/index.html', function() {
        assert.fileContent('src/index.html', /<script src="node_modules\/core-js\/client\/shim.min.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/zone.js\/dist\/zone.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/reflect-metadata\/Reflect.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/systemjs\/dist\/system.src.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="systemjs.config.js"><\/script>/);
    });
});
