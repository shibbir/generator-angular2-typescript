'use strict';

var cssFrameworks = [
    'bootstrap',
    'foundation'
];

var webpack = [
    'webpack',
    'webpack-server'
];

var systemjs = [
    'systemjs'
];

var angularDependencies = [
    'core-js',
    'reflect-metadata',
    'rxjs',
    'zone.js'
];

var angularPackages = [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
];

module.exports = {
    webpack: webpack,
    systemjs: systemjs,
    cssFrameworks: cssFrameworks,
    angularPackages: angularPackages,
    angularDependencies: angularDependencies
};
