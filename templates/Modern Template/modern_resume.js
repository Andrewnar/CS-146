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

	if (infoType == "Experience") {
		document.getElementById("exp").innerHTML = info;
	} else if (infoType == "Skills"){
		document.getElementById("skills").innerHTML = info;
	} else if (infoType == "Academics"){
		document.getElementById("academic").innerHTML = info;
	} else if (infoType == "Achievements"){
		document.getElementById("achievements").innerHTML = info;
	} else if (infoType == "Objective"){
		document.getElementById("objective").innerHTML = info;
	} else if (infoType == "Involvement"){
		document.getElementById("involvement").innerHTML = info;
	}
	
	document.getElementById("userContent").value = " ";
}