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
	
	if(infoType == "Email"){
		var email = document.getElementById('emailLink');
		email.setAttribute('href', "mailto:" + info);
	} else if(infoType == "GitHub"){
		var git = document.getElementById('githubLink');
		git.setAttribute('href', info);
	} else if(infoType == "LinkedIn"){
		var link = document.getElementById('linkedInLink');
		link.setAttribute('href', info);
	} else if(infoType == "Name"){
		var nam = document.getElementById("userName");
		nam.innerHTML = info;
	}

	document.getElementById("userContent").value = " ";
}
function changeColor() {
	let color = document.getElementById('colorInputBackground').value;
	document.body.style.backgroundColor = color;
}
function changeTextColor() {
	let color = document.getElementById('colorInputText').value;
	document.getElementById("userName").style.color = color;
	document.getElementById("title").style.color = color;
}
