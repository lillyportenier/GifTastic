   
var keyWord;
var searchBox = ["Sponge bob", "Patrick", "Plankton", "Krusty krab", "Squidward", "Doodlebob", "Jellyfish jam", "Mermaid Man", "Squidville", "The great snail race", "Jellyfish hunter", "Pretty pattys", "Spongicus", "King neptune" ];
var button;
var buttonChoice;
var searchItem;
var img;

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
};
function ajaxWork() {
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
         var img = $("<img/> ")
         var div = $("<div></div>")
         img.attr("src", response.data[i].images.original.url)
         img.attr("data-still", response.data[i].images.original_still.url)
         img.attr("data-animate", response.data[i].images.original.url)
         img.attr("data-state", "animate")
         img.addClass("gif")
         div.text("Rating: " + response.data[i].rating.toUpperCase())
         $("#gif-dump").append(div);
         $("#gif-dump").append(img);
     };
   });
  
 };
$(document).on("click", ".gif", function(){
    var state = $(this).attr("data-state");
    console.log("clicked");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
   else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});

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
    $("#gif-dump").html("");

    queryURL = "http://api.giphy.com/v1/gifs/search?" + apiKey + "&q="+ searchItem;

    $.ajax({
        url: queryURL,
        method: 'GET',
      }).done((response) => {
        console.log(response);
        for(i = 0; i < response.data.length; i++){
            var img = $("<img/>")
            var div = $("<div></div>")
            img.attr("src", response.data[i].images.original.url)
            img.attr("data-still", response.data[i].images.original_still.url)
            img.attr("data-animate", response.data[i].images.original.url)
            img.attr("data-state", "animate")
            img.addClass("gif")
            div.text("Rating: " + response.data[i].rating.toUpperCase())
            $("#gif-dump").append(div);
            $("#gif-dump").append(img);
        };
  
    });
};

$(document).on("click", "#search-button", search);
$(document).on("click", ".button-choice", ajaxWork);


$(document).keypress(function(e) {
    if (e.keyCode == 13) {   
        search();   
    }
   });




