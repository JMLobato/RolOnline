/**
 * @author usuario
 */
function finde(N1){
if (isNaN(N1)){
	document.write( N1 + " no es un número" + "<br/>");
}
	else if ((N1>=1) && (N1<=7)) {
	
			if(N1>=6){document.write("Es fin de semana" + "<br/>");}
			
			else {document.write("No es fin de semana" + "<br/>");}
		}
		else {document.write("No es un número valido"+"<br/>");}
}

function diassemana(X){
	
	var dias=new Array(7);
	dias[0]="Lunes";
	dias[1]="Martes";
	dias[2]="Miercoles";
	dias[3]="Jueves";
	dias[4]="Viernes";
	dias[5]="Sábado";
	dias[6]="Domingo";
	
	if ((X>=1) && (X<=7)) {
	
			if(X>=6){document.write("Es fin de semana y el dia es "+ dias[X-1] + "<br/>");}
			
			else {document.write("Es entre de semana y el dia es "+ dias[X-1] + "<br/>");}
		}
	else {document.write("No es un número valido"+"<br/>");}
}
function diactual(){
	
	var dias=new Array(7);
	dias[0]="Lunes";
	dias[1]="Martes";
	dias[2]="Miercoles";
	dias[3]="Jueves";
	dias[4]="Viernes";
	dias[5]="Sábado";
	dias[6]="Domingo";
	var fecha=new Date();
	document.write("Hoy es "+dias[fecha.getDay()-1]);
}
function tabla(){
	
	var dias=new Array(7);
	dias[0]="Lunes";
	dias[1]="Martes";
	dias[2]="Miercoles";
	dias[3]="Jueves";
	dias[4]="Viernes";
	dias[5]="Sábado";
	dias[6]="Domingo";
	document.write("<table border=1>");
	for(var i=0;i<=6;i++){document.write("<th><td>"+dias[i]+"</td></th>");}
	for(var i=0;i<=6;i++){document.write("<tr><td>"+dias[i]+"</td></tr>");}
	document.write("</table>");
}