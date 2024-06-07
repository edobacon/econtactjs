// operadores de comparacion

// == === != !== > < >= <=

// console.log(1 == 1);
// console.log(1 == 2);

console.log("1 == '1'", 1 == '1', "1 === '1'", 1 === '1');
console.log(1 != 2)

const AGE = 75
const LEGAL_AGE = 18
const RETIREMENT_AGE = 65
const hasLegalAge = AGE >= LEGAL_AGE;
const hasRetirementAge = AGE >= RETIREMENT_AGE;

"nombre_de_variable" // snake_case
"nombreDeVariable" // camelCase <-- preferido
"NombreDeVariable" // PascalCase
"nombre-de-variable" // kebab-case <-- no se puede usar en JS
"Nombre_de_variable" // snake_pascal_case
"NOMBRE_DE_VARIABLE" // SCREAMING_SNAKE_CASE

// let 1intento = true <-- no se puede tener un numero al inicio de una variable

console.log(AGE, hasLegalAge);

// operadores logicos
// && || !

console.log(
  '&&',
  AGE >= LEGAL_AGE,
  AGE >= RETIREMENT_AGE,
  AGE >= LEGAL_AGE && AGE >= RETIREMENT_AGE,
);

console.log(
  "||",
  AGE >= LEGAL_AGE,
  AGE >= RETIREMENT_AGE,
  AGE >= LEGAL_AGE || AGE >= RETIREMENT_AGE
);

console.log(hasLegalAge && hasRetirementAge);

const hasWorkingAge = hasLegalAge && !hasRetirementAge;

console.log('hasWorkingAge', hasWorkingAge);

console.log((true && true) && (true || false))

// falsy values
// false, 0, '', null, undefined, NaN

console.log(0 == false, 0 === false);

// estructuras de control - condiciones

/**
 * if (condition) {
 * // code
 * }
 */

if (hasWorkingAge) {
  console.log('Puede trabajar');
} else {
  console.log('No puede trabajar');
}

const falso = null

if (!falso) {
  console.log("es falso");
}

const verdadero = 'hjfhfhfh'

if (verdadero) {
  console.log("es verdadero");
}

if (null && true) {
  console.log("ambos son verdaderos"); // no se ejecuta
}

let edad = 31

if (edad) {
  console.log("tiene edad inicializada");
}

let value = null
value = !!value

console.log('value', value) // convierte el valor a booleano

const num = 0


let num2 = num || 0

console.log(num2)

const count = null; // null, NaN, undefined, 0, ''
const init = count || 0;
const init2 = count ?? 0; // null, undefined

const repuesta = null;
const respuesta2 = repuesta ?? "no hay registro";

num && console.log('num es verdadero')

if (num) {
  console.log('num es verdadero')
}

if (num) console.log('num es verdadero')

if (num === true) {
  console.log('num es verdadero')
} else if (num === false) {
  console.log('num es falso')
} else {
  console.log('num es otro valor')
}

const numero = 1

// if (numero === 1) {
//   console.log('es uno');
// } else if (numero === 2) {
//   console.log('es dos');
// } else if (numero === 3) {
//   console.log('es tres');
// } else {
//   console.log('es otro valor');
// }

// switch

switch (numero) {
  case 1:
    console.log('es uno');
    break
  case 2:
    console.log('es dos');
    break
  case 3:
    console.log('es tres');
    break
  default:
    console.log('es otro valor');
}

const tries = 0
console.log(tries)
if (tries === 0) {
  console.log('no hay intentos');
} else {
  console.log('hay intentos');
}

// num && console.log('num es verdadero')
const triesText = tries === 0 ? 'no hay intentos' : 'hay intentos'
console.log(triesText);

let triesText2 = ''
if (tries === 0) {
  triesText2 = 'no hay intentos'
} else {
  triesText2 = 'hay intentos'
}

const nIntentos = tries === 0 ? 'no hay' : tries === 1 ? 'hay 1' : 'hay mas de uno' // concatenacion de operadores ternarios -- no recomendado

// arrays y objetos
// trabajando con arrays
// estructuras de control - ciclos
// funciones
