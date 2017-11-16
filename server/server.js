var express = require('express');
var bodyParser = require('body-parser');
var reallyGreat = require('./routes/really-great');
var quote = require('./routes/quote');
var app = express();
var port = 5000;

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true}));

console.log('Starting up the server');

app.get('/great', reallyGreat);

// we want /quote/random will res.send a random quote
//we want /quote will res.sen the first quote
// we want /quote will res.send "you can find quotes on /quote/random or /quote/first"
app.use('/quote', quote);

app.get('/dinosaur', function(req, res){
    res.send('Roar');
})

app.listen(port, function(){
    console.log(`listening on ${port}`);
})
