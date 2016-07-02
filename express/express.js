/**
 * Created by Administrator on 2016/7/2.
 */
var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.end('hello');
})
app.post('/user',function(req,res){
    res.end('user');
})
app.all('*',function(req,res){
    res.end('无法'+req.method+req.url);
})
app.listen(8080);