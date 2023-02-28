import ghPages from 'gulp-gh-pages'

export const ghDeploy = () => {
  app.gulp.task('ghDeploy', function() {
    return gulp.src(`${app.path.buildFolder}/**/*.*`, {})
      .pipe(ghPages());
  });
}