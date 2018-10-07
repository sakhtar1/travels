
// Navigate to previous page when 'back' link clicked
  
$(document).on("click", "a.back", function(e){
    parent.history.back()
    e.preventDefault()
  })

// Visit view form content via anchor link

$(function(){
  $("#visit-link").on("click", function() {
    $('#visit-section').fadeToggle()
  })
});

// JS see more

function see_more(){
      $('#see_more').addClass('hidden');
      //or
      $('#cont').removeClass('hidden');
      $('#city').removeClass('hidden');
      $('#see_less').removeClass('hidden');
 }

function see_less(){
      $('#see_less').addClass('hidden');
      //or
      $('#cont').addClass('hidden');
      $('#city').addClass('hidden');
      $('#see_more').removeClass('hidden');
}

// show page, clicking on next and previous to view the following country



/*$(function() {
  $(".js-next").on("click", function() {
 
    var nextId = parseInt($(".js-next").attr("data-id"));
    $.get("/countries/" + nextId, function(data) {
      var country = data
      $(".countryCont").html(country["continent"]);
      $(".countryName").html(country["name"]);
      $(".countryCity").html(country["city"]);
      $(".countryDescript").html(country["description"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", country["id"]);
      e.preventdefault(); 
    });
  });
});






// Visit form submit

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
*/






