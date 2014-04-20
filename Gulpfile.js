var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso         = require('gulp-csso');
var rename       = require('gulp-rename');

var config = {
    scss : ['./scss/main.scss', './scss/extras/ie.scss'],
    dest : './css'
};


gulp.task('sass', function(){
    return gulp.src(config.scss)
        .pipe(sass({
            style        : 'compressed',
            precision    : 3
        }))
        .pipe(autoprefixer('> 1%', 'last 1 version', 'ie 8', 'android 4', 'ios 6'))
        .pipe(csso())
        .pipe(rename({
            suffix  : '.min',
            extname : '.css'
        }))
        .pipe(gulp.dest(config.dest));
});


gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
});
