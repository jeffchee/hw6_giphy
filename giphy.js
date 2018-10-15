$(document).ready(function () {
  console.log("giphy is loaded");
  //character list
  var characters = ["luffy", "zoro", "sanji", "nami", "usopp", "brooke", "Franky", "chopper", "nico robin"];


  $("#add-OP").on("click", function () {
    $("#OP").empty();
    $(this).addClass("active");
    var type = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response)//getting data back now
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var OPdiv = $("<div class = \"OP-item\">")
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var OPImg = results[i].images.fixed_height
          
          
          // OPImg.attr("<img>");
          // OPImg.attr("src");
          OPdiv.append(p);
          OPdiv.append(OPImg);
          $("#OP").append(OPdiv);

        }

      })
  })



  function renderButtons() {
    $("#op-views").empty();
    for (var i = 0; i < characters.length; i++) {
      var a = $("<button>");
      a.addClass("onepiece");
      a.attr("data-name", characters[i]);
      a.text(characters[i])
      $("#op-views").append(a);
    }
  }

  $("#add-OP").on("click", function (event) {
    event.preventDefault();

    var opInput = $("#op-input").val().trim();
    characters.push(opInput);

    
    renderButtons();
  })
  //forgot to add # on a few lines and kept struggling until finally getting it all to work now.(act7 ajax moviebutton)


  renderButtons();


})//ending tag
