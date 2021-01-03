var n = getRandomInt(1, 100);

function getRandomInt(min, max) {
    min = Math.ceil(min);
	max = Math.floor(max);
	let number = Math.floor(Math.random() * (max - min + 1)) + min;
	return number;
}

function getPrompt() {
	if (document.getElementById("number").value > n) 
	{
		document.getElementById("prompt").innerHTML = "Nope, too high!";
	}
	else if (document.getElementById("number").value < n) 
	{
		document.getElementById("prompt").innerHTML = "Nope, too low!";
	}
	else
	{
		document.getElementById("prompt").innerHTML = "Yep, that's it! Refresh to play again!";
		document.getElementById("output").innerHTML = n;
	}
}