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

//http://localhost:3000/showAuthor?author=Kevin Kruse
app.get("/showAuthor",function(req,res){
    var author = req.query.author;
    var newQuoteList =[];
    quoteList.forEach(quote=>{
        if(quote.author==author)
            newQuoteList.push(quote);
    });
    res.status(200).send(newQuoteList);
})

//http://localhost:3000/showCategory?category=Life
app.get("/showCategory",function(req,res){
    var category = req.query.category;
    var newQuoteList =[];
    quoteList.forEach(quote=>{
        if(quote.category==category)
            newQuoteList.push(quote);
    });
    res.status(200).send(newQuoteList);
})

app.listen('3000',function(){
    console.log('Server listning to port 3000');
   });
