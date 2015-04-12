var del = require('del');
var gulp = require('gulp');
var react = require('gulp-react');
var source = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task('clean', function(cb) {
    return del([
        './.build',
        './examples/example.bundle.js'
    ], cb);
});

gulp.task('react', [ 'clean' ], function() {
    return gulp.src('./@(examples|src)/**/*.@(js|jsx)')
        .pipe(react())
        .pipe(gulp.dest('./.build'));
});

gulp.task('default', [ 'react' ], function() {
    return browserify('./.build/examples/example.js')
        .bundle()
        .pipe(source('example.bundle.js'))
        .pipe(gulp.dest('./examples'));
});
