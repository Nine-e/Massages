var gulp = require('gulp');
var cssmin = require('gulp-minify-css');

gulp.task('default', function() {
    return gulp.src('css/*.css') //源文件路径
        .pipe(cssmin()) //css压缩
        .pipe(gulp.dest('css')) //目的路径
});
