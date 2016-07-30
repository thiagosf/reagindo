'use strict';

// Modulos 
import gulp from 'gulp';
import sass from 'gulp-sass';
import webserver from 'gulp-webserver';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import minify from 'gulp-minify';
import babel from "gulp-babel";
import babelify from 'babelify';
import browserify from 'browserify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import { assign } from 'lodash';

// Configuration for Gulp
const config = {
  js: {
    src: './src/index.jsx',
    watch: ['./src/**/*', './src/**/**/*'],
    outputDir: './public/js/',
    outputFile: 'app.js',
  },
  css: {
    watch: ['./sass/**/*'],
    outputDir: './public/css/',
  }
};

// Scripts
function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.js.outputFile))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.outputDir));
}
const customOpts = {
  entries: [config.js.src],
  debug: true,
  extensions: ['.jsx']
};
const opts = assign({}, watchify.args, customOpts);
let b = watchify(browserify(opts), { poll: true });
b.transform(babelify);
b.on('update', bundle);
b.on('log', gutil.log);
gulp.task('scripts', bundle);

// Sass
gulp.task('sass', () => {
  return gulp.src(config.css.watch)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', gutil.log))
    .pipe(gulp.dest(config.css.outputDir));
});
gulp.task('sass:watch', () => {
  return gulp.watch(config.css.watch, ['sass']);
});

// Minify
gulp.task('compress', ['scripts'], () => {
  return gulp.src(config.js.outputDir + config.js.outputFile)
    .pipe(minify({
      ext: { min:'.min.js' }
    }))
    .pipe(gulp.dest(config.js.outputDir))
});

// Webserver
gulp.task('ws', ['sass', 'sass:watch', 'scripts'], () => {
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
