//Front-End

$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();

var numToCount = $("#userInput").val();
var result = numToCount
    console.log(numToCount)
    console.log(result)
    $("#display-field").show();
    $("#display-field").text(result);

  });
});



//Variable Definitions

// Back-End
