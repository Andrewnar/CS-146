var loadFile = function(event) {
		var image = document.getElementById('output');
		image.src = URL.createObjectURL(event.target.files[0]);
	};

function concactInfo() {  
	var mylist = document.getElementById("contactInfo");  
	document.getElementById("contactInfo").value = mylist.options[mylist.selectedIndex].text;  
}  

function contentInfo() {  
	var mylist = document.getElementById("contentInfo");  
	document.getElementById("contentInfo").value = mylist.options[mylist.selectedIndex].text;  
}

function updateContent(){
	var infoType = document.getElementById("contentInfo").value;
	var info = document.getElementById("userContent").value;

	if (infoType == "About Me") {
		document.getElementById("about").innerHTML = info;
	} else if (infoType == "Academics"){
		document.getElementById("academic").innerHTML = info;
	} else if (infoType == "Experience"){
		document.getElementById("exp").innerHTML = info;
	} else if (infoType == "Achievements"){
		document.getElementById("achievements").innerHTML = info;
	}

	document.getElementById("userContent").value = " ";
}

function updateInfo() {
	var infoType = document.getElementById("contactInfo").value;
	var info = document.getElementById("information").value;

	if (infoType == "LinkedIn") {
		var linkedin = document.getElementById('linkedin');
		linkedin.insertAdjacentHTML('afterend', "     ".concat(info));
	}
	if (infoType == "GitHub") {
		var github = document.getElementById('github');
		github.insertAdjacentHTML('afterend', "     ".concat(info));
	}
	if (infoType == "Email") {
		var email = document.getElementById('email');
		email.insertAdjacentHTML('afterend', "     ".concat(info));
	}
}