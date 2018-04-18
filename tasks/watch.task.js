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
		gulp.watch(config.glob.content, [
			'watch-html',
		  ]);
		gulp.watch(config.glob.srcOthers, [
			'watch-others',
		  ]);
	});

	gulp.task('watch-style', done => {
		runSequence(
			'style',
			'watch-wp',
			'browser-sync-reload',
			"sass-lint",
			done
		);
	});
	gulp.task('watch-javascript', done => {
		runSequence(
			'javascript',
			'watch-wp',
			'browser-sync-reload',
			"javascript-lint",
			done
		);
	});
	gulp.task('watch-html', done => {
		runSequence(
			'html',
			'watch-wp',
			'browser-sync-reload',
			done
		);
	});
	gulp.task('watch-others', done => {
		runSequence(
			'html',
			'javascript',
			'style',
			'watch-wp',
			'browser-sync-reload',
			done
		);
	});
	gulp.task('watch-wp', done => {
		if (config.wp.on) {
			runSequence(
				'cleanWp',
				'copyToWp',
				done
			)
		}
	})
}
