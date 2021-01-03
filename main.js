
function getRandomInt(min, max) {
    min = Math.ceil(min);
	max = Math.floor(max);
	let number = Math.floor(Math.random() * (max - min + 1)) + min;
	document.getElementById("output").innerHTML = number;
}

function getPrompt() {

	document.getElementById("ran").innerHTML = document.getElementById("output").value;
	document.getElementById("button").innerHTML = document.getElementById("number").value;
	if (document.getElementById("number").value > document.getElementById("randomNumber").value) 
	{
		document.getElementById("prompt").innerHTML = "Nope, too high!";
	}
	else if (document.getElementById("number").value < document.getElementById("randomNumber").value) 
	{
		document.getElementById("prompt").innerHTML = "Nope, too low!";
	}
	else
	{
		document.getElementById("prompt").innerHTML = "Yep, that's it!";
	}
}