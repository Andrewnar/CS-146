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

	if (infoType == "Background") {
		document.getElementById("background").innerHTML = info;
	} else if (infoType == "Interests"){
		document.getElementById("interests").innerHTML = info;
	} else if (infoType == "Hobbies"){
		document.getElementById("hobbies").innerHTML = info;
	}

	document.getElementById("userContent").value = " ";
}