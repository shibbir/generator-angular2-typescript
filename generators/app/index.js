'use strict';

let Generator = require('yeoman-generator');
let yosay = require('yosay');
let path = require('path');
let _ = require('lodash');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
        this.log(yosay('Hello, and welcome to angular2-typescript generator!'));
        this.argument('appname', { type: String, required: false });

        this.sourceRoot(path.join(__dirname, 'templates'));

        this.data = {
            appname: _.kebabCase(this.appname || path.basename(process.cwd())),
            gulp: null,
            jquery: null,
            bootstrap: null,
            foundation: null,
            webpack: null,
            systemjs: null,
            ngPackages: []
        };
    }

    prompting() {
        let done = this.async();

        let prompts = [
            {
                type    : 'list',
                name    : 'css',
                message : 'Which CSS framework would you like to use?',
                choices : [{
                    value   : 'none',
                    name    : 'None',
                    checked : true
                }, {
                    value   : 'bootstrap',
                    name    : 'Bootstrap',
                    checked : false
                }, {
                    value   : 'foundation',
                    name    : 'Foundation',
                    checked : false
                }]
            },
            {
                type    : 'list',
                name    : 'moduleLoader',
                message : 'Which module loader would you like to use?',
                choices: [{
                    value   : 'webpack',
                    name    : 'Webpack',
                    checked : true
                }, {
                    value   : 'systemjs',
                    name    : 'SystemJS',
                    checked : false
                }]
            },
            {
                when: function (response) {
                    if(response.moduleLoader === 'webpack') {
                        return true;
                    }
                    return false;
                },
                type    : 'confirm',
                name    : 'gulp',
                message : 'Would you like to use Gulp?'
            },
            {
                type    : 'checkbox',
                name    : 'angularPackages',
                message : 'Which additional angular packages would you like to include?',
                choices: [{
                    value   : 'ngForms',
                    name    : '@angular/forms',
                    checked : false
                }, {
                    value   : 'ngHttp',
                    name    : '@angular/http',
                    checked : false
                }]
            }
        ];

        this.prompt(prompts).then(function(answers) {
            if(answers.css === 'bootstrap') {
                this.data.jquery = true;
                this.data.bootstrap = true;
            } else if(answers.css === 'foundation') {
                this.data.jquery = true;
                this.data.foundation = true;
            }

            if(answers.moduleLoader === 'webpack') {
                this.data.webpack = true;

                if(answers.gulp) {
                    this.data.gulp = true;
                }
            } else if(answers.moduleLoader === 'systemjs') {
                this.data.systemjs = true;
                this.data.gulp = true;
            }

            answers.angularPackages.forEach(p => this.data.ngPackages[p] = p);

            done();
        }.bind(this));
    }

    configuring() {
        this.fs.copyTpl(this.templatePath('root/_package.json'), this.destinationPath('package.json'), this.data);
        this.fs.copyTpl(this.templatePath('root/gitignore'), this.destinationPath('.gitignore'));
        this.fs.copyTpl(this.templatePath('root/gitattributes'), this.destinationPath('.gitattributes'));
        this.fs.copyTpl(this.templatePath('root/.editorconfig'), this.destinationPath('.editorconfig'));
        this.fs.copyTpl(this.templatePath('root/tsconfig.json'), this.destinationPath('tsconfig.json'));
        this.fs.copyTpl(this.templatePath('root/_tslint.json'), this.destinationPath('tslint.json'));
        this.fs.copyTpl(this.templatePath('root/config/helpers.js'), this.destinationPath('config/helpers.js'));
        this.fs.copyTpl(this.templatePath('root/protractor.conf.js'), this.destinationPath('protractor.conf.js'));
        this.fs.copyTpl(this.templatePath('root/config/protractor.conf.js'), this.destinationPath('config/protractor.conf.js'));
    }

    default() {
        this.composeWith(require.resolve('generator-license/app'));
        this.composeWith(require.resolve('../readme'));
    }

    writing() {
        if(this.data.systemjs) {
            this.fs.copyTpl(this.templatePath('systemjs/systemjs.config.js'), this.destinationPath('src/systemjs.config.js'), this.data);
            this.fs.copyTpl(this.templatePath('systemjs/gulpfile.js'), this.destinationPath('gulpfile.js'), this.data);
            this.fs.copyTpl(this.templatePath('src/main.ts'), this.destinationPath('src/app/main.ts'), this.data);
        }

        if(this.data.webpack) {
            this.fs.copyTpl(this.templatePath('webpack/karma.conf.js'), this.destinationPath('karma.conf.js'));
            this.fs.copyTpl(this.templatePath('webpack/config/karma-test-shim.js'), this.destinationPath('config/karma-test-shim.js'));

            this.fs.copyTpl(this.templatePath('webpack/webpack.config.js'), this.destinationPath('webpack.config.js'));
            this.fs.copyTpl(this.templatePath('webpack/config/webpack.common.js'), this.destinationPath('config/webpack.common.js'), this.data);
            this.fs.copyTpl(this.templatePath('webpack/config/webpack.dev.js'), this.destinationPath('config/webpack.dev.js'));
            this.fs.copyTpl(this.templatePath('webpack/config/webpack.prod.js'), this.destinationPath('config/webpack.prod.js'));
            this.fs.copyTpl(this.templatePath('webpack/config/webpack.test.js'), this.destinationPath('config/webpack.test.js'));

            this.fs.copyTpl(this.templatePath('webpack/polyfills.ts'), this.destinationPath('src/polyfills.ts'));
            this.fs.copyTpl(this.templatePath('webpack/vendor.ts'), this.destinationPath('src/vendor.ts'), this.data);
            this.fs.copyTpl(this.templatePath('src/main.ts'), this.destinationPath('src/main.ts'), this.data);

            if(this.data.gulp) {
                this.fs.copyTpl(this.templatePath('webpack/gulpfile.js'), this.destinationPath('gulpfile.js'));
            }
        }

        this.fs.copyTpl(this.templatePath('src/index.html'), this.destinationPath('src/index.html'), this.data);
        this.fs.copyTpl(this.templatePath('src/css/main.css'), this.destinationPath('src/css/main.css'));

        this.fs.copyTpl(this.templatePath('src/app/app.component.ts'), this.destinationPath('src/app/app.component.ts'), this.data);
        this.fs.copyTpl(this.templatePath('src/app/app.module.ts'), this.destinationPath('src/app/app.module.ts'), this.data);
        this.fs.copyTpl(this.templatePath('src/app/app.routing.ts'), this.destinationPath('src/app/app.routing.ts'));
        this.fs.copyTpl(this.templatePath('src/app/app.component.html'), this.destinationPath('src/app/app.component.html'));
        this.fs.copyTpl(this.templatePath('src/app/app.component.e2e.ts'), this.destinationPath('src/app/app.component.e2e.ts'));
        this.fs.copyTpl(this.templatePath('src/app/app.component.spec.ts'), this.destinationPath('src/app/app.component.spec.ts'));

        this.fs.copyTpl(this.templatePath('src/app/home/home.component.ts'), this.destinationPath('src/app/home/home.component.ts'), this.data);
        this.fs.copyTpl(this.templatePath('src/app/home/home.component.html'), this.destinationPath('src/app/home/home.component.html'));
        this.fs.copyTpl(this.templatePath('src/app/home/home.component.e2e.ts'), this.destinationPath('src/app/home/home.component.e2e.ts'));
        this.fs.copyTpl(this.templatePath('src/app/home/home.component.spec.ts'), this.destinationPath('src/app/home/home.component.spec.ts'));

        this.fs.copyTpl(this.templatePath('src/app/about/about.component.ts'), this.destinationPath('src/app/about/about.component.ts'), this.data);
        this.fs.copyTpl(this.templatePath('src/app/about/about.component.html'), this.destinationPath('src/app/about/about.component.html'));
        this.fs.copyTpl(this.templatePath('src/app/about/about.component.e2e.ts'), this.destinationPath('src/app/about/about.component.e2e.ts'));
        this.fs.copyTpl(this.templatePath('src/app/about/about.component.spec.ts'), this.destinationPath('src/app/about/about.component.spec.ts'));
    }

    install() {
        this.installDependencies({
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install'],
            bower: false,
            npm: true
        });
    }
}
