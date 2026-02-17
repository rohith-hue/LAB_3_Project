var express = require("express");

var app = express();

app.get('/',function(req,resp){
    resp.send("Hello API");
});    

app.get('/greeting',function(req,resp){
    resp.send("Good Morning");
});

app.get('/time',function(req,resp){
    var time = new Date().toLocaleTimeString();
    resp.send(`Time is: ${time}`);
});

app.get('/date',function(req,resp){
    var date = new Date().toLocaleDateString();
    resp.send(`Date is: ${date}`);
});
app.get('/Wishes/:name',function(req,resp){
    var name = req.params.name;
    resp.send(`Hello ${name}`);
});

app.get('/square/:n',function(rep,resp){
    var n = Number(req.params.n);
    resp.send(`Square of ${n} is: ${n*n}`)
});
app.get('/addition/:a/:b', function(req,resp){
    var a = Number(req.params.a);
    var b = Number(req.params.b);
    var c = a+b;
    resp.send(`Add of ${a} and ${b} is: ${c}`);
});


app.listen(9000,()=>console.log("API Started listening..."));