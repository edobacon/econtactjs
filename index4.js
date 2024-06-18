/*
*  objetos
* {} -> key/propiedad - valor
object.property = ''
object['property'] = ''

obj1 = { prop1: 'value1', prop2: 'value2' }
const obj2 = { ...obj1 }
*/

/**
 * arrays
 * [] -> index/ numerico y automatico - valor
 * array[index] = ''
 * 
 * array1 = ['value1', 'value2']
 * const array2 = [ ...array1 ]
 * 
 * push -> agrega un elemento al final del array
 * unsift -> agrega un elemento al inicio del array
*/

// destructuring

const obj = { name: 'juan', age: 25, country: 'CO' }
console.log(obj.name);
const objName = obj.name
const objAge = obj.age
const objCountry = obj.country
console.log(objName);

const { name, age, country } = obj

const obj2 = { name: "pedro", age: 20, country: "ARG" };
console.log(name, age, country);

const { name: name2 } = obj2
console.log(name, name2)

//

const arr = [ 'uno', 'dos', 'tres' ]

const [ one, two, three ] = arr
console.log({one, two, three})

const [,,nuevo3] = arr
console.log({nuevo3})


// function declaration

// console.log("soy una función");
// console.log("sigo siendo una función");
// console.log("-------------");
// console.log("soy una funcion");
// console.log("sigo siendo una funcion");
// console.log("-------------");
// console.log("soy una funcion");
// console.log("sigo siendo una funcion");
// console.log("-------------");

function nameFunction(num) {
  // let num = num
  // -> instructions
  console.log(num)
  console.log('EJECUCION Nº ' + num)
  console.log('soy una función')
  console.log("sigo siendo una función");
  const text1 = 'esta es una funcion que recibe num con valor ' + num +  ' y num es de tipo ' + typeof num;
  const text2 =
    `${1 === 1} 
    esta es una funcion que recibe num con valor ${num} 
    y num es de tipo ${typeof num}`;
  console.log(text2);
  console.log("-------------"); // -> template literals
}

// console.log(num) no se puede acceder a num desde fuera de la función

console.log('AFTER FUNCTION DECLARATION')

// nameFunction(1);
// nameFunction(2);
// nameFunction(3);
// nameFunction(4);
// nameFunction(6);

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('los valores deben ser de tipo number')
    return null
  }
  const val =  a + b
  return val * 2
}


const val1 = sum(2, 2) // 4
const val2 = sum(val1, 4) // 8

if (val1 !== null && val2 !== null) {
  console.log({ val1, val2 });
} else {
  console.log("error en tipado de las sumas");
}


function saludar(name, lastname) {
  return `Hola, soy ${name} ${lastname}`
}

console.log(saludar("Perez", "Juan"));

const student1 = { name: 'Javier', lastname: 'Soto' }
const student2 = { lastname: 'Rosas', name: 'Pedro' }

const saludo1 = saludar(student1.name, student1.lastname)
// destructurar y pasar las variables
const { name: studentName, lastname } = student2
const saludo2 = saludar(studentName, lastname);

function nuevoSaludo(student) {
  const { name, lastname } = student
  return `Hola, soy ${name} ${lastname}`
}

const saludo3 = nuevoSaludo(student1)
console.log({saludo3})

// var uno = 1 ->
// window.uno = 1

let var1 = 1 // -> global
let var2 = 2 // -> global
function fn3() {
  var1 = 2
  let var2 = 3 // -> local
  if (true) {
    let var2 = 4 // -> local
    console.log(var2)
  }
  console.log(var1, var2)
}
console.log(var2) // no se puede acceder a var2 desde fuera de la función

fn1("hola1"); // -> se ejecuta previo a su declaracion debido al hoisting
// fn2("hola2"); -> no se ejecuta previo a su declaracion

function fn1(params) {
  console.log('soy una funcion declarada', params)
  return params
}

let fn2 = function (params) {
  console.log('soy una funcion anonima', params)
  return params
}

fn2("hola2");

// arrow functions

// function() {}
// () => {}

const arrowFn1 = (param1, param2) => { 
  // console.log(param1, param2)
  return param1 + param2
}

// (true === 1)

const arrowFn2 = (param1, param2) => param1 + param2
const arrowFn3 = param1 => param1 * 2
const arrowFn4 = text => ({ text })

console.log(arrowFn1(1, 2))


const arrowFn5 = (params1, cb) => {
  console.log('antes de ejecutar el callback', params1)
  cb()
}

const cbFn = () => {
  console.log('soy un callback')
}
arrowFn5("parametro1", cbFn);

arrowFn5('parametro1', () => {
  console.log('soy un callback')
})


const consola = (val) => {
  console.log("el valor por consola", val);
  return 111
}

const arrowFn6 = (num1, cb) => {
  console.log(cb)
  const val = num1 * 2
  cb(val)
}

arrowFn6(3, consola) // se pasa la referencia de la función
arrowFn6(3, consola()); // se ejecuta la función y se pasa el valor de retorno

