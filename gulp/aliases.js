'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var deploy = require('gulp-gh-pages');

gulp.task('install', ['bower:install']);

/**
 * Start up server
 */
gulp.task('server', function() {
  gulp.start('local');
});

/**
 * Deploy for gh-pages branch
 */
gulp.task('deploy', ['build'], function() {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});

/**
 * Build this site
 */
gulp.task('build', function(done) {
  runSequence(
    'clean',
    'install',
    'contrib:build',
    done
  );
});

/**
 * Local bulid this site
 */
gulp.task('local', function(done) {
  runSequence(
    'clean',
    'install',
    'connect:local',
    'watch',
    'open:local',
    done
  );
});
