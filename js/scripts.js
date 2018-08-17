//Front-End
$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
var initialInput = $("#userInput").val();
    if (initialInput === "0") {
      $("#display-field").show();
      $("#display-field").text("Beep!");
      }
    else {
      $("#display-field").show();
      $("#display-field").text(initialInput);
      }
  });
});


//Variable Definitions

// Back-End
