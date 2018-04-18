const $ = require('gulp-load-plugins')();
const config = require('./config');
module.exports = gulp => {
	gulp.task('cleanWp', () => {
		return gulp
			.src(config.path.wp + '*', {
				read: false,
			})
			.pipe($.clean({
				force: true
			}));
	});
	gulp.task('clean', () => {
		return gulp
			.src(config.path.dist + '*', {
				read: false
			})
			.pipe($.clean());
	});
};
