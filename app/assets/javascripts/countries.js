
// listeners
 $(() => {
  getCountries()

})



//load index page of countries via ajax
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
          `<h4><li><strong>
          <a href=/countries/${country.id}> ${country.name} </strong></h3><ul><li>Sites Visited: ${country.visits.map( visit => visit.visit_places)}</ul></li><br></li>` 
      ).join(" ")}</ol>` ;

    $('.country').html(dataList + `<h5><a href="/countries/new"> Log a New Country. </a></h5>
      <h5> Go to <a href="/continents"> Continents. </a></h5>`) ;
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












