/**
 * Created by Administrator on 2016/7/2.
 */
var express = require('express');
var app = express();

//使用中间件
app.use(function(req,res,next){
    console.log('喝的');
    next();
})
app.use(function(req,res,next){
    console.log('吃的');
    next();
})


app.get('/marry',function(req,res){
    res.end('marry');
})
app.listen(8088)