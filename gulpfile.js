var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('styles', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./template/css'));
});

gulp.task('watch', ['styles'], function() {
    gulp.watch('./sass/**/*.scss', ['styles']);

    return gulp.src('template')
        .pipe(webserver({
          livereload: true,
          open: true
        }));
});
