//Front-End
$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
var initialInput = $("#userInput").val();
var initialInputInteger = parseInt($("#userInput").val())
    if (initialInput === "0") {
      $("#display-field").show();
      $("#display-field").text("Beep!");
      }
    else if (initialInput === "1") {
      $("#display-field").show();
      $("#display-field").text("Boop!");
    }
      else if (initialInputInteger % 3 === 0) {
      $("#display-field").show();
      $("#display-field").text("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      $("#display-field").show();
      $("#display-field").text(initialInput);
      }
  });
});


//Variable Definitions

// Back-End
