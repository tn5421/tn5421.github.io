var interval = setInterval(function() { document.getElementById("frame").blur() }, 100);
	
function turnOn(){
	document.getElementById("on").checked = true;
	document.getElementById("off").checked = false;
	document.getElementById("ontext").style.color = "#32CD32";
	document.getElementById("offtext").style.color = "grey";
	document.getElementById("on").blur();
}

function turnOff(){
	document.getElementById("on").checked = false;
	document.getElementById("off").checked = true;
	document.getElementById("offtext").style.color = "red";
	document.getElementById("ontext").style.color = "grey";
	document.getElementById("off").blur();
	document.getElementById("frame").focus();
}

function setIt(){
	interval = setInterval(function() { document.getElementById("frame").blur() }, 100);
}

function clearIt(){
	clearInterval(interval);
}

	
