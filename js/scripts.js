//business logic

for (var currentNumber = 1; currentNumber <= userInput; currentNumber += 1) {
  if (currentNumber % 3 === 0) {
    alert("ding");
  } else if (currentNumber % 5 === 0) {
    alert("dong");
  } else if (currentNumber % 15 === 0) {
    alert("dingdong");
  } else if (currentNumber % 3 !== 0 || currentNumber % 5 !== 0 || currentNumber % 15 !== 0) {
    alert(currentNumber)
  } else {
    alert("Enter a number dingus");
  }
}




//user logic

var userInput = parseInt(number)

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
