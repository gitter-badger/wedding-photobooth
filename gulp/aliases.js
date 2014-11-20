'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var deploy = require('gulp-gh-pages');

gulp.task('install', ['bower:install']);

/**
 * Start up Server
 */
gulp.task('server', function() {
  gulp.start('local');
});

/**
 * Deploy
 */
gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});
