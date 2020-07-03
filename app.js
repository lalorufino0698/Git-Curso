/*document.write("<h1>Hola Mundo </h1>");*/

//tipos de datos
"Hola Mundo" //String- Cadena de Caracteres
'Hola Mundo' //También es un String parar JavaScript


console.log("this is a string")


//Tipo de dato boolean o logicos
true 
false

//Numbre
12000
123.3

//Lista de items, o arreglos (array)
['eduardo', 'marta' ,'joan']-
[1, 2, 3, 4]
[true, false, true, false]

//Tipo de datos objetos, conocido como object 

{
    //comparar clave(propiedad)- valor, asi se le conoce como objeto
    "username" : 'eduardo',
    "score": 70.5,
    "hours" : 14,
    "proffessional" : true,
    "Friends" : ['lucas','mateo']

}

{
    //comparar clave- valor, asi se le conoce como objeto
    "username" : 'richard',
    "score": 0.5,
    "hours" : 1,
    "proffessional" : false,
    "Friends" : ['lucas','mateo']

}


//Variables, cambiar en una cierta parte del codigo
var username = "Eduardo";
let lastname = "Orozco";

//Constantes: sigue con el mismo valor
const PI = 3.1416;

//camelCase
let userName = "lalo";
//otra manera
let user_name;


console.log(username)


//operadores

let nombre = "Eduardo"
let apellido = "Orozco"

let result =  nombre == apellido ;

console.log(result);


//Condiciones

if(result === true){
console.log("Login Correcto");
}
else{
    console.log("Login Incorrecto")
}

//Funciones

function Saludar() {
console.log("Hello");
}

Saludar();