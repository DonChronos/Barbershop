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
		.pipe(sass().on('error', sass.logErorr))
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest('build/css'))
		.pipe(minify())
		.pipe(rename('style.min.css'))
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
	return gulp.src('build/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

exports.pugify = pugify;
exports.style = style;
exports.watch = watch;