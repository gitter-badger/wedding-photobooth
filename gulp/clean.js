'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

/**
 * Clean
 */
gulp.task('clean', ['clean:css']);
gulp.task('clean:css', function() {
  return gulp.src('./public/css', {
      read: false
    })
    .pipe(rimraf({
      force: true
    }));
});
