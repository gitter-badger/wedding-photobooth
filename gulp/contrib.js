'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

/**
 * Clean
 */
gulp.task('contrib:clean', ['contrib:clean:css', 'contrib:clean:js']);
gulp.task('contrib:clean:css', function() {
  return gulp.src('./public/css', {
      read: false
    })
    .pipe(rimraf({
      force: true
    }));
});
gulp.task('contrib:clean:js', function() {
  return gulp.src([
      './public/js/*.min.js',
      './public/lib/'
    ], {
      read: false
    })
    .pipe(rimraf({
      force: true
    }));
});
