$( document ).ready(function() {
    // An array of animals, new animals will be pushed into this array;
    var action = ["salamander", "lizard", "spider", "goat", "antelope"];
    // Function that displays all gif buttons
    function displayGifButtons(){
        $("#gifButtonsTop").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < actions.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", actions[i]);
            gifButton.text(actions[i]);
            $("#gifButtonsTop").append(gifButton);
        }
    }


