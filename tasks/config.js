module.exports = {
    glob: {
        src: "./src/**/*",
        dist: "./dist/**/*",
        srcOthers: "./src/**/*.{png,jpg,svg,ttf}",
        scss: './src/**/*.scss',
        js: './src/**/*.js',
        content: './src/**/*.html',
        fonts: './src/fonts/**/*',
        fontsLib: './node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*',
        img: './src/img/**/*',
    },
    entryPoint: {
        scss: './src/scss/style.scss'
    },
    path: {
        css: './dist/css/',
        js: './dist/js/',
        dist: './dist/',
        fonts: './dist/fonts/',
        fontsLib: './dist/fonts/bootstrap/',
        vector: './dist/img/',
        img: './dist/img/',
        wp: './../../wordpress/apps/wordpress/htdocs/wp-content/themes/myTherme/',
        file: {
            css: "./css/app.css",
            cssMin: "./css/app.min.css",
            jsLib: "./js/assets.min.js",
            js: "./js/app.js",
            jsMin: "./js/app.min.js",
        },
    },
    concatOrder: {
        js: './src/**/*.js',
        jsLib: [
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/popper.js/dist/umd/popper.min.js",
                "./node_modules/bootstrap/dist/js/bootstrap.min.js",
				]
    },
    name: {
        js: "app.js",
        jsMin: "app.min.js",
        jsMinLib: "assets.min.js",
        css: "app.css",
        cssMin: "app.min.css",
    },
    unCssIgnore: [/\.affix/,
    /\.alert/,
    /\.close/,
    /\.collaps/,
    /\.fade/,
    /\.has/,
    /\.help/,
    /\.in/,
    /\.modal/,
    /\.open/,
    /\.popover/,
    /\.tooltip/],
    wp: {
        on: false,
        glob: {
            content: './src/**/*.php',
        },
        path: {
            css: "./dist/",
            file: {
                css: "./style.css",
                cssMin: "./style.css",
                jsLib: "./js/assets.min.js",
                js: "./js/app.js",
                jsMin: "./js/app.min.js",
            }
        },
        name: {
            css: "style.css",
        },
        browsersync: {
            proxy: "localhost:8080"
        },
    },
    browsersync: {
        server: {
            baseDir: './dist/',
        },
        stream: true,
    },
};
