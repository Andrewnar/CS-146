function colorSelect(element, code) {
    var formatCode = "[id='" + code + "']";
    var elms = document.querySelectorAll(formatCode);

    for(var i = 0; i < elms.length; i++) 
        elms[i].style.backgroundColor = element.value; 
}