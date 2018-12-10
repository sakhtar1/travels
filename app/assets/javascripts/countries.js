 
 $(() => {
  getCountries() 
})

//load countries via ajax
 function getCountries() {
  $.ajax({
    url: '/countries',
    dataType: 'json'
  }).success(function (data) {
    console.log('data', data);
    //debugger

  })
}
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









