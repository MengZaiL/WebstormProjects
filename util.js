/**
 * Created by Administrator on 2016/6/19.
 */
var util = require('util');

function A(){
    this.smile = 'smile';
}

A.prototype.eat = function(){
    console.log('吃')
}

function B(){
    thia.name ='hh'
}

//原型链集成
B.prototype._proto_ = A.prototype;
var b = new A();
b.eat();
console.log(b.small);

//B.prototype = Object.create(A.prototype); 继承方式

//util.inherits(B,A)
//NOde继承方式原型链继承
var obj ={name:'1',home:'beijing'};
Object.defineProperty(obj, "newDataProperty", {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});

delete obj.newDataProperty;
console.log(obj);

//console.dir(util.inspect(obj
// ,{showHidden:true,
// depth:0,
// colors:true
// }));

