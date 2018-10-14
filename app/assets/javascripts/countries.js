
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
  this.user_id = data.user_id
  this.country_id = data.country_id

}

Visit.prototype.renderDiv = function(){
  var html = ""
  //<form class="button_to" method="post" action="/countries/28/visits/2189"><input type="hidden" name="_method" value="delete"><input class="destroy" type="submit" value="Delete"><input type="hidden" name="authenticity_token" value="+f/nD8y3VSyVBoKrmxM+SSi/+s/+a+D/n0etDMdfuwXb4D1Pl9mccLI+Fder5yo+zoaxhfU9VSzS5BBSFg2YrQ=="></form>
  //var del = "<form class=\'button_to\' method=\'post\' action=\'/countries/25/visits/157\'><input type=\'hidden\' name=\'_method\' value=\'delete\'><input class=\'destroy\' type=\'submit\'value=\'Delete\'><input type=\'hidden\' name=\'authenticity_token\' value=\'VSYA4XiUkfs1t1i77WaeIXqyEu2urdCB7LpbTqh3QkZ3OdqhI/pYpxKPz8fdkopWnItZp6X7ZVKhGeYQeSVh7g==\'></form>
  html+= "<h5> Place Visited: <a href=" + this.country_id +"/visits/" + this.id+ ">" + this.visit_places + "</a> </h5><h5>Date: " + this.visit_date + "</h5><h5><form class=\'button_to\' method=\'post\' action=\'countries/\'" + this.country_id +"/visits/" + this.id+ "><input type=\'hidden\' name=\'_method\' value=\'delete\'><input class=\'destroy\' type=\'submit\'value=\'Delete\'></form>"
  $("div#visit").append(html)

}

$(function(){
  $("form.edit_visit").on("submit", function(e){
    
     e.preventDefault();
     var $form = $(this);
     var action = $form.attr("action");
     var params = $form.serialize();
    // debugger

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
      

    }).success(function(response){
      visit_info = response["data"]["relationships"]["visits"]["data"]
      //debugger
        $("#visit_visit_places").val("");
        var visit = new Visit(visit_info);
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






