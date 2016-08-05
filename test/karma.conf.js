//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: '../',

    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-websocket/dist/angular-websocket.js',
      'bower_components/angularjs-datepicker/dist/angular-datepicker.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower

      //Main App
      'app/scripts/app.js',
      'app/scripts/router.js',

      // Module definitions
      'app/scripts/**/*-module.js',

      // All Source files
      'app/scripts/**/*.js',

      //Test files
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    reporters: [],
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'report/coverage-report/'
    },

    junitReporter: {
      outputDir: 'report',
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
