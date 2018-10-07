  // navigate to previous page when 'back' link clicked
  
$(document).on("click", ".back", function(e){
    parent.history.back()
    e.preventDefault()
  })


// Index page bucket list country submitting dynamically

$(function(){
  $("#new_bucket").on("submit", function(e){
 

    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        $("#bucket_country").val("");
        var $div = $("div.checkbox.check_count")
        $div.append(response); 
      
      }

    })
    e.preventDefault();
  })
})




// Clicking next on show page to view next country

$(function () {
  $(".next").on("click", function() {
    var nextId = parseInt($(".next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId, function(data) {
      var bucket = data;
      $(".bucketCountry").html(bucket["country"]);
      $(".bucketCity").html(bucket["city"]);
      $(".bucketDescription").html(bucket["description"]);
      $(".bucketContinent").html(bucket["continent"]);
      // re-set the id to current on the link
      $(".next").attr("data-id", bucket["id"]);
    });
  });
});




  // Clicking previous on show page to view previous country

$(function () {
  $(".previous").on("click", function() {
    var previousId = parseInt($(".previous").attr("data-id")) - 1;
    $.get("/buckets/" + previousId + ".json", function(data) {
      var bucket = data;
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketCity").text(bucket["city"]);
      $(".bucketDescription").text(bucket["description"]);
      $(".bucketContinent").text(bucket["continent"]);
      // re-set the id to current on the link
      $(".previous").attr("data-id", bucket["id"]);
    });
  });
});





// checkbox

function check() {
    document.getElementById("checkbox").checked = true;
}

function uncheck() {
    document.getElementById("checkbox").checked = false;
}


function is_checked(){
  $('.checkbox').change(function() {
   if ($(this).attr("checked")) {

      $('.check_count', '.checkbox').fadeIn();
      return;
   }
   $('.check_count', '.checkbox').fadeOut();
  });
}





// index page, clicking on see more to view continent and cities

/*$(function(){
  $(".js-see_more").on("click", function(e){
 

    $.ajax({
      type: "GET",
      url: this.action,
      data: $(this).serialize(),
      var id = $(this).data("id");
      success: function(response){
        var $div = $("div.buckets")
       $($div + id).text(data); 
      
      }

    })
    e.preventDefault();
  })
})
*/



