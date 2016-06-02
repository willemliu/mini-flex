// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/**/mini-flex.scss')
        .pipe(sass({ compass: true, bundleExec: true, outputStyle: 'compressed', sourcemap: true, sourcemapPath: '/dist' }))
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', ['sass'], function() {
    gulp.watch('src/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);