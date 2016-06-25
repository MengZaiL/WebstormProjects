/**
 * Created by Administrator on 2016/6/25.
 */
/*var fs = require('fs');
//创建一个可读流 将我的文件变成流

var rs =fs.createReadStream('./1.txt',{
    //flags:'r',
    encoding:'utf-8',
    highWaterMark:2
});

rs.on('data',function(data){
    console.log(data);
    rs.pause(); //停止流
});
setTimeout(function(){
    rs.resume(); //恢复流
},3000)
rs.on('end',function(){
    console.log('sister');
})

rs.on('error',function(err){
    console.log('error',err)
})*/

//创建可写的流
var fs = require('fs');

var ws = fs.createWriteStream('./2.txt',{
    flags:'w', //向文件内写入  每次清空不会累加
    encoding:null, //写的时候会自动转化成字符串
});

//向文件中写入内容
ws.write('a')  //往文件里面写内容
ws.end('b')  //最后写入 停止再次写入 end后文件就关闭了
