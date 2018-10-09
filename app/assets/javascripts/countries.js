
// Navigate to previous page when 'back' link clicked
  
$(document).on("click", "a.back", function(e){
    parent.history.back()
    e.preventDefault()
  })

// Visit view form content via anchor link

$(function(){
  $("#visit-link").on("click", function(e) {
    $('#visit-section').fadeToggle();
    e.preventdefault();
  })
});



// JS see more
$(function(){
  $('.see_more').on('click', function(e) {
    
    e.preventDefault();
    var id = $(this).data('id')

    $.get('/countries/' + id + '.json', function(datas){
    data = datas["data"].attributes

     $("#cont-" + id).html("Cities Visited: " + "<strong>" + data["city"] + "</strong>");
    
    });
  })
})



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

/*function see_less(){

  var id = $(this).data('id')
      $('.cont-' + id).addClass('hidden');
      $('.see_less').addClass('hidden');
      $('.see_more').removeClass('hidden');
     
  }



*/






