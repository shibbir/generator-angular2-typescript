'use strict';

let generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    writing: function() {
        let data = {
            version: require('../../package.json').version,
            appname: this.fs.readJSON(this.destinationPath('package.json'), {}).name,
            license: this.fs.readJSON(this.destinationPath('package.json'), {}).license
        };

        this.template('_readme.md', 'readme.md', data);
    }
});
