$(document).ready(function() {

var numbers = ["one", "two", "three", "four", "five", "six", "seven","eight", "nine", "ten"];
	console.log(numbers);

for (var j = 0; j < 7; j++) {
	$("#textt").append(numbers[j]+"<br>");
	console.log(j +" is " + numbers[j]);
}

var content = '';


for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
    $("#text").append(content+"<br>");
}




});