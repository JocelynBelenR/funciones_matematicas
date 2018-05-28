//LO QUE SE VEN EN LA CONSOLA
window.onload = function (){

function add(numUno,numDos){ //PRIMERA FUNCION
    return numUno+numDos; //SUMA
 }

function multiply(numUno,numDos){ //SEGUNDA FUNCION
    return numUno*numDos; //MULTIPLICACION
 }

var suma = add(9824,777); //VARIBLE QUE REALIZA LA SUMA
var final = multiply(suma,36325); //VARIABLE QUE REALIZA SUMA Y MULTIPLICACION
console.log(final); //RESULTADO FINAL QUE VA A MOSTRAR LA CONSOLA

} //SI COPIO TODO EL LA CONSOLA EL RESULTADO QUE DEBERIA APARECER ES = 385081325


//LO QUE SE VE EN LA PAGINA WEB
var btn = document.getElementById("button-brb"); //BOTON
var txt = document.getElementById ("final"); //BOTON
btn.addEventListener('click', function(){ //FUNCION AL HACER CLICK
    txt.innerHTML = "<p> El resultado final es 385.081.325 </p>"; //TEXTO AL HACER CLICK
})



/*INSTRUCCIONES;
Crea dos funciones, add y multiply. 
Cada una debe tomar dos argumentos. 
La función add debe sumar sus argumentos y devolver el resultado. 
La funcion multiply debe multiplicar sus argumentos. 
Usando solamente estas dos funciones, resuelva este simple problema matemático: 
36325 * (9824 + 777)*/