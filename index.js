// ejecutar js
// ver datos en consola
console.log('FILE !')
// console.log(hola)


// tipos de datos

/*
    String - cadena de texto - 'hola mundo'
    Number - numero - 123 - integer - float - 11.22
    Boolean - false /0- true /1
    Null - vacio - null
    Undefined - indefinido - undefined
*/

// variables - unidad de memoria orientado a almacenar datos

var fechaDeAniversario = "30-04";

console.log('30-04')
var fechaDeAniversario = '01-05'
console.log(fechaDeAniversario);

//var con es6 - const - let

const nombre = 'Juan';
let edad = 30
let esMayorDeEdad = true
let iniciaSesion = null
let apellido = undefined
let nick

// nombre = 'Pedro'
edad = 31
edad = 'poroto'

console.log(nombre, edad, "31", esMayorDeEdad, iniciaSesion, apellido, nick);

// operadores aritemeticos
// + - * / %

const valor = 1000
const impuesto = 200

let suma = 1 + 1
const valorTotal = valor + impuesto
const propina = valorTotal * 0.1
const descuento = 150
const valorConPropina = valorTotal + propina - descuento

let valor2 = 1000 
valor2 = valor2 + 200
valor2 += 200
valor2++

let val1 = 1
let val2 = '1'

let total = val1 + val2

console.log(suma, valorTotal, descuento, valorConPropina);
console.log(val1, '+', val2, '=', total);

console.log('hola' + 'mundo')

console.log(typeof val1, typeof val2, typeof total)

// parsear datos

const numStr = val1.toString()
const strNum = parseInt(val2)

console.log('numStr', numStr, 'strNum', strNum)


const edadToNum = parseInt(edad)

console.log(edadToNum);

console.log(+'311', 311+'')
console.log(+numStr, strNum+'');

// operadores de comparacion

// == === != !== > < >= <=

console.log(1 == 1);

// operadores logicos
// estructuras de control - condiciones
// arrays y objetos
// trabajando con arrays
// estructuras de control - ciclos
// funciones