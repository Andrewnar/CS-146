var loadFile = function(event) {
		var image = document.getElementById('output');
		image.src = URL.createObjectURL(event.target.files[0]);
	};

function contactInfo() {  
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
	document.getElementById("information").value = " ";

}
function changeColor() {
	let color = document.getElementById('colorInputBackground').value;
	document.body.style.backgroundColor = color;
}
function changeTextColor() {
	let color = document.getElementById('colorInputText').value;
	document.getElementById("resumeTitle").style.color = color;
	//Titles
	document.getElementById("aboutMeTitle").style.color = color;
	document.getElementById("academicTitle").style.color = color;
	document.getElementById("expTitle").style.color = color;
	document.getElementById("achievTitle").style.color = color;
	//Text <b>
	document.getElementById("about").style.color = color;
	document.getElementById("academic").style.color = color;
	document.getElementById("exp").style.color = color;
	document.getElementById("achievements").style.color = color;
}
function changeSubBackgroundColor(){
	let color = document.getElementById('colorInputSubBackground').value;
	document.getElementById("about").style.backgroundColor = color;
	document.getElementById("academic").style.backgroundColor = color;
	document.getElementById("exp").style.backgroundColor = color;
	document.getElementById("achievements").style.backgroundColor = color;
	document.getElementById("footer").style.backgroundColor = color;
}
