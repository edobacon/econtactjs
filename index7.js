// sincronico
// fn() -> return value
//
// asyncronico
// Promise() -> then() - estado pendiente -> resolved = value // rejected = error

// timers

// timeout

const fn = (n) => {
  console.log('TIMEOUT', n)
  return n
}

// ??? fn !== fn()
// const value1 = fn // value1 === fn // fn() === value1()
// const value2 = fn() // value2 === n // 

// console.log(1)

// funciona !
// setTimeout(fn, 4000);

// setTimeout(fn(1), 2000)

// console.log(2)

// setTimeout(fn(2), 1000);

const demoTimeout = (cb, n) => {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  //
  cb() // undefined()
}

const cbToTimeout =( ) => { console.log('DEMO TERMINADO!')}

let i = 10;
i = 5
const fn2 = () => {
  return fn(i)
}

demoTimeout(() => fn(1000), 100);

// setTimeout(cbToTimeout, 10000);

// clean timeout
// interval

let count = 0
const interval = setInterval(() => {
  if (count <= 3) {
    // console.log("INTERVAL", count);
    count++;
  }
  if (count > 3) {
    clearInterval(interval)
  }
  console.log('!')
}, 500);

// clean interval

// fetch

console.log('antes')
for (let i = 0; i < 100; i++) {
  // console.log(i);
}
console.log("despues");

const timeout = setTimeout(() => {
  console.log('TIMEOUT DE 10');
}, 10000);

const timeout2 = setTimeout(() => {
  console.log('TIMEOUT DE 1');
  clearTimeout(timeout);
}, 1000)

const timeout3 = setTimeout(() => {
  console.log("TIMEOUT DE 15");
}, 15000);


// fetch


fetch("https://jsonplaceholder.typicode.com/todos/1", { method: 'POST' }) // Promise -> pregunta a un servidor
.then(respuesta => { // espere la respuesta de la promesa
  console.log('RESPUESTA', respuesta)  // respuesta de la promesa
  // respuesta contiene un metodo/promesa para leer el body de la respuesta
  // respuesta.json() -> Promise -- esta promesa esta pendiente
  return respuesta.json()
})
.then(datos => { // esperando que se resuelkva el retorno anterior (respuesta.json())
  // se resolvio la promesa de .json
  console.log('JSON', datos) 
  const token = 'bkasjdkasdnhkjlsahnd'
  return fetch('www.', { method: 'POST', body: { token }})
})
.then(respuesta => {
  console.log('RESPUESTA', respuesta)
  console.log(datos)
  return respuesta.json()
})
.catch(error => console.error('catch', error))
.finally(() => {
  console.log('PROMESA FINALIZADA')
})

// fetch - axios ambos son para hacer consuiltas a servidores
// fetch - promesa -> respuesta que tiene un metodo que es una promesa para leer el body




// .then((response) => response.json())
  // .then((json) => console.log(json));





