'use strict';

let generators = require('yeoman-generator');
let yosay = require('yosay');
let path = require('path');
let _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    initializing: function() {
        this.log(yosay('Hello, and welcome to angular2-typescript generator!'));
        this.argument('appname', { type: String, required: false });
        this.appname = _.kebabCase(this.appname || path.basename(process.cwd()));

        this.sourceRoot(path.join(__dirname, 'templates'));

        this.angularPackages = [];
        this.webpack = null;
        this.systemjs = null;
        this.bootstrap = null;
    },

    prompting: function() {
        let done = this.async();

        let prompts = [
            {
                type    : 'confirm',
                name    : 'bootstrap',
                message : 'Would you like to use bootstrap?'
            },
            {
                type    : 'list',
                name    : 'moduleLoader',
                message : 'Which module loader would you like to use?',
                choices: [{
                    value   : 'webpack',
                    name    : 'webpack',
                    checked : true
                }]
            },
            {
                type    : 'checkbox',
                name    : 'angularPackages',
                message : 'Which additional angular packages would you like to include?',
                choices: [{
                    value   : '@angular/http',
                    name    : '@angular/http',
                    checked : false
                }]
            }
        ];

        this.prompt(prompts).then(function(answers) {
            this.bootstrap = answers.bootstrap ? 'bootstrap' : false;

            if(answers.moduleLoader === 'webpack') {
                this.webpack = true;
            } else if(answers.moduleLoader === 'systemjs') {
                this.systemjs = true;
            }

            this.angularPackages = answers.angularPackages;

            done();
        }.bind(this));
    },

    configuring: function() {
        this.template('root/gitignore', '.gitignore');
        this.template('root/gitattributes', '.gitattributes');
        this.template('root/.editorconfig', '.editorconfig');
        this.template('root/tsconfig.json', 'tsconfig.json');
        this.template('root/_tslint.json', 'tslint.json');
        this.template('root/_typings.json', 'typings.json');
        this.template('root/_package.json', 'package.json');
    },

    default: function() {
        this.composeWith('license', null, {
            local: require.resolve('generator-license/app')
        });

        this.composeWith('readme', null, {
            local: require.resolve('../readme')
        });
    },

    writing: function() {
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

        this.template('src/index.html', 'src/index.html');

        this.template('src/main.ts', 'src/main.ts');

        this.template('src/app/app.component.ts', 'src/app/app.component.ts');
        this.template('src/app/app.component.html', 'src/app/app.component.html');

        this.template('src/app/home/home.component.ts', 'src/app/home/home.component.ts');
        this.template('src/app/home/home.component.html', 'src/app/home/home.component.html');

        this.template('src/app/about/about.component.ts', 'src/app/about/about.component.ts');
        this.template('src/app/about/about.component.html', 'src/app/about/about.component.html');
    },

    conflicts: function() {},

    install: function() {
        this.installDependencies({
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install'],
            bower: false,
            npm: true
        });
    },

    end: function() {}
});
