'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');
let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let stylesheetTask = require('./tasks/stylesheet');
let liveReloadTask = require('./tasks/livereload');
let cleanTask = require('./tasks/clean');

gulp.task('livereload', liveReloadTask());
gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-stylesheet', stylesheetTask(false));

gulp.task('client-stylesheet-watch', function() {
  gulp.watch(['client/boot.less', 'client/**/*.html','client/**/*.less','client/**/*.css'], ['client-copy','client-stylesheet']);
});

gulp.task('clean', cleanTask());

gulp.task('serve', function(done) {
  runSequence('clean',['client-build', 'client-copy', 'client-stylesheet', 'client-stylesheet-watch'],'serve',done)
});
