'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect:local', function() {
  connect.server({
    port: 2000,
    root: './public/',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./public/*.html'], ['reload:html']);
});

gulp.task('reload:html', function() {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});
