
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
  //<form class="button_to" method="post" action="/countries/28/visits/2189"><input type="hidden" name="_method" value="delete"><input class="destroy" type="submit" value="Delete"><input type="hidden" name="authenticity_token" value="+f/nD8y3VSyVBoKrmxM+SSi/+s/+a+D/n0etDMdfuwXb4D1Pl9mccLI+Fder5yo+zoaxhfU9VSzS5BBSFg2YrQ=="></form>
  //var del = "<form class=\'button_to\' method=\'post\' action=\'/countries/25/visits/157\'><input type=\'hidden\' name=\'_method\' value=\'delete\'><input class=\'destroy\' type=\'submit\'value=\'Delete\'><input type=\'hidden\' name=\'authenticity_token\' value=\'VSYA4XiUkfs1t1i77WaeIXqyEu2urdCB7LpbTqh3QkZ3OdqhI/pYpxKPz8fdkopWnItZp6X7ZVKhGeYQeSVh7g==\'></form>
  html+= "<h5> Place Visited: <a href=\'countries/28/visits/2186\'>" + this.visit_places + "</a> </h5><h5>Date: " + this.visit_date + "</h5><h5><form class=\'button_to\' method=\'post\' action=\'/countries/25/visits/157\'><input type=\'hidden\' name=\'_method\' value=\'delete\'><input class=\'destroy\' type=\'submit\'value=\'Delete\'></form>"
  $("div#visit").append(html)
}

$(function(){
  $(".edit_visit").on("submit", function(e){

    e.preventDefault();
    $.ajax({
      type: "POST",
      url: this.action + ".json",
      data: $(this).serialize()
      

    }).success(function(response){
      debugger
        $("#visit_visit_places").val("");
        var visit = new Visit(response);
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






