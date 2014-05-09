var gulp         = require('gulp');
var utils        = require('gulp-util');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso         = require('gulp-csso');
var rename       = require('gulp-rename');
var exec         = require('child_process').exec;

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


gulp.task('default', function(){
    var tasks = Object.keys(gulp.tasks).sort();

    utils.log(utils.colors.yellow('You have the following tasks to run:'));
    tasks.forEach(function(t){
        if(t === 'default') return;
        utils.log(utils.colors.yellow('• gulp '+ t ));
    });
});
