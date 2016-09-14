const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

gulp.task('default', ['styles', 'lint'], () =>{
  gulp.watch('client/sass/**/*.scss', ['styles'])
  gulp.watch('client/component/**/*.scss', ['lint'])
  console.log('hello gulp');
})

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  })
})
browserSync.stream();

gulp.task('styles', () => {
  gulp.src('client/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browers: ['last 2 versions'],
      }))
      .pipe(gulp.dest('./client/css'))
})