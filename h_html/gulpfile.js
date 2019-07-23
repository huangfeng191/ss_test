
var config = {
  baseDir: './',
}

var gulp=require('gulp');

var bs=require('browser-sync').create();

var proxy = require('http-proxy-middleware')

var filter = function(pathname, req) {
  return pathname.match('^.*/.*\.json') ;
};

var middleware = proxy(filter, {
	target: 'http://127.0.0.1:82',
 
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
      },
   
    });
    const log = console.log.bind(console);
    // 服务开启的目录下的路径
    //  **不仅匹配路径中的某一段,而且可以匹配 'a/b/c' 这样带有'/'的内容,所以,它还可以匹配子文件夹下的文件. 
    bs.watch([
      "**/*.*"],{ignored: /(^|[\/\\])\../}).on("change",   bs.reload);
  
});


gulp.task('default',['browser-sync-static']); //定义默认任务


