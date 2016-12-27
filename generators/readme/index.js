'use strict';

let Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {
        let data = {
            version: require('../../package.json').version,
            appname: this.fs.readJSON(this.destinationPath('package.json'), {}).name,
            license: this.fs.readJSON(this.destinationPath('package.json'), {}).license
        };

        this.fs.copyTpl(this.templatePath('_readme.md'), this.destinationPath('README.md'), data);
    }
}
