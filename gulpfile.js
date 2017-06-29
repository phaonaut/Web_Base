const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixer', function() {
  gulp.src('css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task("compileSass", function() {
  gulp.src("scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'));
});

//prefixer only
gulp.task('watchPrefixer', function() {
  gulp.watch('css/style.css', ['prefixer']);
});

//complile sass only
gulp.task('watchSass', function() {
  gulp.watch(['scss/**/*.scss'], ['compileSass']);
});

//both-this watches for scss changes then autoprefixes css
gulp.task('watchAll', function() {
  gulp.watch(['scss/**/*.scss'], ['compileSass']);
  gulp.watch('css/style.css', ['prefixer']);
});