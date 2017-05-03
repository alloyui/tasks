'use strict';

var gulp = require('gulp');
var path = require('path');
var karma = require('karma');

function normalizeOptions(options) {
	var codeGlobs = ['src/**/*.js', '!src/**/*.soy.js', 'test/**/*.js', 'gulpfile.js'];

	options = options || {};
	options.buildAmdDest = options.buildAmdDest || 'build/amd';
	options.buildGlobalsJqueryDest = options.buildGlobalsJqueryDest || 'build/globals-jquery';
	options.buildAmdJqueryDest = options.buildAmdJqueryDest || 'build/amd-jquery';
	options.buildJqueryDest = options.buildJqueryDest || 'build/jquery';
	options.bundleCssFileName = options.bundleCssFileName || 'all.css';
	options.bundleFileName = options.bundleFileName || 'metal.js';
	options.buildDest = options.buildDest || 'build/globals';
	options.buildSrc = options.buildSrc || 'src/**/*.js';
	options.cleanDir = options.cleanDir || 'build';
	options.complexityDest = options.complexityDest || 'artifacts/plato';
	options.complexityGlobs = options.complexityGlobs || codeGlobs;
	options.complexityParserOptions = options.complexityParserOptions || {
		ecmaVersion: 6,
		loc: true,
		newmi: true,
		range: true,
		sourceType: 'module'
	};
	options.complexityThreshold = options.complexityThreshold || {
		breakOnError: true,
		cyclomatic: 3,
		halstead: 8
	};
	options.cssDest = options.cssDest || 'build';
	options.cssSrc = options.cssSrc || 'src/**/*.css';
	options.formatGlobs = options.formatGlobs || codeGlobs;
	options.globalName = options.globalName || 'metal';
	options.gulp = options.gulp || gulp;
	options.jsDocConfFile = options.jsDocConfFile || path.resolve(__dirname, '../jsdoc.json');
	options.karma = options.karma || karma;
	options.lintGlobs = options.lintGlobs || codeGlobs;
	options.uglifySrc = options.uglifySrc || 'build/**/*.js';
	options.moduleName = options.moduleName || 'metal';
	options.noSoy = options.noSoy || false;
	options.sauceLabs = Object.assign({
		connectOptions: {
			port: 5757,
			logfile: 'sauce_connect.log'
		},
		startConnect: true,
		recordScreenshots: false,
		recordVideo: false,
		testName: options.moduleName + ' tests'
	}, options.sauceLabs);
	options.scssIncludePaths = options.scssIncludePaths || ['node_modules'];
	options.scssSrc = options.scssSrc || 'src/**/*.scss';
	options.soyDest = options.soyDest || 'src';
	options.soyDeps = options.soyDeps || 'node_modules/metal*/src/**/*.soy';
	options.soyLocales = options.soyLocales;
	options.soyMessageFilePathFormat = options.soyMessageFilePathFormat;
	options.soySrc = options.soySrc || 'src/**/*.soy';
	options.taskPrefix = options.taskPrefix || '';
	options.mainBuildJsTasks = options.mainBuildJsTasks || [options.taskPrefix + 'build:globals:js'];
	options.testBrowsers = options.testBrowsers || ['Chrome', 'Firefox', 'Safari', 'IE9 - Win7', 'IE10 - Win7', 'IE11 - Win7'];
	options.testDepTasks = options.testDepTasks || [options.taskPrefix + 'soy'];
	options.testNodeSrc = options.testNodeSrc || 'test/**/*.js';
	options.testSaucelabsBrowsers = options.testSaucelabsBrowsers || {
		sl_chrome: {
			base: 'SauceLabs',
			browserName: 'chrome'
		},
		sl_safari: {
			base: 'SauceLabs',
			browserName: 'safari'
		},
		sl_firefox: {
			base: 'SauceLabs',
			browserName: 'firefox'
		},
		sl_ie_9: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '9'
		},
		sl_ie_10: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '10'
		},
		sl_ie_11: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 8.1',
			version: '11'
		},
		sl_edge_13: {
			base: 'SauceLabs',
			browserName: 'microsoftedge',
			platform: 'Windows 10',
			version: '13'
		},
		sl_iphone: {
			appiumVersion: '1.6.0',
			base: 'SauceLabs',
			browserName: 'Safari',
			deviceName: 'iPhone 6 Simulator',
			deviceOrientation: 'portrait',
			platformName: 'iOS',
			platformVersion: '9.3'
		},
		sl_android_4: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '4.4'
		},
		sl_android_5: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '5.0'
		}
	};
	options.useEslint = options.useEslint || false;

	return options;
}

module.exports = normalizeOptions;
