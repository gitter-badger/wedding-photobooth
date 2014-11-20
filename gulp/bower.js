'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower:install', function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('./src/lib/'));
});
