   
var keyWord = "cat"
var searchBox = ["sponge+bob", "patrick", "plankton", "sandy", "krusty+krab", "squidward"];
var buttonDiv;
var userChoice;

var apiKey = "&api_key=sOTf3dAreZfWgWzxwIRYmTo7r9ii8Z3g";
var searchKeyword = "&q="+ keyWord;

var queryURL = "http://api.giphy.com/v1/gifs/search?" + apiKey + searchKeyword;

window.onload = function(){
    makeButtons();
};

function makeButtons() {
    for (i = 0; i < searchBox.length; i++) {
        buttonDiv = $("#button-div");
        buttonDiv.append("<button>" + searchBox[i] + "</button>");
        buttonDiv.attr("data-id", i);
        buttonValue = searchBox[i];
    }
    buttonDiv.on("click", function() {
        userChoice = $(this).data("id");

    });
    console.log(userChoice);
};

// conosle.log(buttonValue);

$.ajax({
url: queryURL,
method: "GET"
})
    .then(function(response) {
    console.log(response);
    });


//
 
// http://api.giphy.com/v1/gifs/search?&api_key=sOTf3dAreZfWgWzxwIRYmTo7r9ii8Z3g&q=cat
    
    
// 