var gulp = require('gulp')
	,imagemin = require('gulp-imagemin');


gulp.task('build-img', function() {
	gulp.src('images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images'));
});