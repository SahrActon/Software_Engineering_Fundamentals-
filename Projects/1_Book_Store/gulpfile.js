/**
 *
 * @type {*|Gulp}
 * // return allows you to be able to use to use the object as a sub stack
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jshint');

//File locations
var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint)
        .pipe(jshint).reporter('jshint-stylish',{
            verbose : true
        })
        .pipe(jscs());
});

// Gulp wiredep
gulp.task('inject', function () {
    var wiredep = require ('wiredep').stream;
    var options = {
        bowerJSON : require('./bower.json'),
        directory: './public/lib'
    };

    return gulp.src('./src/views/*.html') //pull all html files from the src
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});