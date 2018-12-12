 
 $(() => {
  deleteBucket()
  getBuckets()
})

 //delete bucket


function deleteBucket() {
  $('form.button_to').on('click', function (event) {
    event.preventDefault()
    let action = this.action
    let id = event.target.id

    $.ajax({
      type: 'delete',
      url: action,
      data: { bucket: { id: id } },
      dataType: 'json'
    }).success(function (response) {
      console.log("response: ", response);

    }).error(error => {
      console.log(error);
    })
  })
}

//load countries via ajax

function getBuckets() {
  $.ajax({
    url: '/buckets',
    dataType: 'json'
  }).success(function (data) {
    console.log('data', data);
    //debugger

  })
}



  // reload page when delete is clicked

$(document).on("click", "form.button_to", function(e){
  location.reload();
    e.preventDefault()
  })

  // navigate to previous page when 'back' link clicked
  
$(document).on("click", ".back", function(e){
    parent.history.back()
    e.preventDefault()
  })

  // navigate to previous page when 'back' link clicked

$(document).on("click", ".forward", function(e){
    parent.history.forward()
    e.preventDefault()
  })



// Clicking next on show page to view next country

$(function () {
  $(".next").on("click", function() {
    var nextId = parseInt($(".next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId + ".json", function(datas) {
      var data = datas["data"];
      var bucket = data["attributes"];
 
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
      // re-set the id to current on the link
      $(".next").attr("data-id", data["id"]);
      $(".previous").attr("data-id", data["id"])
    });
  });
});




  // Clicking previous on show page to view previous country

$(function () {
  $(".previous").on("click", function() {
    var previousId = parseInt($(".previous").attr("data-id")) - 1;
    $.get("/buckets/" + previousId + ".json", function(datas) {
      var data = datas["data"]
      var bucket = data["attributes"];

      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
      // re-set the id to current on the link
      $(".previous").attr("data-id", data["id"]);
      $(".next").attr("data-id", data["id"]);
    });
  });
});






/*Object Orient JavaScript constructor function to build a 
prototype for what an object (country) would look like, including all 
the properties (id, country, and user). A renderDiv method is also added to 
this object. */

function Bucket(data){
  
  this.id = data.id;
  this.country = data.attributes.country;
  //this.userId = data.attributes.user_id;


}


Bucket.prototype.renderDiv = function(){
   console.log("this",this)

  var html = "";
    html+= `<h5>
           
                <label>
                  <input type=checkbox name=checkbox id=checkbox data-toggle=checkbox></input>
                  <del>
                    <strong name =check_count class=check_count id= check_count>
                  <a href=/buckets/" ${this.id}> ${this.country}</strong>
                  </del>
                </label>
              <div id=del_ete>
                <form class=button_to data-method=delete href=buckets/${this.id}>
                  <input type=hidden name=_method value=delete>
                  <input data-confirm= "Are you sure you want to check off this country?" id=${this.id} data-method=delete type=submit value=TRAVELLED!>
                </form>
              </div>
          
          </h5>`
  $(".checkbox").append(html);


}

$(function(){
  $(".new_bucket").on("submit", function(e){
   
     e.preventDefault();
     e.stopPropagation();


     var $form = $(this);
     var action = $form.attr("action");
     // converting form from object to string
     var params = $form.serialize();

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST",
      



      }).success(function(response){
        

        bucketCount = response["data"]
        $("#bucket_country").val("");
        var bucketNew = new Bucket(bucketCount);

        
        console.log("bucketNew", bucketNew)
        bucketNew.renderDiv();
        
    

         
      })
     
  })
})








