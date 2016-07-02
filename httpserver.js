/**
 * Created by Administrator on 2016/6/25.
 */
var http = require('http');  //http是一个核心模块
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime')
http.createServer(function(request,response){
    //增加响应头告诉浏览器端内通过是是什么类型
    //response.setHeader('Content-type','text/html;charset=utf-8')
    //response.write('daxiaojie');
    //response.end('woaini')
    /*fs.readFile('1.txt',function(err,data){
        response.end(data);
    })*/
    var urlObj = url.parse(request.url,true)
    var pathName = urlObj.pathname;
    if(pathName == '/')
    {
        response.setHeader('content-type','text/html;charset=utf-8')
        fs.createReadStream('./da.html').pipe(response);
    }else if(pathName == '/clock'){
       // var flag = fs.existsSync('/clock');
        //if(flag)
        var date = new Date();
        response.end(date.toLocaleString());
    }else if (pathName == 'favicon.ico')
    {
        response.statuscode = '404';
        response.end('');
    }else{
        var flag = fs.existsSync('./'+pathName); //文件缓存
        response.setHeader('content-type',mime.lookup(pathName)+';charset=utf-8')
        fs.createReadStream('.'+pathName).pipe(response)
    }
}).listen(8080);



console.log(url.parse('https://github.com/MengZaiL/WebstormProjects',true))
var date = new Date();
console.log(date.toLocaleString());