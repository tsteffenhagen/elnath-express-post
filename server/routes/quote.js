var express = require('express');
var router = express.Router();
var quotesData = require('../modules/quotes-data')

router.get('/', function(req, res){
    res.send('you can find quotes on /quote/random or /quote/first');    
});

router.get('/random', function(req, res){
    var ranQuote = 0;
    ranQuote = Math.floor((Math.random() * quotesData.length));
    res.send(quotesData[ranQuote]);
    // res.sendStatus(500); //uncomment this line to send back an error
    console.log(ranQuote);    
});

router.get('/first', function(req, res){
    res.send(quotesData[0]);    
});

router.get('/all', function(req, res){
    res.send(quotesData);
});

router.post('/new', function(req, res){
    console.log('We hit the post!!');
    console.log('req.body in new quote post', req.body);
    quotesData.push({quoteText: req.body.quote_to_add});
    res.sendStatus(200);    
})

module.exports = router;