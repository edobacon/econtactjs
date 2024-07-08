// bootstrap - gracias !
// var -> no usar var
// if - else y flujo de control

const usuario = ''
const password = ''

if (usuario === '') {
  console.log('Usuario vacio')
} else if (password === '') {
  console.log('Password vacio')
}

if (usuario === "") {
  console.log("Usuario vacio");
} 
if (password === "") {
  console.log("Password vacio");
}
// llaves
if (usuario === "") {
  console.log("Usuario vacio");
}

if (usuario === "") console.log("Usuario vacio");

if (usuario === "") {
  console.log("Usuario vacio");
  console.log("Usuario vacio");
} else console.log("Usuario no vacio"); // consistencia

// if - else shortcut


function log (userio, contrasena) {
  if (usuario === "" || password === "") {
    console.log("Usuario vacio");
    if (usuario === "") {
      console.log("Usuario vacio");
    } else {
      console.log("Password vacio");
    }
    if (password === "") {
      console.log("Password vacio");
    }
  }
}

function log (usuario, contrasena) {
  if (usuario === "" || password === "") {
    console.log("Usuario vacio");
    return
  }

  if (password.length < 8) {
    console.log("Password muy corto");
    return
  }
}

// control de flujo con objetos

const loginCases = {
  USR_EMPTY: () => console.log("Usuario vacio"),
  PASS_EMPTY: () => console.log("Password vacio"),
  PASS_SHORT: () => console.log("Password muy corto")
}

function log (usuario, contrasena) {
  if (usuario === "") {
    loginCases.USR_EMPTY()
    return
  }

  if (contrasena.length < 8) {
    loginCases.PASS_SHORT();
  }
}

// fetch

// function fetchData(url, cb) {
//   peticion(url, (res) => {
//     cb(res, cb2 => {
//       cb2()
//     })
//   }
// }

let time = null

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    ///
    //
    //
    // time = response.time.toString()
    //
    return response.json();
  })
  .then((json) => json)
  .then(data => {
    //
    //
    //
    // time ??
    //
    // data.user.toUpperCase();
  })

// build promises

// 1
// wait 3
// 2
// wait 3
// 3

// setTimeout(() => {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2)
//     setTimeout(() => {
//       console.log(3)
//     }, 3000)
//   }, 3000)
// }, 3000)

const wait = (seconds = 1) => new Promise((resolve, reject) => {
  // return no se usa, se usa el resolve o el reject

  if (seconds > 5) {
    return reject("No se puede esperar tanto tiempo");
  }
  setTimeout(() => {
    console.log("WAIT END !");
    resolve(`Waited for ${seconds} seconds`);
    console.log('!')
  }, seconds * 1000);
})

// let isLoading = false
// console.log(1)
// wait(3)
// .then((response) => {
//   isLoading = true;
//   console.log(2, response)
//   return wait(6)
// })
// .then((json) => {
//   console.log(3, json)
//   return wait(4)
// })
// .then((patata) => {
//   console.log(4, patata)
//   // isLoading = false
// })
// .catch(error => {
//   console.log({ error })
//   // isLoading = false;
// })
// .finally(() => {
//   console.log('Finally')
//   isLoading = false;
// })


// async - await

async function asyncWait () {
  console.log(1)
  try {
    const wait1 = await wait(6)
    console.log(2, wait1)
    const wait2 = await wait(2)
    console.log(3, wait2)
    const wait3 = await wait(1)
    console.log(4, wait3)
  } catch (error) {
    console.log({ error })
  } finally {
    console.log('Finally')
  }
}

asyncWait()


const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json = await response.json()
  console.log(json)
}

fetchData()