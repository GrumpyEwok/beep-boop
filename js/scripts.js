//Front-End
$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var initialInput = parseInt($("#userInput").val());
    var output = beepBoop(initialInput);


    $("#display-field").show();
    $("#display-field").text(output);
  });
});


// Back-End
var beepBoop = function(userInput){
  var results = [];


  for (var i = 0; i <= userInput; i++){
    if (i % 3 === 0 && i !== 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      results.push(i).toString();
    }
  }
  return results;
}

// My thought process for the early specs:
//
    // if (initialInput === "0") {
    //   $("#display-field").show();
    //   $("#display-field").text("Beep!");
    //   }
    //
    // else if (initialInput === "1") {
    //   $("#display-field").show();
    //   $("#display-field").text("Boop!");
    // }
    //
    //   else if (initialInput % 3 === 0) {
    //   $("#display-field").show();
    //   $("#display-field").text("I'm sorry, Dave. I'm afraid I can't do that.");
    // }
    //
    // else {
    //   $("#display-field").show();
    //   $("#display-field").text(initialInput);
    //   }
