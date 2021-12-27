var palabraIntroducida = prompt("Escribe una palabra o texto");
var aCont= 0; 
var eCont= 0;
var iCont= 0;
var oCont= 0;
var uCont= 0;
var otrosCont = 0;


for (var i = 0 ; i < palabraIntroducida.length ; i++) {


	switch(palabraIntroducida.charAt(i)) {

		case "a":
		aCont++;
		break;

		case "e":
		eCont++;
		break;

		case "i":
		iCont++;
		break;

		case "o":
		oCont++;
		break;

		case "u":
		uCont++;
		break;

		default:
		otrosCont++;
		break;

	}

}
document.write("Total de vocales: "  + aCont + "<br>E: " + eCont + "<br>I: " + iCont + "<br>O: " + oCont + "<br>U: " + 
uCont + "<br>Total de letras escritas: " + otrosCont);



 