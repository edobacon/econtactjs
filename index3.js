// arrays y objetos
// trabajando con arrays


/**
 * variables -> const y let
 * tipos de datos -> string, number, boolean, null, undefined
 * operadores -> +, -, *, /, %, ++, --
 * estructuras de control -> if, else if, else, switch, ternario
 * valores por defecto -> ||
 * concatenacion de evaluaciones > &&, ||
 * nomeclatura de variables recomendada -> camelCase y screaming snake case
 * valores falsy -> false, 0, '', null, undefined, NaN
 * valores truthy -> true, 1, 'hola'
 */

const str = 'doce'
const num = +str

console.log(num, typeof num)

if (typeof num === 'number') {
  console.log('es un numero')
}

if (isNaN(num)) {
  console.log('no es un numero')
}

// objectos

// definir un estudiante

const name = 'Juan'
let lastname = 'Perez'
const age = 25

// const STUDENT = Object.freeze({
//   name: "Juan",
//   lastname: "Perez",
//   age: 25,
// });

const student = {
  name: 'Juan',
  lastname: 'Perez',
  age: 25,
}

student['name'] = 'Pedro'
student.lastname = 'Gomez'

student.lastName = 'Rosas'

console.log(student)
console.log(student.name, student.lastname) // Juan
console.log(student.lastName) // undefined
console.log(student['age']) // 25

if ('age' in student) {
  console.log('age existe en student')
} else {
  console.log('age no existe en student')
}

// arrays

const studentList = {
  stundent1: {
    name: 'Juan',
    lastname: 'Perez',
    age: 25,
  },
  student2: {
    name: 'Pedro',
    lastname: 'Gomez',
    age: 30,
  },
}

console.log(studentList)

const students = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Luis']

console.log(students)
console.log(students[0]) // Juan
console.log(students[4]) // Luis
console.log(students[5]) // undefined

students[0] = 'Carlos'
students[5] = 'Ana'
// students[1] = 100
console.log(students);


const stundent1 = {
  name: 'Juan',
  lastname: 'Perez',
  age: 25,
}
const student2 = {
  name: 'Pedro',
  lastname: 'Gomez',
  age: 30,
}

const students2 = [stundent1, student2]

console.log(students2)
console.log(students2[0].name) // Juan

// students2[100] = { name: 'Pablo', lastname: 'Lopez', age: 35 }

console.log(students2.length);

students2[students2.length] = { name: "Pablo", lastname: "Lopez", age: 35 };
students2[students2.length] = { name: "Maria", lastname: "Gonzalez", age: 40 };

console.log(students2);

const nums = [1, 2, 3, 4, 5]

console.log(nums);

nums.push(6)
nums.unshift(0)

console.log(nums)

students2[3].age = 20 // de donde viene ese 3?
console.log(students2)

const elem1 = { ok: true } // memory slot 100
const elem2 = { ok: true } // memory slot 200

const elems = [elem1, elem2] // -> [ memory slot 100, memory slot 200 ]

console.log(elems)

elem1.ok = false

console.log(elems);

// JSON stringify
// JSON parse

elem1.ok = true;

// romper la referencia de objetos
const elems2 = [JSON.parse(JSON.stringify(elem1)), JSON.parse(JSON.stringify(elem2))]
// const elems3 = [{ elem1: elem1 }] // paso 1
// const elems3 = [{ elem1 }] // paso 2
const elems3 = [{ ...elem1 }] // paso 3 -> spread operator de objeto
// creando un objeto NUEVO con los mismos valores de elem1, pero sin la referencia de memoria

elem1.ok = true

console.log(elems2, elems3)

elem1.ok = false;

console.log(elems2, elems3);

//

const item1 = { name: 'mi item' }
const item2 = item1
const item3 = { ...item1 }

// item3 = 'hjfdhjfhf' // no se puede reasignar un valor a una constante

item1.name = 'otro-item'

console.log(item2, item3)

const count = 1
const item4 = { count: count };
const item5 = { count };

console.log(item4, item5);

console.log('item4: ', item4, 'item5: ', item5);
console.log({ item4: item4, item5: item5 });
console.log({ item4, item5 });


const check1 = true
const check2 = false
const check3 = false
const check4 = false
const check5 = true
const check6 = false

console.log('1', check1, '2', check2, check3, check4, check5, check6)

console.log({ check1, check2, check3, check4, check5, check6 });

// destructuring
// function declaration