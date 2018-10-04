
// index page bucket list country submitting dynamically

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


/*$(function () {
  $(".js-next").on("click", function() {
    $.ajax({
      type: "GET",
      //data: JSON.stringify(data),
      contentType: "application/json",
      dataType: 'json',
      url: "/buckets/" + ("data-id" + 1)
      success: function(response){
        var bucket = response;
        $(".bucketCont").text(bucket["continent"]);
        $(".bucketName").text(bucket["country"]);
        $(".bucketCity").text(bucket["city"]);
        $(".bucketDescript").text(bucket["description"]);
        // re-set the id to current on the link
        $(".js-next").attr("data-id", bucket["id"]);

      }
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


$(function () {
  $(".js-next").on("click", function() {
    $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
      "application/json",
      }
      var nextId = parseInt($(".js-next").attr("data-id")) + 1;
      url: "/buckets/" + nextId + ".json", function(data){
      var bucket = data;
      $(".bucketCont").text(bucket["continent"]);
      $(".bucketName").text(bucket["country"]);
      $(".bucketCity").text(bucket["city"]);
      $(".bucketDescript").text(bucket["description"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", bucket["id"]);

      });
  });
});
      
    $(function () {
  $(".js-next").on("click", function() {
    dataType: 'json',
    //headers: "application/json",
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId + ".json", function(data) {
      var bucket = data;
      $(".bucketCont").text(bucket["continent"]);
      $(".bucketName").text(bucket["country"]);
      $(".bucketCity").text(bucket["city"]);
      $(".bucketDescript").text(bucket["description"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", bucket["id"]);
    });
  });
});




/*

<script type="text/javascript" charset="utf-8">
$(function () {
  $(".js-see_more").on('click', function() {
    var id = $(this).data("id");
    $.get("/buckets/" + id, function(data) {
      // Replace text of body-id div
      $("#body-" + id).text(data);
    });
  });
});
</script>

$(function() {
	$(".js-more").on("click", function(e) {
	$.get(this.href), function(json){
    var $ul = $("ul.bucket")
			$ul.html("")
      json.forEach(function(comment){
        $ul.append("<li>" + comment.content + "</li>")
      })
		}

		e.preventDefault();
	})
})

})$(function() {
    $(".js-more").on("click", function() {
      var id = $(this).data("id");
      $.get("/buckets/" + id + ".json", function(data) {
        var bucket = data;
        var continentText = bucket["country"]
        return "<p>" + bucket["city"] + "</p><p>" + continentText + "</p>";
      });
    });
  });

  $(function() {
  $(".js-more").on("click", function(e) {
  $.ajax({
    url: this.href,
    dataType: "script"
  })

  e.preventDefault();
  })
})
*/

