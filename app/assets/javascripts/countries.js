
// Navigate to previous page when 'back' link clicked
  
$(document).on("click", "a.back", function(e){
    parent.history.back()
    e.preventDefault()
  })

// Visit view form content via anchor link

$(function(){
  $("#visit-link").on("click", function(e) {
    $('#visit-section').fadeToggle();
    e.preventDefault();
  })
});



// JS see more
$(function(){
  $('.see_more').on('click', function(e) {
    
    e.preventDefault();
    var id = $(this).data('id')

    $.get('/countries/' + id + '.json', function(datas){
    var data = datas["data"].attributes

     $("#cont-" + id).html("Cities Visited: " + "<strong>" + data["city"] + "</strong>");
    
    });
  })
})



// Visit form submit

function Visit(data){
  
  this.id = data.id;
  this.visit_places = data.visit_places;
  this.visit_date = data.visit_date;

}

Visit.prototype.renderDiv = function(){
  var html = ""
  //var del = $('.destroy').html('<a href="http://www.google.com">Google</a>');
  html+= "<h5> Place Visited: " + this.visit_places + "</h5><h5>Date: " + this.visit_date + "</h5>"
  $("div#visit").append(html)
}

$(function(){
  $(".edit_visit").on("submit", function(e){

    e.preventDefault();
    $.ajax({
      type: "POST",
      url: this.action + ".json",
      data: $(this).serialize()
      

    }).success(function(json){
      debugger
        $("#visit_visit_places").val("");
        var visit = new Visit(json);
        visit.renderDiv();
       
      
      
        
        
     
      })
   
  })
})



/*function see_less(){

  var id = $(this).data('id')
      $('.cont-' + id).addClass('hidden');
      $('.see_less').addClass('hidden');
      $('.see_more').removeClass('hidden');
     
  }



*/






