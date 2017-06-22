//business logic
for (var currentNumber = 1; currentNumber <= userInput; currentNumber += 1) {
  if (currentNumber % 3 === 0) {
    alert("<p>ding</p>");
  } else if (currentNumber % 5 === 0) {
    alert("dong");
  } else if (currentNumber % 15 === 0) {
    alert("dingdong");
  } else if (currentNumber % 3 !== 0 || currentNumber % 5 !== 0 || currentNumber % 15 !== 0) {
    alert(currentNumber);
  } else {
    alert("Enter a number dingus");
  }
};




//user logic

var userInput = parseInt($("input.number").val());

$(document).ready(function(event) {

  $("form.enterNumber").submit(function() {

  $(".answer").append();
  event.preventDefault();
  });
});

// var names = [];
//
//
// function displayUserName()
// {
//   var theName = document.getElementById("enter").value;
//   if (theName == "" || theName.length == 0)
//   {
//      return false; //stop the function since the value is empty.
//   }
//   names.push(theName);
//   document.getElementById("name").children[0].innerHTML += "<li>"+names[names.length-1]+"</li>";
// }
