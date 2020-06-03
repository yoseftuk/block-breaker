const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

gulp.task('browserify', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/index.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .transform('uglifyify')
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('dist'));
});
gulp.task('media', () => (
        gulp.src('src/media/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/media'))
));
gulp.task('html', () => (
    gulp.src('src/*.html')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
));

gulp.task('default', gulp.series([
    'browserify',
    'media',
    'html'
]));

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', gulp.series(['browserify']));
    gulp.watch('src/media/*', gulp.series(['media']));
    gulp.watch('src/*.html', gulp.series(['html']));
});

