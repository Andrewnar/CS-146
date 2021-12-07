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
function changeColor() {
	let color = document.getElementById('colorInputBackground').value;
	document.body.style.backgroundColor = color;
}
function changeTextColor() {
	let color = document.getElementById('colorInputText').value;
	document.getElementById("aboutTitle").style.color = color;
	//Titles
	document.getElementById("backTitle").style.color = color;
	document.getElementById("intTitle").style.color = color;
	document.getElementById("hobTitle").style.color = color;
	//Text <b>
	document.getElementById("background").style.color = color;
	document.getElementById("interests").style.color = color;
	document.getElementById("hobbies").style.color = color;
	document.getElementById("formText").style.color = color;
	document.getElementById("userContent").style.color = color;


}
function changeSubBackgroundColor(){
	let color = document.getElementById('colorInputSubBackground').value;
	document.getElementById("background").style.backgroundColor = color;
	document.getElementById("interests").style.backgroundColor = color;
	document.getElementById("hobbies").style.backgroundColor = color;

}
