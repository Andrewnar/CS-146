function colorSelect(element, code) {
    var formatCode = "[id='" + code + "']";
    var elms = document.querySelectorAll(formatCode);

    for(var i = 0; i < elms.length; i++) 
        elms[i].style.backgroundColor = element.value; 
}
function concactInfo() {  
	var mylist = document.getElementById("contactInfo");  
	document.getElementById("contactInfo").value = mylist.options[mylist.selectedIndex].text;  
}  

function updateInfo() {
	var infoType = document.getElementById("contactInfo").value;
	var info = document.getElementById("information").value;

	if (infoType == "LinkedIn") {
		var linkedin = document.getElementById('linkedInLink');
		linkedin.setAttribute('href', info);
	}
	if (infoType == "GitHub") {
		var github = document.getElementById('githubLink');
		github.setAttribute('href', info);
	}
	if (infoType == "Email") {
		var email = document.getElementById('emailLink');
		email.setAttribute('href', info);
	}
}