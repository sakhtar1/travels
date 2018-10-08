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
    $.get("/buckets/" + nextId + ".json", function(datas) {
      var data = datas["data"]
      var bucket = data["attributes"];
 
      $(".bucketCountry").text("Country: " + bucket["country"]);
      $(".bucketCity").text("Continent: " + bucket["city"]);
      $(".bucketDescription").text("Cities you want to visit: " + bucket["description"]);
      $(".bucketContinent").text("Description: " + bucket["continent"]);
      // re-set the id to current on the link
      $(".next").attr("data-id", data["id"]);
      $(".previous").attr("data-id", data["id"])
    });
  });
});




  // Clicking previous on show page to view previous country

$(function () {
  $(".previous").on("click", function() {
    var previousId = parseInt($(".previous").attr("data-id")) - 1;
    $.get("/buckets/" + previousId + ".json", function(datas) {
      var data = datas["data"]
      var bucket = data["attributes"];

      $(".bucketCountry").text("Country: " + bucket["country"]);
      $(".bucketCity").text("Continent: " + bucket["city"]);
      $(".bucketDescription").text("Cities you want to visit: " + bucket["description"]);
      $(".bucketContinent").text("Description: " + bucket["continent"]);
      // re-set the id to current on the link
      $(".previous").attr("data-id", data["id"]);
      $(".next").attr("data-id", data["id"]);
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



