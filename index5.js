function fnName(param1, param2) {
  // do something
}

const fnResult1 = fnName(2, 2)
const fnResult2 = fnName(3, 3)


let var1 = null
let var2 = null
function init(val1 = 0, val2 = 0) {
  var1 = val1
  var2 = val2
}

// ...

init(1,2)

// ...

init() // init(0,0)

let letFn = function() {
  // do something
}
letFn()
letFn = null
// letFn() // error!!!!

const constFn = function() {
  // do something
}
// constFn = null // error!!!!

const arrowFn1 = (param1, param2) => {
  // do something
  return param1 + param2
}
const arrowFn2 = (param1, param2) => param1 + param2
const arrowFn3 = param1 => param1 * 2
const arrowFn4 = () => true
const arrowFn5 = text => ({ ok: true, text })

// 

const student1 = {
  name: 'John',
  lastname: 'Doe',
  age: 25
}

const saludar = (st) => {
  try {
    // validar que el parametro sea un obkjto que tenga esas propiedades
    // validar que las propiedades sean de tipo string
    if (st === null || typeof st !== "object" || Array.isArray(st)) {
      throw new Error("El parametro debe ser un objeto");
    }
    //
    console.log('!!!!!')
    const { name, lastname } = st;
    return `Hola, soy ${name} ${lastname} y tengo ${st.age} años`;
  } catch(e) {
    console.error(e)
    console.log("!!!!!");
  } finally {
    console.log('finally')
  }
}

const s = saludar(2) // error !!!!
console.log(s)

const saludo1 = saludar(student1)
console.log(saludo1)

const student2 = {
  name: 'Jane',
  lastname: 'Doe',
  age: 22,
  saludar: function() {
    return `Hola, soy ${this.name} ${this.lastname} y tengo ${this.age} años`;
  }
}

const saludo2 = student2.saludar()
console.log(saludo2)

//
const studentCreate = (name, lastname, age) => {
  return {
    name,
    lastname,
    age,
    saludar: function() {
      return `Hola, soy ${this.name} ${this.lastname} y tengo ${this.age} años`;
    },
    rename: function(newName) {
      console.log(this)
      this.name = newName
    },
    rename2: (newName) => {
      console.log(this)
      this.name = newName
    }
  }
}

// cuando se usa funcion flecha
// en todos los casos, excepto cuando sea un metodo de un objeto, un metodo de una clase, el callback de un event listener

const student3 = studentCreate('Javier', 'Soto', 30)
console.log(student3)
console.log(student3.saludar())
student3.rename('Javi')
console.log(student3.saludar())
student3.rename2('Pedro')
console.log(student3.saludar())

// console.log(param) === student3.rename('Pedro')

// arrays  -> metodos de arrays, para su uso

const arr = ['a', 'b', 'c', 'd', 'e']

// que posicion tiene el valor 'c'
const index1 = arr.indexOf('c')
const index2 = arr.findIndex(item => item === 'c')
// busca el indice, ejecutando una funcion contra los elementos (recorriendolos) 
// y si el retorno es true se detiene y devuelve el indice
const evaluador = (item) => item === 'c'
const index3 = arr.findIndex(evaluador)
// si no encuentra el valor, devuelve -1
const elem = arr.find(evaluador)
// si no encuentra el valor, devuelve undefined

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evaluador2 = (item) => item < 3
const arr2ver2 = arr2.filter(evaluador2)

const user = (name, isAuth) => {
  return {
    name,
    isAuth,
  };
};

const users = [user('Javier', true), user('Pedro', false), user('Juan', true), user('Maria', true)]
console.log(users)
const authUsers = users.filter(u => u.isAuth)
console.log({authUsers})
const notAuthUsers = users.filter(u => !u.isAuth)
console.log({notAuthUsers})

// 
const arr3 = arr2.filter(item => item < 3).findIndex(item => item === 2)

// 
users.forEach((user, index) => {
  console.log(index, user.name)
})
const userWithId = users.map((user, index) => {
  return { ...user, id: index, name: 'Pepe' };
})

console.log({userWithId});