$(document).ready(function(){

  var tvshowsArray = ["moonlight", "office space", "aladdin"];





  $(".btn").on("click", function() {
    //set movie variable to this data attribute 
    var tvshow = $(this).attr("data-movie");
    
    //construct queryURL with movie input
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvshow + "&api_key=uoLrSWUr4sAGCcFAMEcOH2Cou1G4jpI2&limit=10";

    //ajax call
    $.ajax({
      //url + method
      url: queryURL,
      method: "GET"
      //then run this function with the response
      }).then(function(response) {

        //var for results, console log to see what it gives
        var results = response.data;
        console.log(results);

        //for loop for all results (10)
        for (var i = 0; i < results.length; i++) {
        
        //create new div  
        var newDiv = $("<div class='col-md-4'>");
        
        //get rating for each gif from response object
        var rating = results[i].rating;
        //get animated source url
        var animatedSrc = results[i].images.fixed_height.url;
        //get static source url
        var staticSrc = results[i].images.fixed_height_still.url;
        //create new img tag for gif to be displayed
        var showGIF = $("<img>");
        //display rating of gif
        var showRating = $("<p>").text("Rating: " + rating);
        
        //assign static source URLto img tag
        showGIF.attr("src", staticSrc);
        //add class to img tag
        showGIF.addClass("netflixGiphy");
        //add data-state attribute to img tag
        showGIF.attr("data-state", "still");
        //add data-still attribute with static source URL to img tag
        showGIF.attr("data-still", staticSrc);
        //add data-animate attribute with animated source URL to img tag
        showGIF.attr("data-animate", animatedSrc);
        //append new div with gif rating p tag
        newDiv.append(showRating);
        //append new div with static gif
        newDiv.append(showGIF);

        //prepend 
        $("#gifArea").prepend(showDiv);
      }
    });

  });



})