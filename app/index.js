'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

var Generator = module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.log(yosay('Hello, and welcome to angular2-typescript generator!'));
        this.argument('appname', { type: String, required: false });
        this.appname = this.appname || path.basename(process.cwd());

        this.pkg = require('../package.json');
        this.sourceRoot(path.join(__dirname, '../templates/common'));
    },

    prompting: function () {

        return this.prompt([{
            type    : 'list',
            name    : 'cssFramework',
            message : 'Which CSS framework would you like to include?',
            choices: [{
                value   : 'bootstrap',
                name    : 'Bootstrap',
                checked : true
            }, {
                value   : 'foundation',
                name    : 'Foundation',
                checked : false
            }]
        }, {
            type    : 'list',
            name    : 'moduleLoader',
            message : 'Which module loader would you like to use?',
            choices: [{
                value   : 'webpack',
                name    : 'webpack',
                checked : false
            }, {
                value   : 'systemjs',
                name    : 'systemjs',
                checked : false
            }]
        }, {
            type    : 'checkbox',
            name    : 'featurePackages',
            message : 'Which additional feature Packages would you like to include?',
            choices: [{
                value   : '@angular/http',
                name    : '@angular/http',
                checked : false
            }, {
                value   : '@angular/router',
                name    : '@angular/router',
                checked : false
            }]
        }]).then(function (answers) {
            this.props = answers;
        }.bind(this));
    },

    writings: function () {
        this.fs.copyTpl(
            this.templatePath('root/_package.json'),
            this.destinationPath('package.json'), {
                appname: this.appname
            }
        );

        this.fs.copyTpl(
            this.templatePath('root/_readme.md'),
            this.destinationPath('readme.md'), {
                appname: this.appname,
                pkg: this.pkg
            }
        );

        this.fs.copy(
            this.templatePath('root/.editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('root/.gitignore'),
            this.destinationPath('.gitignore')
        );
    },

    installDependencies: function() {
        var libraries = require('./libraries');
        var packages = _.union(libraries.angularDependencies, libraries.angularPackages, this.props.featurePackages);

        if(this.props.moduleLoader === 'webpack') {
            packages = _.union(packages, libraries.webpack);
        } else {
            packages = _.union(packages, libraries.systemjs);
        }

        packages.push(this.props.cssFramework);

        this.npmInstall(packages, { 'save': true });
    }
});
