  // navigate to previous page when 'back' link clicked
  
$(document).on("click", ".back", function(e){
    parent.history.back()
    e.preventDefault()
  })



/* Object Orient JavaScript constructor function to build a 
prototype for what an object (country) would look like, including all 
the properties (id, content, and user). A renderDisplay method is also added to 
this object. */

function Bucket(data){
  this.id = data.id;
  this.country = data.country;
  

}

Bucket.prototype.renderDisplay = function(){
  var html = ""
  html+= "<div><label><input type=\'checkbox\' name=\'checkbox\' id=\'checkbox\' class=\'checkbox\' data-toggle=\'checkbox\'></input><del><strong name = \'check_count\'class=\'check_count\'id=\'check_count\'>" + this.country +"</strong></del></label></div>"
  $("div.checkbox.check_count").append(html)
}

$(function(){
  $("#new_bucket").on("submit", function(e){
    e.preventDefault();


    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize()


      }).success(function(response){
      
        $("#bucket_country").val("");
        var bucket = new Bucket("json");
        bucket.renderDisplay();
        
      }).error(function(response){
        alert("Please try again.", response)
      })
  
  })
})




// Clicking next on show page to view next country

$(function () {
  $(".next").on("click", function() {
    var nextId = parseInt($(".next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId + ".json", function(datas) {
      var data = datas["data"]
      var bucket = data["attributes"];
 
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
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

      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
      // re-set the id to current on the link
      $(".previous").attr("data-id", data["id"]);
      $(".next").attr("data-id", data["id"]);
    });
  });
});





// checkbox

/*function check() {
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
}*/





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



