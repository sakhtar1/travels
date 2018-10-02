
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

function check() {
    document.getElementById("outside").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}
// checkbox
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



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

