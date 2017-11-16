console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');
    $.ajax({
        method:'GET',
        url: '/quote/random',
        success: function(response) {
            $('p').append(' Random quote response ', response.quoteText);           
        },
        error: function(error){
            console.log('there was an error getting a random quote', error);           
        }
    })//random quote ajax

    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function(response) {
            $('p').append(' First quote response, ', response.quoteText);
            
        }
    })//first quote ajax

    getAllQuotes();

    $('#newQuoteButton').on('click', buttonClick);
})

function buttonClick() {
    console.log('Something');   
    $.ajax({
        method: 'POST',
        url: '/quote/new',
        data: {quote_to_add: $('#newQuote').val()},
        success: function(response) {
            console.log('new quote post response:', response);  
            getAllQuotes();
        }
    })
}//end buttonClick

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: 'quote/all',
        success: function (response) {
            $('ul').html('');
            for (let i = 0; i < response.length; i++) {
                $('ul').append(`<li>Quote at ${i}: ${response[i].quoteText}</li>`);                
            }
        }
})
}//end getAllQuotes