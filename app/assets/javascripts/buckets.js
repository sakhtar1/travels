
// Index page bucket list country submitting dynamically

$(function(){
  $("#new_bucket").on("submit", function(e){
 

    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        $("#bucket_country").val("");
        var $div = $("div.checkbox")
        $div.append(response); 
      
      }

    })
    e.preventDefault();
  })
})


// Clicking next on show page to view next country

$(function () {
  $(".js-next").on("click", function() {
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId, function(data) {
      var bucket = data;
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketCity").text(bucket["city"]);
      $(".bucketDescription").text(bucket["description"]);
      $(".bucketContinent").text(bucket["continent"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", bucket["id"]);
    });
  });
});

// Clicking previous on show page to view previous country

$(function () {
  $(".js-previous").on("click", function() {
    var previousId = parseInt($(".js-previous").attr("data-id")) - 1;
    $.get("/buckets/" + previousId, function(data) {
      var bucket = data;
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketCity").text(bucket["city"]);
      $(".bucketDescription").text(bucket["description"]);
      $(".bucketContinent").text(bucket["continent"]);
      // re-set the id to current on the link
      $(".js-previous").attr("data-id", bucket["id"]);
    });
  });
});


/*

// checkbox

function check() {
    document.getElementById("checkbox").checked = true;
}

function uncheck() {
    document.getElementById("checkbox").checked = false;
}

$('.checkbox').change(function() {
 if ($(this).attr("checked")) {

    $('.check_count').fadeIn();
    return;
 }
 $('.check_count').fadeOut();
});





// index page, clicking on see more to view continent and cities

$(function(){
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



