
//==============================================================================

//search function activated by on-click
$('#search-button').on('click', function() {
  console.log("search clicked");

  // Collect user input by grabbing the input form's value via id (#)
  var userInput = $('#gif-selection').val().trim();

  // Change the input to suit the API (ie change spaces to +)
  userInput = userInput.replace(/ /g, "+");


  //var for api url with api key
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC&limit=10";

  //Ajax then calls Giphy API and waits until the API returns the call. (.done)
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    //consoles the response from the API
    console.log(response.data);
    //listing giphies
    var gifs = response.data;

    for (var i = 0; i < gifs.length; i++) {
      // After the data from the AJAX request comes back
        // Creating and storing an image tag
        var images = $("<img>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + gifs[i].rating);

        // Setting the catImage src attribute to imageUrl
        images.attr("src", gifs[i].images.fixed_height.url);
        images.attr("alt", "gif image");

        // Prepending the catImage to the images div
        $("#gifs").prepend(images);

    }

    console.log(gifs);

    //==================================


    //passes the output into the DOM
    $('#gifs').attr('src', gifs);
    //to clear the page of the search results and buttons............please update.
    $('#clear-results').on('click', function() {
      $("input[type=text], textarea").val("");
      console.log("Clear clicked");
    });
  });
})


//==================----------------------------------------------
