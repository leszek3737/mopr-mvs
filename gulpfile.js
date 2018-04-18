const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
$.loadSubtasks('tasks/**/*.task.js', $);
gulp.task('build::prod', done => {
	runSequence(
		'clean', [
		  	'style:prod',
		  	'javascript:prod'
		],
		'html:prod',
		'copy::prod',
		done
	);
});

gulp.task('build:WP:prod', done => {
	runSequence(
		'changeVariableForWP',
		'clean',
		'cleanWp',[
		  	'style:prod',
		  	'javascript:prod'
		],
		'html:prod',
		'copy::prod',
		'copyToWp',
		done
	);
});

gulp.task('build:WP', done => {
	runSequence(
		'changeVariableForWP',
		'clean',
		'cleanWp',[
			'style',
			'javascript'
		],
		'html',
		'copy',
		'copyToWp',
		'browser-sync',
		'watch',
		'lint',
		done
	);
});
gulp.task('build::optimized', ['sass:prodMin']);
gulp.task('default', done => {
	runSequence(
		'clean', [
			'style',
			'javascript'
		],
		'html',
		'copy',
		'browser-sync',
		'watch',
		'lint',
		done
	);
});
