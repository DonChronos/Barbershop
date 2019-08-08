const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');


function style() {
	return gulp.src('source/scss/style.scss')
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest('build/css'))
		.pipe(minify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: 'build'
		}
	});
	gulp.watch('source/scss/style.scss', style);
	gulp.watch('build/*.html').on('change', browserSync.reload);
	gulp.watch('source/js/*.js').on('change', browserSync.reload);
}

function images() {
	return gulp.src('source/img/**/*.{png,jpg,svg}')
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('build/img'));
}

function htmlminify() {
	return gulp.src('build/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

function pugify() {
	return gulp.src('source/*.pug')
    .pipe(pug({
		doctype: 'html',
		pretty: false
	}))
    .pipe(gulp.dest('build'));
}

function js() {
	return gulp.src('source/js/*.js')
	//add minifier
	.pipe(gulp.dest('build/js'));
}

exports.pugify = pugify;
exports.style = style;
exports.watch = watch;
exports.js = js;