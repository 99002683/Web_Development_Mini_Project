var express = require('express');
var app = express();
var quoteList = require('./quotes.json')


var cors = function(req, res, next) 
{ 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 

app.use(cors);

//http://localhost:3000/showQuotes
app.get("/showQuotes",function(req,res){
    res.status(200).send(quoteList);
})
app.listen('3000',function(){
    console.log('Server listning to port 3000');
   });
