// show page, clicking on next and previous to view the following country


/*$(function() {
  $(".js-next").on("click", function() {
 
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/countries/" + nextId + ".json", function(data) {
      var country = data
      $(".countryCont").html(country["continent"]);
      $(".countryName").html(country["name"]);
      $(".countryCity").html(country["city"]);
      $(".countryDescript").html(country["description"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", country["id"]);
      /* e.preventdefault(); 
    });
  });
});

$(function() {
  $(".js-previous").on("click", function() {
    
    var previousId = parseInt($(".js-previous").attr("data-id")) - 1;
    $.get("/countries/" + previousId + ".json", function(data) {
      var country = data
      $(".countryCont").html(country["continent"]);
      $(".countryName").html(country["name"]);
      $(".countryCity").html(country["city"]);
      $(".countryDescript").html(country["description"]);
      // re-set the id to current on the link
      $(".js-previous").attr("data-id", country["id"]);
      /* e.preventdefault(); 
    });
  });
});



/*
$( document ).ready(function() {
   $(".js-next").on("click", function(e) {
    $.ajaz({
      method: "GET"
      url: this.href
    }).success(function(data){
      console.log(data)
    });
    e.preventdefault();
  })
});
*/

