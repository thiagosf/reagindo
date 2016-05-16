'use strict';

// Modulos 
var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

// Sass
gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', gutil.log))
    .pipe(gulp.dest('public/css'));
});
gulp.task('sass:watch', function () {
  return gulp.watch(['sass/*.sass', 'sass/**/*.sass'], ['sass']);
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src('./src/app.coffee', { read: false })
    .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/js'));
});
gulp.task('scripts:watch', function() {
  return gulp.watch(['src/*.coffee', 'src/**/*.coffee'], ['scripts']);
});

// Minify
gulp.task('compress', ['scripts'], function() {
  return gulp.src('public/js/*.js')
    .pipe(minify({
      ext: { min:'.min.js' }
    }))
    .pipe(gulp.dest('public/js'))
});

// Webserver
gulp.task('webserver', ['sass:watch', 'scripts:watch'], function () {
  return gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Default 
gulp.task('default', ['sass', 'compress']);
