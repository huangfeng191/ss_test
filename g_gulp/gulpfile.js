
var config = {
  baseDir: './',
}

var gulp=require('gulp');
var babel=require("gulp-babel");

var uglify = require("gulp-uglify");


var bs=require('browser-sync').create();

//👇 http://yangblink.com/2016/09/17/%E4%B8%BAbrowser-sync%E8%AE%BE%E7%BD%AE%E4%BB%A3%E7%90%86/
var proxy = require('http-proxy-middleware')

// var middleware = proxy('**', {target: 'http://127.0.0.1:82', changeOrigin: true,});
// 设置代理
// request **/*.json 全匹配

var filter = function(pathname, req) {
  // && req.method === 'GET'
  // 按正则匹配
  // console.log("pathname"+pathname);
  // 跳过代理
  if(pathname.match("jtopo.json")){
    return false
  }
  if(pathname.match("jtopouse.json")){
    return false
  }
  return pathname.match('^.*/.*\.json') ;
};

var middleware = proxy(filter, {
	target: 'http://127.0.0.1:82',
  // target: 'http://192.168.92.177:8080',
  // target: 'http://127.0.0.1:60',
  
	changeOrigin: true,
	logLevel: 'debug',
	pathRewrite: {
        // '^/test/testa' : '/apiA',
  },

});
// 

// 静态服务器
gulp.task('browser-sync-static', function() {
     bs.init({
        server: {
          // 服务开启的目录
            baseDir: config.baseDir,
            middleware: [middleware],
            // 默认首页
            index: "/pages/jtopo/mytopo2.html"
      },
   
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