const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

// Compile SCSS to CSS
function styles() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Process JavaScript with Webpack and Babel
function scripts() {
    return gulp.src('src/js/main.js')
        .pipe(webpack({ mode: 'production' }))
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Copy HTML to dist
function html() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

// Watch files and reload browser
function watch() {
    browserSync.init({ server: { baseDir: 'dist' } });
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/index.html', html);
}

// Build task
const build = gulp.series(gulp.parallel(styles, scripts, html));

// Default task
exports.default = gulp.series(build, watch);
exports.build = build;
