var gulp         = require('gulp'),
    utils        = require('gulp-util'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso         = require('gulp-csso'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename');

var config = {
    scss: [ './scss/main.scss' ],
    dest: './css'
};

gulp.task('sass', function() {
    return gulp.src(config.scss)
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed',
            precision: 3
        }))
        .pipe(autoprefixer('> 1%', 'last 2 version', 'ie 9', 'android 4', 'ios 6'))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(gulp.dest(config.dest));
});

var feedback = function(event) {
  console.log( 'File '+ utils.colors.yellow(event.path) +' was '+ event.type );
};

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', [ 'sass' ]).on('change', feedback);
});

gulp.task('default', function() {
    var tasks = Object.keys(gulp.tasks).sort();

    utils.log(utils.colors.yellow('You have the following tasks to run:'));
    tasks.forEach(function(t) {
        if ( t === 'default' ) return;
        utils.log(utils.colors.yellow('• gulp '+ t ));
    });
});
