 
// listeners
 $(() => {
  deleteBucket()

})


 //delete bucket

function deleteBucket() {
  $('form.button_to').on('click', function (event) {
    event.preventDefault()
    let action = this.action
    let id = event.target.id
    debugger

    $.ajax({
      type: 'delete',
      url: action,
      cache: false,
      data: { bucket: { id: id } },
      dataType: 'json',
    }).success(function (response) {
      console.log("response: ", response);

    }).error(error => {
      console.log(error);
    })
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
    let nextId = parseInt($(".next").attr("data-id")) + 1;
    $.get("/buckets/" + nextId + ".json", function(bucket) {
      //debugger
 
      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
      // re-set the id to current on the link
      $(".next").attr("data-id", bucket["id"]);
      $(".previous").attr("data-id", bucket["id"])
    });
  });
});




  // Clicking previous on show page to view previous country

$(function () {
  $(".previous").on("click", function() {
    let previousId = parseInt($(".previous").attr("data-id")) - 1;
    $.get("/buckets/" + previousId + ".json", function(bucket) {
     

      $(".bucketCountry").text(bucket["country"]);
      $(".bucketContinent").text("Continent: " + bucket["continent"]);
      $(".bucketCity").text("Cities you want to visit: " + bucket["city"]);
      $(".bucketDescription").text("Description: " + bucket["description"]);
      // re-set the id to current on the link
      $(".previous").attr("data-id", bucket["id"]);
      $(".next").attr("data-id", bucket["id"]);
      

    });
  });
});






/*Object Orient JavaScript constructor function to build a 
prototype for what an object (country) would look like, including all 
the properties (id and country). A renderDiv method is also added to 
this object. */

function Bucket(data){
  
  this.id = data.id;
  this.country = data.country;
}


Bucket.prototype.renderDiv = function(){
   console.log("this",this)

  let html = "";
    html+= `<div> 
                <label>
                  <input type=checkbox name=checkbox id=checkbox data-toggle=checkbox></input>
                  <del>
                    <strong name =check_count class=check_count id= check_count>
                  <a href=/buckets/${this.id}> ${this.country}</strong>
                  </del>
                </label>
              <div id=del_ete>
                <form class=button_to data-method=delete href=buckets/${this.id}>
                  <input type=hidden name=_method value=delete>
                  <input data-confirm= "Are you sure you want to check off this country?" id=${this.id} data-method=delete type=submit value=TRAVELLED!>
                </form>
              </div>      
          </div>`
  $(".checkbox").append(html);

}

$(function(){
  $(".new_bucket").on("submit", function(e){
   
     e.preventDefault();
     e.stopPropagation();
     

     let $form = $(this);
     let action = $form.attr("action");
     // converting form from object to string
     let params = $form.serialize();

    $.ajax({
      url: action,
      cache: false,
      data: params,
      dataType: "json",
      method: "POST",
    }).success(function(response){   


        bucketCount = response
        $("#bucket_country").val("");
        let bucketNew = new Bucket(bucketCount);

        
        console.log("bucketNew", bucketNew)
        bucketNew.renderDiv();
       
      })
     
  })
})








