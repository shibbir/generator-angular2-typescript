var helpers = require('./helpers');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/chrome',
    filename: 'htmlReport.html',
    showQuickLinks: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "E2E Report"
});

exports.config = {
    baseUrl: 'http://localhost:3000/',

    specs: [
        helpers.root('src/**/*.e2e.ts')
    ],

    exclude: [],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false
    },

    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    },

    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        browser.ignoreSynchronization = false;

        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    useAllAngular2AppRoots: true
};
