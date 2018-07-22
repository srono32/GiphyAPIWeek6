$("button").click(function(){

    var searchQ = $("#searchQ")[0].value.split(" ").join("+");

    var myRequest = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchQ +"&api_key=vTb6bHwpy4GwJ4V6zSgx8GI6eVmDhMEp&limit=10");
    myRequest.done(function(data) { console.log("success got data", data); });

    myRequest.done(
        function(data) {
            for(var i = 0; i < data.data.length; i++) {
                var newImg = document.createElement("img");
                newImg.src = data.data[i].images.original.url;
                document.body.appendChild(newImg);
            }
        }
    )
})