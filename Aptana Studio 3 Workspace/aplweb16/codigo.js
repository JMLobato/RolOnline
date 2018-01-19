alert("Holita");
var N1 = prompt("Introduce un número: ");
N2=N1%2;
if (isNaN(N1)){
	document.writeln( N1 + " no es un número" + "<br/>");
}
	else if ( N2 === 0){
		document.writeln( N1 + " es par" + "<br/>");
	}
	else {
		document.writeln( N1 + " es impar" + "<br/>");
}

var N3 = prompt("Introduce otro numero: ");
if (isNaN(N3)){
	document.writeln( N3 + " no es un número " + "<br/>");
}
	else if ( N1 >= N3 ){
		document.writeln(N1 + " es mayor que " + N3 + "<br/>");
	}
	else {
		document.writeln(N1 + " es menor que " + N3 + "<br/>");
	}
