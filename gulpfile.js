var gulp = require('gulp');
var cssmin = require('gulp-clean-css');
var clean = require('gulp-clean');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    return gulp.src('css/*.css') //源文件路径
        .pipe(cssmin()) //css压缩
        .pipe(gulp.dest('css')) //目的路径
});
gulp.task('clean', function() {
    return gulp.src(['css/', 'js/'], { read: false })
               .pipe(clean());
});
gulp.task('less', function() {
    return gulp.src('less/*.less') //源文件路径
        .pipe(less()) //less编译
        .pipe(gulp.dest('css')) //目的路径
});
gulp.task('autoprefixe', function() {
    return gulp.src('src/css/*.css') //源文件路径
        .pipe(autoprefixer()) //自动前缀
        .pipe(gulp.dest('dist/css')) //目的路径
});
gulp.task('dev', function() {
    //初始化browser-sync服务
    browserSync.init({
        server: {
            baseDir: ""
        }
    });
    //检测less文件是否更改，来调用重新编译css
    gulp.watch('less/*', ['styles']);  

    //如果css文件更改过则刷新服务器
    gulp.watch( ['sys/css/*'] ).on("change", browserSync.reload)
});