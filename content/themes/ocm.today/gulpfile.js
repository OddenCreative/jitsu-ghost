/**
 * Created by oddencreative on 3/14/14.
 */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
//    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('default', function () {
    // place code for your default task here
    gulp.start('sass');
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', function () {
        gulp.run('sass');
    });
});

gulp.task('sass', function () {
    gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('clean', function () {
    return gulp.src(['assets/css', 'assets/js', 'assets/img'], {read: false})
        .pipe(clean());
});
