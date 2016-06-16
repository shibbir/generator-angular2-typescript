'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    prompting: function () {

        return this.prompt([{
            type    : 'confirm',
            name    : 'sass',
            message : 'Would you like to use Saas?'
        }, {
            type    : 'list',
            name    : 'css-frameworks',
            message : 'Which CSS framework would you like to include?',
            choices: [{
                value   : 'Bootstrap',
                name    : 'bootstrap.js',
                checked : true
            }, {
            value   : 'Foundation',
            name    : 'foundation.js',
            checked : false
            }]
        }, {
            type    : 'checkbox',
            name    : 'feature-packages',
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
            this.log(answers);
        }.bind(this));
    },

    installDependencies: function() {
        this.npmInstall([
            '@angular/core',
            '@angular/common',
            '@angular/compiler',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'core-js',
            'reflect-metadata',
            'rxjs',
            'zone.js'
        ], { 'save': true });
    }
});
