'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 2000,
    root: './'
  });
});
