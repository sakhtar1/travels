

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






/*$(function() {
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

