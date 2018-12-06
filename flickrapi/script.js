$(function() {
  let flickrUrl =
    "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrUrl, {
    tags: "mountain",
    tagmode: "any",
    format: "json"
  })
    .done(function(data) {
      $.each(data.items, function(index, item) {
        $("<img>")
          .attr("src", item.media.m)
          .appendTo("#photos");

        if (index == 5) {
          return false;
        }
      });
    })
    .fail(function() {
      console.log("Something went wrong.");
    });
});
