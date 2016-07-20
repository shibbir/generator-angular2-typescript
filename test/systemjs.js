'use strict';

var assert = require('yeoman-assert');
var generateFullProject = require('./utils').generateFullProject;

describe('app:systemjs', function() {
    before(function () {
        return generateFullProject().withPrompts({ moduleLoader: 'systemjs' }).toPromise();
    });

    it('systemjs dependencies should be referenced in package.json', function() {
        assert.fileContent('package.json', /"lite-server": "\^2.2.2"/);
        assert.fileContent('package.json', /"systemjs": "0.19.27"/);
    });

    it('should generate systemjs related files', function() {
        assert.file([
            'bs-config.json',
            'src/systemjs.config.js',
            'src/app/main.ts'
        ]);
    });

    it('@angular dependencies should be referenced in src/index.html', function() {
        assert.fileContent('src/index.html', /<script src="node_modules\/core-js\/client\/shim.min.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/zone.js\/dist\/zone.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/reflect-metadata\/Reflect.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="node_modules\/systemjs\/dist\/system.src.js"><\/script>/);
        assert.fileContent('src/index.html', /<script src="systemjs.config.js"><\/script>/);
    });
});
