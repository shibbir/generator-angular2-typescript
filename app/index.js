'use strict';

let generators = require('yeoman-generator');
let yosay = require('yosay');
let path = require('path');
let _ = require('lodash');

let Generator = module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.log(yosay('Hello, and welcome to angular2-typescript generator!'));
        this.argument('appname', { type: String, required: false });
        this.appname = _.kebabCase(this.appname || path.basename(process.cwd()));

        this.pkg = require('../package.json');
        this.sourceRoot(path.join(__dirname, '../templates/'));
    }
});

Generator.prototype.askForLicense = function askForLicense() {
    return this.prompt([{
        type    : 'list',
        name    : 'license',
        message : 'Which type of license would you like to use?',
        choices: [{
            value   : 'MIT',
            name    : 'MIT',
            checked : true
        }, {
            value   : 'BSD-2-Clause',
            name    : 'BSD-2-Clause',
            checked : false
        }]
    }]).then(function(props) {
        this.license = props.license;
    }.bind(this));
};

Generator.prototype.askForBootstrap = function askForBootstrap() {
    return this.prompt([{
        type    : 'confirm',
        name    : 'bootstrap',
        message : 'Would you like to use bootstrap?'
    }]).then(function(props) {
        this.bootstrap = props.bootstrap ? 'bootstrap' : false;
    }.bind(this));
};

Generator.prototype.askForModuleLoader = function askForModuleLoader() {
    return this.prompt([{
        type    : 'list',
        name    : 'moduleLoader',
        message : 'Which module loader would you like to use?',
        choices: [{
            value   : 'webpack',
            name    : 'webpack',
            checked : true
        }]
    }]).then(function(props) {
        if(props.moduleLoader === 'webpack') {
            this.webpack = true;
        } else if(props.moduleLoader === 'systemjs') {
            this.systemjs = true;
        }
    }.bind(this));
};

Generator.prototype.askForAngularPackages = function askForAngularPackages() {
    return this.prompt([{
        type    : 'checkbox',
        name    : 'angularPackages',
        message : 'Which additional angular packages would you like to include?',
        choices: [{
            value   : '@angular/http',
            name    : '@angular/http',
            checked : false
        }]
    }]).then(function(props) {
        this.angularPackages = [];

        props.angularPackages.forEach(key => this.angularPackages[key] = key);
    }.bind(this));
};

Generator.prototype.writePackageFiles = function writePackageFiles() {
    this.template('root/.gitignore', '.gitignore');
    this.template('root/.editorconfig', '.editorconfig');
    this.template('root/tsconfig.json', 'tsconfig.json');
    this.template('root/_license', 'license', {
        license: this.license,
        year: new Date().getFullYear(),
        owner: '<copyright holders>'
    });

    this.template('root/_package.json', 'package.json', {
        appname: this.appname,
        license: this.license,
        webpack: this.webpack,
        systemjs: this.systemjs
    });

    this.template('root/_readme.md', 'readme.md', {
        appname: this.appname,
        license: this.license,
        pkg: this.pkg
    });

    this.template('root/_tslint.json', 'tslint.json', {
        appname: this.appname
    });

    this.template('root/_typings.json', 'typings.json', {
        appname: this.appname
    });

    if(this.systemjs) {
        let additionalPackages = [];

        this.angularPackages.forEach(function(p) {
            additionalPackages[p] = p;
        });

        this.template('root/systemjs.config.js', 'src/systemjs.config.js', {
            additionalPackages: additionalPackages
        });

        this.template('root/bs-config.json', 'bs-config.json');
    }

    if(this.webpack) {
        this.template('root/webpack.config.js', 'webpack.config.js');
        this.template('root/config/helpers.js', 'config/helpers.js');
        this.template('root/config/webpack.common.js', 'config/webpack.common.js');
        this.template('root/config/webpack.dev.js', 'config/webpack.dev.js');
        this.template('root/config/webpack.prod.js', 'config/webpack.prod.js');

        this.template('src/polyfills.ts', 'src/polyfills.ts');
        this.template('src/vendor.ts', 'src/vendor.ts');
    }

    this.template('src/index.html', 'src/index.html', {
        appname: this.appname,
        webpack: this.webpack,
        systemjs: this.systemjs,
        bootstrap: this.bootstrap
    });

    this.template('src/main.ts', 'src/main.ts');

    this.template('src/app/app.component.ts', 'src/app/app.component.ts');
    this.template('src/app/app.component.html', 'src/app/app.component.html');

    this.template('src/app/home/home.component.ts', 'src/app/home/home.component.ts');
    this.template('src/app/home/home.component.html', 'src/app/home/home.component.html');

    this.template('src/app/about/about.component.ts', 'src/app/about/about.component.ts');
    this.template('src/app/about/about.component.html', 'src/app/about/about.component.html');
};

Generator.prototype.installDependencies = function installDependencies() {
    let libraries = require('./libraries');
    let dependencies = _.union(libraries.angularDependencies, libraries.angularPackages);

    Object.keys(this.angularPackages).forEach(key => dependencies.push(key));

    if(this.bootstrap) {
        dependencies.push(this.bootstrap);
    }

    this.npmInstall(dependencies, { 'save': true });
};
