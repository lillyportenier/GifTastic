   
var keyWord;
var searchBox = ["Sponge bob", "Patrick", "Plankton", "Krusty krab", "Squidward", "Doodlebob", "Jellyfish jam", "Mermaid Man", "Squidville", "The great snail race", "Jellyfish hunter", "Pretty pattys", "Spongicus", "King neptune" ];
var button;
var buttonChoice;
var searchItem;

var queryURL;
var apiKey = "&api_key=sOTf3dAreZfWgWzxwIRYmTo7r9ii8Z3g";



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
       $("#gif-dump").html("");

       queryURL = "http://api.giphy.com/v1/gifs/search?" + apiKey + "&q="+ keyWord;

       $.ajax({
        url: queryURL,
        method: 'GET',
      }).done((response) => {
        console.log(response);
        for(i = 0; i < response.data.length; i++){
          $("#gif-dump").append( "<div class='rating'> Rating:" + response.data[i].rating.toUpperCase() + "<br>" + "<img src=" + response.data[i].images.original.url + "/>");
        };
      });

      $("#gif-dump").on("click", function(){
          var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          }
         else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
      })
    });
};

function search() { 
    
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
  
};

$(document).on("click", "#search-button", search);


$(document).keypress(function(e) {
    if (e.keyCode == 13) {   
        search();   
    }
   });


//    response.data[i].images.original.url 
// response.data[i].images.original_still.url 


