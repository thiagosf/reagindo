'use strict';

// Modulos 
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Configuration for Gulp
var config = {
  js: {
    src: './src/app.jsx',
    watch: ['./src/**/*'],
    outputDir: './public/js/',
    outputFile: 'app.js',
  },
};

// Gulp task for build
gulp.task('scripts', function() {
  return browserify({ entries: config.js.src, extensions: ['.jsx'] })
    .transform(babelify)
    .bundle()
    .pipe(source('app.jsx'))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.js.outputDir));
});
gulp.task('scripts:watch', function () {
  return gulp.watch(config.js.watch, ['scripts']);
});

// Sass
gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', gutil.log))
    .pipe(gulp.dest('public/css'));
});
gulp.task('sass:watch', function () {
  return gulp.watch(['sass/*.sass', 'sass/**/*.sass'], ['sass']);
});

// Minify
gulp.task('compress', ['scripts'], function() {
  return gulp.src('./public/js/app.js')
    .pipe(minify({
      ext: { min:'.min.js' }
    }))
    .pipe(gulp.dest('./public/js'))
});

// Webserver
gulp.task('webserver', ['sass:watch', 'scripts:watch'], function () {
  return gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

// Default 
gulp.task('default', ['sass', 'compress']);
