const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
gulp.task('default', function() {
  nodemon({ script : './server.js', ext : 'js' });
});