

// navigate to previous page when 'back' link clicked
  
$(document).on("click", "a.back", function(e){
    parent.history.back()
    e.preventDefault()
  })


//has-many` relationship through form submit

$(function(){
  $(".edit_visit").on("submit", function(e){
 

    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        $("#visit_visit_places").val("");
        var $div = $("div.visit")
        $div.append(response); 
      
      }

    })
    e.preventDefault();
  })
})

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

*/


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

