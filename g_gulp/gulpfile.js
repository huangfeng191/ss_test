
var config = {
  baseDir: './',
}

var gulp=require('gulp');
var babel=require("gulp-babel");

var uglify = require("gulp-uglify");


var bs=require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync-static', function() {
     bs.init({
        server: {
          // 服务开启的目录
            baseDir: config.baseDir
      }
    });
    const log = console.log.bind(console);
    // 服务开启的目录下的路径
    //  **不仅匹配路径中的某一段,而且可以匹配 'a/b/c' 这样带有'/'的内容,所以,它还可以匹配子文件夹下的文件. 
    bs.watch([
      "pages/**/*.*",
      "static/**/*.*"],{ignored: /(^|[\/\\])\../}).on("change",   bs.reload);
  

});


gulp.task('default',['browser-sync-static']); //定义默认任务


//  *********************************** build

gulp.task('static_js',function(){
  gulp.src('static/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build/static'));
});

gulp.task('pages_js',function(){
  gulp.src('pages/**/*.js')
  .pipe(babel())
  .pipe(uglify())
    .pipe(gulp.dest('build/pages'));
});



gulp.task('build',["pages_js","static_js"],function(){
  
});