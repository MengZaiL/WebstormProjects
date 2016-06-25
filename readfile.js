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

//创建目录
mfdirs('a/b/c');

function mfdirs(path){
    var arr = path.split('/');
    for(var i=0;i<arr.length;i++)
    {
        //每次截取一个路径
        var cur = arr.slice(0,i+1);
        console.log(cur);
        if(fs.existsSync(cur.join('/')))
        {
            continue;
        }
        fs.mkdirSync(cur.join('/'))
    }
}