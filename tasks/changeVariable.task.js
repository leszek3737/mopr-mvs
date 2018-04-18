const $ = require('gulp-load-plugins')();
const config = require('./config');
module.exports = gulp => {
    gulp.task('changeVariableForWP', () => {
        config.glob.content = config.wp.glob.content;
        config.path.css = config.wp.path.css;
        config.path.file.css = config.wp.path.file.css;
        config.path.file.cssMin = config.wp.path.file.cssMin;
        config.path.file.js = config.wp.path.file.js;
        config.path.file.jsMin = config.wp.path.file.jsMin;
        config.path.file.jsLib = config.wp.path.file.jsLib;
        config.name.css = config.wp.name.css;
        config.browsersync = config.wp.browsersync;
        config.wp.on = true;
    });
};
