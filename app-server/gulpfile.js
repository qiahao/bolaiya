let gulp = require('gulp')
let sass = require('gulp-sass')



gulp.task('style', function() {
	return gulp.src('web/src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('web/static/css'))
});

// gulp.task('javascript', function() {
// 	return gulp.src('web/src/js/**/*.js')
// 		.pipe(babel({
//             presets: ['env']
//         }))
// 		.pipe(gulp.dest('web/static/js'))
// });

gulp.task('watch', function () {
	// gulp.watch('web/**/*.js', ['javascript'])
	return gulp.watch('web/**/*.scss', ['style'])
});




gulp.task('default',['style','watch'])