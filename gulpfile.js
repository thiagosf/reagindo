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
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest('./public/css'));
});
gulp.task('sass:watch', function () {
  return gulp.watch('sass/*.sass', ['sass']);
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src('./src/index.coffee', { read: false })
    .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/build'));
});
gulp.task('scripts:watch', function() {
  return gulp.watch(['src/*.coffee', 'src/**/*.coffee'], ['scripts']);
});

// Minify
gulp.task('compress', function() {
  gulp.src('./public/build/*.js')
    .pipe(minify({
      ext: { min:'.min.js' }
    }))
    .pipe(gulp.dest('./public/build'))
});

// Webserver
gulp.task('webserver', ['sass:watch', 'scripts:watch'], function () {
  return gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// Default 
gulp.task('default', ['sass', 'scripts', 'compress']);