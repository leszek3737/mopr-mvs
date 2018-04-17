const config = require('./config');
const runSequence = require('run-sequence');
module.exports = gulp => {
	gulp.task('watch', () => {
		gulp.watch(config.glob.scss, [
        	'watch-style',
      	]);
		gulp.watch(config.glob.js, [
			'watch-javascript',
      	]);
		gulp.watch(config.glob.html, [
			'watch-html',
		  ]);
		gulp.watch(config.glob.srcOthers, [
			'watch-others',
		  ]);
	});
	gulp.task('watch-style', done => {
		runSequence(
			'style',
			'browser-sync-reload',
			"sass-lint",
			done
		);
	});
	gulp.task('watch-javascript', done => {
		runSequence(
			'javascript',
			'browser-sync-reload',
			"javascript-lint",
			done
		);
	});
	gulp.task('watch-html', done => {
		runSequence(
			'html',
			'browser-sync-reload',
			done
		);
	});
	gulp.task('watch-others', done => {
		runSequence(
			'html',
			'javascript',
			'style',
			'browser-sync-reload',
			done
		);
	});
}