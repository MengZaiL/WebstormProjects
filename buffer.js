/**
 * Created by Administrator on 2016/6/19.
 */
var buffer = new Buffer([16,17,18])  //Buffer是16进制的
console.log(buffer)

var buffer = new Buffer('珠峰','utf8'); //不支持GBK;

//手动初始化
buffer.fill(0);

buffer.write('朱',0,3,'utf8');
console.log(buffer.toString());


var buff = new Buffer(12);
var buff1 = new Buffer('朱');
var buff2 = new Buffer('风')
buff1.copy(buff,0);
buff2.copy(buff,3);

console.log(buff.toString());



Buffer.myConcat = function(list,len){
    //buff用copy方法拷贝进去 多余的删掉形成一个新的buff
    var Buff =  new Buffer();
}


//进制转换
console.log(parseInt('111111',2));
console.log(10..toString(2));
console.log((12).toString(2));


var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLocaleLowerCase()
console.log(str)
str+='0123456789'
console.log(str)
str+='+/';
console.log(str[57]+str[56])
console.log(str[57]+str[56]+str[62]+str[32]);
