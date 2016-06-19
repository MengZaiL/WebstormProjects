/**
 * Created by Administrator on 2016/6/19.
 */
/****************************/

//readFile  异步

var fs = require('fs');
//如果能马上返回结果都是同步方法
//同步
var obj = {};
var name = fs.readFileSync('./.gitignore','utf8');
obj.name = name;

console.log(obj);


//异步方法

fs.readFile('./.gitignore','utf8',function(err,data){
    console.log(arguments)
})

