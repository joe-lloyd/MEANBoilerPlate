'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
	return gulp.src('./assets/globbed/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('assets/'));
});

gulp.task('js', function(){
	return gulp.src([ './app/main-module.js', './app/routes.js', './app/**/*.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('.'))
	.pipe(uglify({mangle: false}))
	.pipe(gulp.dest('.'));
});

gulp.task('default', function() {
	gulp.watch('./assets/**/*.scss', ['sass']);
	gulp.watch('./app/**/*.js', ['js']);
});
