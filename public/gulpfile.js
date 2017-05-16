'use strict';

const gulp = require('gulp'),
      concat  = require('gulp-concat'),
      sass = require('gulp-ruby-sass'),
      autoprefixer = require('gulp-autoprefixer');


gulp.task('default',[] ,function(){
    gulp.start('styles','watch');
});


gulp.task('styles', function() {
    return sass('./scss/styles.scss', {
        style: 'expanded'
    })
    .pipe(autoprefixer())
    .pipe(gulp.dest('./scss'))
});


gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', ['styles'])
});
