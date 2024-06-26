// window
console.log(window)
// document
console.log(document) // <html>...</html>

// getElementById

const p = document.getElementById('parrafo')
// console.log(p)
p.innerText = 'Hola desde js'

// querySelector

const p2 = document.querySelector('p')
// console.log(p2)

// querySelectorAll

const ps = document.querySelectorAll('p')
// console.log(ps)

ps.forEach((p) => {
  p.style.border = '3px solid red'
  p.style.backgroundColor = "yellow"; // background-color -> backgroundColor
})

// addEventListener

const inputTag = document.querySelector("#username");

const btn = document.querySelector("#btn");

function onSendClick() {
  console.log("input", inputTag.value);
  // input.value = '';
}

onSendClick();

let a = 1
a = 11
a = 13

btn.addEventListener('click', onSendClick);

const spanNumberError = document.querySelector("#number-error-form");

function onInput() {
  console.log("input", inputTag.value);
  const isNumber = !isNaN(inputTag.value);
  console.log(isNumber);
  if (isNumber) {
    spanNumberError.innerText = ""
  } else {
    spanNumberError.innerText = "El valor ingresado no es un número"
  }
}

inputTag.addEventListener("input", onInput);



a = 100


// removeEventListener

btn.addEventListener('click', onSendClick);
btn.removeEventListener('click', onSendClick);

// innerHTML 
document.getElementById("my-div").innerHTML = `
  <p>hola</p>
  <p>adios</p>
`;

// innerText
// aplicar estilos mediante js
// classList

const myDiv = document.getElementById("my-div");
myDiv.classList.add("example");

// timers
// setTimeout
// setInterval
// clearInterval
// clearTimeout
