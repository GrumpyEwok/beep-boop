//Front-End
$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var initialInput = parseInt($("#user-input").val());
    var output = beepBoop(initialInput);
    var outputString = output.join("");

    $("#display-field").show();
    $("#display-field").text(outputString);
  });
});


// Back-End
var beepBoop = function(userInput){
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var inputString = (i).toString();
    if (i % 3 === 0 && i !== 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (inputString.includes("1")) {
      results.push("Boop! ")
    } else if (inputString.includes("0")) {
      results.push("Beep! ");
    } else {
      results.push(""+ i +". ")
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
