var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
app.get('/hello',function(req,res)
{
res.send('Good Morning!!');
});
var server=app.listen(3000,function() {
console.log("Start server ")

});