var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var exec = require('child_process').exec;

// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });


    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {
        cwd: 'app'
    }, reload);
});