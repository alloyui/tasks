'use strict';

var concat = require('gulp-concat');
var gulp = require('gulp');
var normalizeOptions = require('../options');
var sass = require('gulp-sass');

module.exports = function(options) {
	options = normalizeOptions(options);
	var taskPrefix = options.taskPrefix;

	gulp.task(taskPrefix + 'css', function() {
		var sassOpts = {
			includePaths: options.scssIncludePaths
		};
		return gulp.src([options.scssSrc, options.cssSrc])
			.pipe(sass(sassOpts).on('error', function(err) {
				sass.logError(err);
				this.emit('end');
			}))
			.pipe(concat(options.bundleCssFileName))
			.pipe(gulp.dest('build'));
	});
};