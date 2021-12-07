var loadFile = function(event) {
		var image = document.getElementById('output');
		image.src = URL.createObjectURL(event.target.files[0]);
}

function contentInfo() {  
	var mylist = document.getElementById("contentInfo");  
	document.getElementById("contentInfo").value = mylist.options[mylist.selectedIndex].text;  
}

function updateContent(){
	var infoType = document.getElementById("contentInfo").value;
	var info = document.getElementById("userContent").value;

	if (infoType == "Username") {
		document.getElementById("userName").innerHTML = info + "'s Portfolio";
	} else if (infoType == "Description"){
		document.getElementById("description").innerHTML = info;
	}

	document.getElementById("userContent").value = " ";
}
function changeColor() {
	let color = document.getElementById('colorInputBackground').value;
	document.body.style.backgroundColor = color;
}
function changeTextColor() {
	let color = document.getElementById('colorInputText').value;
	document.getElementById("aboutTitle").style.color = color;
	document.getElementById("userName").style.color = color;
	document.getElementById("description").style.color = color;
	document.getElementById("userCustomTitle").style.color = color;
	document.getElementById("infoTitle").style.color = color;
}
