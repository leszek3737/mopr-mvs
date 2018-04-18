const $ = require('gulp-load-plugins')();
const config = require('./config');
module.exports = gulp => {
	gulp.task('inject-assets', () => {
		return gulp.src(config.glob.content)
				.pipe($.htmlReplace({
					"css": config.path.file.css,
					"jsLib": config.path.file.jsLib,
					"jsLib": config.path.file.js,
				}))
				.pipe(gulp.dest(config.path.dist));
	});
	gulp.task('inject-assets:prod', () => {
		return gulp.src(config.glob.content)
				.pipe($.htmlReplace({
					"css": config.path.file.cssMin,
					"jsLib": config.path.file.jsLib,
					"jsLib": config.path.file.jsMin,
				}))
				.pipe($.stripComments())
				.pipe(gulp.dest(config.path.dist));
	});
	gulp.task(
		'html', [
      'inject-assets',
    ]
	);
	gulp.task(
		'html:prod', [
      'inject-assets:prod',
    ]
	);
};
