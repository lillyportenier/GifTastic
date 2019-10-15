   
var keyWord;
var searchBox = ["sponge+bob", "patrick", "plankton", "sandy", "krusty+krab", "squidward"];
var button;
var buttonChoice;
var searchItem;

var apiKey = "&api_key=sOTf3dAreZfWgWzxwIRYmTo7r9ii8Z3g";
var searchKeyword = "&q="+ keyWord;

var queryURL = "http://api.giphy.com/v1/gifs/search?" + apiKey + searchKeyword;

window.onload = function(){
    makeButtons();
};

function makeButtons() {
    for (i = 0; i < searchBox.length; i++) {
        button = $("<button>");
        button.text(searchBox[i]);
        button.attr("data-id", searchBox[i]);
        button.addClass("button-choice");
        $("#button-div").append(button);
    }
    $(".button-choice").on("click", function() {
       buttonChoice = $(this).data("id");
       keyWord = buttonChoice;

       $.ajax({
        url: queryURL,
        method: 'GET',
      }).done((response) => {
        console.log(response);
        for(i = 0; i < response.data.length; i++){
          $("#gif-dump").append( "<img src= " + response.data[i].images.original.url + "</div>");
        };
      });
       console.log(keyWord);
    });
    
};
// console.log(buttonChoice);

$("#search-button").on("click", function() { 
    
    if ($("#search-bar").val() === ""){

    }
    else {
        searchItem = $("#search-bar").val().trim();
        $("#button-div").html("");
        searchBox.push(searchItem);
        makeButtons();
        $("#gif-dump").html("");
        $("#search-bar").val("");
    }
  
});

$()




 




//   "<div class= 'gif-div'>Rating: " + response.data[i].rating.toUpperCase() + "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original_still.url + " class= 'gif-img'></div>"


//
 
// http://api.giphy.com/v1/gifs/search?&api_key=sOTf3dAreZfWgWzxwIRYmTo7r9ii8Z3g&q=cat
    
    
// 