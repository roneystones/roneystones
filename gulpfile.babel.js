'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
const $ = gulpLoadPlugins();

// Delete the _site directory.
gulp.task('cleanup-build', () => {
    return gulp.src('_site', { read: false })
        .pipe($.clean());
});

// Minify the HTML.
gulp.task('minify-html', () => {
    return gulp.src('_site/**/*.html')
        .pipe($.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeOptionalTags: true
        }))
        .pipe(gulp.dest('_site'));
});

// Optimize images.
gulp.task('minify-images', () => {
    gulp.src('assets/images/**/*')
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('_site/assets/images'));
});

// Concatenate, transpiles ES2015 code to ES5 and minify JavaScript.
gulp.task('scripts', () => {
    gulp.src([
            // Note: You need to explicitly list your scripts here in the right order
            //       to be correctly concatenated
            './_scripts/main.js'
        ])
        .pipe($.concat('main.min.js'))
        .pipe($.babel())
        .pipe($.uglify())
        .pipe(gulp.dest('assets/scripts'));
});

// Minify and add prefix to css.
gulp.task('css', () => {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

    return gulp.src('assets/css/main.css')
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe($.cssnano())
        .pipe(gulp.dest('_site/assets/css'));
});

// Compile scss to css.
gulp.task('scss', () => {
    return gulp.src('_scss/main.scss')
        .pipe($.sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(gulp.dest('assets/css'));
});

// Watch change in files.
gulp.task('serve', ['jekyll-build'], () => {
    browserSync.init({
        notify: false,
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: '_site',
        port: 3000
    });

    // Watch html changes.
    gulp.watch([
        'assets/css/**/*.css',
        'assets/scripts/**/*.js',
        '_includes/**/*.html',
        '_layouts/**/*.html',
        '_pages/**/*.html',
        '_projects/**/*.html',
        '_posts/**/*.md',
        'index.html'
    ], ['jekyll-build', browserSync.reload]);

    // Watch scss changes.
    gulp.watch('_scss/**/*.scss', ['scss']);

    // Watch JavaScript changes.
    gulp.watch('_scripts/**/*.js', ['scripts']);
});


gulp.task('fix-config', () => {
    gulp.src('_config.yml')
        .pipe($.replace('baseurl: ""', 'baseurl: ""'))
        .pipe($.clean())
        .pipe(gulp.dest('.'));
});

gulp.task('revert-config', () => {
    gulp.src('_config.yml')
        .pipe($.replace('baseurl: ""', 'baseurl: ""'))
        .pipe($.clean())
        .pipe(gulp.dest('.'));
});

gulp.task('jekyll-build', ['scripts', 'scss'], $.shell.task(['jekyll build']));

gulp.task('jekyll-build-for-deploy', $.shell.task(['jekyll build']));

// Default task.
gulp.task('build', () =>
    runSequence(
        'fix-config',
        'cleanup-build',
        'scss',
        'scripts',
        'jekyll-build-for-deploy',
        'minify-html',
        'css',
        'minify-images',
        'revert-config'
    )
);

// Deploy website to gh-pages.
gulp.task('gh-pages', () => {
    return gulp.src('./_site/**/*')
        .pipe($.ghPages());
});

gulp.task('deploy', () => {
    runSequence(
        'fix-config',
        'cleanup-build',
        'scss',
        'scripts',
        'jekyll-build-for-deploy',
        'minify-html',
        'css',
        'minify-images',
        'gh-pages',
        'revert-config'
    )
});