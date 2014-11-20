'use strict';

var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('open:local', function() {
  return gulp.src('./public/index.html').pipe(open('', {
    url: 'http://localhost:2000'
  }));
});
