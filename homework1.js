//Nombre y Apellido:
//Curso: 
//Grupo:
//Taller de Programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

// Trabajo Practico N°1

// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola" ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 567;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 5 === 50 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:

return str;
}

function devolverString(str) {
  var str = "hola";
  return str;
}


function suma(x, y) {
  var suma= (x + y);
  return suma;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  

}
suma (5,5)//10


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
}

function restar(x, y){
    var resta= x-y;
    return resta;
}
restar (8, 2); //6

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function multiplicar (x, y) {
  var multiplica= x*y;
  return multiplica;
}
multiplicar (10, 2); //20

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  }

function dividir (x, y){
  var divide= x/y;
  return divide;
}
dividir (20, 2); //10


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código: 
}

funtion sonIguales (x, y) {
  if (x = y) {
    return true;
  } else {
    return false;
}
}
sonIguales (5,5);




//revisar
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

tienenMismaLongitud("hola", "chau");



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"  // Tu código:
 }

 function menosnoventi(num) {
  if (num < 90 ) {
    return true;
  } else {
    return false;
  }
 }
 menosnoventi(22); //true

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

function mayorcincuenti(num) {
  if (num > 50 ) {
    return true;
  } else {
    return false;
  }
 }
 mayorcincuenti(60); //true

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
 

}

function resto (x, y ) {
  var resto = x % y; 
  return resto;
}
resto (10, 3); //1


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:



}

function par (num){
if (num % 2 === 0) {
  return true;
} else {
  return false;
}
}
par (8); //true

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function impar (num){
if (num % 3 === 0) {
  return true;
} else {
  return false;
}
}
impar (8); //false

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}
function elevarCuadrado(num) {
  var elevarCuadrado = Math.pow(num,2);
  return elevarCuadrado
}
elevarCuadrado(5); //25



function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}
function elevarCubo(num) {
 var elevarCubo = Math.pow(num, 3);
return elevarCubo;
}
elevarCubo(5);


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}
function elevar(num, exponent) {
  var elevar = Math.pow (num, exponent);
  return elevar;
}
elevar (2,2); //4

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
}

function redondearNum(num) {
  var redondearNum = Math.round (num);
   return redondearNum;
}
redondearNum (99.0001);


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
}

function redondearHaciaUp (num){
  var redondearHaciaUp = Math.round(num);
  return redondearHaciaUp;
}
redondearHaciaUp(99.50);//100


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function agregarSimboloExclama(str){
  var agregarSimboloExclama = str + "!";
  return agregarSimboloExclama;
}

agregarSimboloExclama("hola"; //hola!


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Juan " -> "Soy Juan"
  // Tu código:
}

function combinarNomb(nombre, apellido) {
  return nombre + "" + apellido;
}
combinarNomb("Eduardo", "Fernandez");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerSaludo(nombre) {
  return obtenerSaludo = "hola" + " " + nombre;
}
obtenerSaludo("Edu")


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
}

function obtenerAreaRectangulo (alto, ancho) {
  return alto * ancho;
}
obtenerAreaRectangulo (10, 3); //30


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
