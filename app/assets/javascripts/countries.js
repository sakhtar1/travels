
// listeners
 $(() => {
  getCountries()
})



//load countries via ajax
 function getCountries() {
  $.ajax({
    url: '/countries',
    dataType: 'json',
    cache: false
  }).success(function (datas) {
    console.log('datas', datas);

   const countries = datas 
   const dataList = `<ol><strong>${countries
    .map(
      country =>
        '<li><strong>' +
        '<a href=/countries/'+country.id + '>' + country.name + '</strong>' +
        '</li>'
    )
    .join('')}</strong></ol>`;
  $('.country').html(dataList);
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
// $(function(){
//   $('.see_more').on('click', function(e) {

//     e.preventDefault();
    
//     var id = $(this).data('id')

//     $.get('/countries/' + id + '.json', function(datas){

//     var data = datas["data"].attributes

//      $("#cont-" + id).html("Cities Visited: " + "<strong>" + data["city"] + "</strong>");

    
//     });
//   })

// })









