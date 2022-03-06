	function cal(){
	document.getElementById("per").value=(document.getElementById("om").value/document.getElementById("mm").value)*100

	var percentage=document.getElementById("per").value;
	var g;
	switch(Math.floor(percentage/10)){
		case 10: g="awesome"
        case 9: g="outstanding";
                break;
        case 8: g="distinction";
                break;
                case 7: g="first class with distinction";
                break;
        case 6: g="first class";
                break;         
        case 5: g="second class";
                break;
        case 4: g="pass";
                break;
        default: g="fail"
                 break; }

	document.getElementById("grade").value=g;
}      