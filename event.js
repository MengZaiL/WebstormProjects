/**
 * Created by Administrator on 2016/6/25.
 */
//on 监听 emit触发事件

/*function Event(){
    this._events = {};
};
Event.prototype.on = function(evnetName,callBack){
    //通过名字取出对应的事件池
    var cur = this._events[evnetName];
    if(cur){
        console.log(cur);
        this._events[evnetName].push(callBack);
    }else{
        this._events[evnetName] = [callBack];
    }
}
Event.prototype.emit = function(evnetName){
     //将除了eventName后面的参数截取出来
    var args =  Array.prototype.slice.call(arguments,1);
    var cur = this._events[evnetName];
    console.log(args);
    console.log(cur);
    var that = this;
    if(cur){
        cur.forEach(function(item){
            item.apply(that,args);
        })
    }
}

var e = new Event();
function marry(who){
    console.log(who);
}
function marry1(who){
    this.name = 'wo'
    console.log(who,this.name)
}
e.on('大小姐',marry)
e.on('大小姐',marry1)

e.emit('大小姐','结婚啦');
*/
//node自带的事件
var EventEmitter = require('events');
var util = require('util');
function Girl(){

}
util.inherits(Girl,EventEmitter);
var g = new Girl();

function eat(who){
    console.log('我爱'+who);
}

//g.on('大小姐',eat);
g.once('大小姐',eat);
//g.removeAllListeners();
g.emit('大小姐','大小姐');
g.emit('大小姐','大小姐');

