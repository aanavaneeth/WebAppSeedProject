// Karma configuration
// Generated on Tue Sep 09 2014 17:38:01 GMT+0530 (India Standard Time)

module.exports = function (config) {
    "use strict";
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            "../WebApplication/lib/jquery/dist/jquery.js",
            "../WebApplication/lib/lodash/dist/lodash.js",
            "../WebApplication/lib/angular/angular.min.js",
            "../WebApplication/lib/bootstrap/dist/js/bootstrap.js",
            "lib/jasmine-jquery/lib/jasmine-jquery.js",
            "lib/angular-mocks/angular-mocks.js",
            "helpers/*.js",
            '../WebApplication/scripts/**/*.js',
            'specs/**/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage'],
        preprocessors: {
            '../WebApplication/scripts/**/*.js': 'coverage'
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // web server port
        port: 45001,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'PhantomJS'],////PhantomJS


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
