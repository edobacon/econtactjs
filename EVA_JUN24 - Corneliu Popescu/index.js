// Listado de usuarios posibles
const users = [
  { username: 'mgonzalez', password: 'pass1', name: 'Marcelo González' },
  { username: 'mmunoz', password: 'pass2', name: 'María Muñoz' },
  { username: 'crodriguez', password: 'pass3', name: 'Carolina Rodriguez' }
];

// Obtener elementos del DOM
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const loginMessage = document.getElementById('login-message');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

// Limpiar mensajes de error y resetear estilos
function clearErrors() {
  usernameError.textContent = '';
  passwordError.textContent = '';
  usernameInput.classList.remove('error');
  passwordInput.classList.remove('error');
  loginMessage.textContent = '';
}

// Limpiar errores específicos para un campo y el mensaje de credenciales incorrectas
function clearErrorForElement(element, errorElement) {
  element.classList.remove('error');
  errorElement.textContent = '';
  loginMessage.textContent = '';
}

// Manejar evento de enviar
submitBtn.addEventListener('click', () => {
  clearErrors();
  let hasError = false;

  // Validar campos vacíos
  if (!usernameInput.value.trim()) {
    usernameInput.classList.add('error');
    usernameError.textContent = 'El nombre de usuario no puede estar vacío';
    hasError = true;
  }
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add('error');
    passwordError.textContent = 'La contraseña no puede estar vacía';
    hasError = true;
  }

  // Si hay errores, no continuar
  if (hasError) return;

  // Validar credenciales
  const user = users.find(user =>
    user.username === usernameInput.value.trim() &&
    user.password === passwordInput.value.trim()
  );

  // Mostrar mensaje adecuado según la validación
  if (!user) {
    loginMessage.textContent = 'Credenciales incorrectas';
    loginMessage.style.color = 'red';
  } else {
    loginMessage.textContent = `Sesión iniciada para ${user.name}`;
    loginMessage.style.color = 'green';
  }
});

// Manejar evento de limpiar
resetBtn.addEventListener('click', () => {
  clearErrors();
  usernameInput.value = '';
  passwordInput.value = '';
  loginMessage.textContent = '';
});

// Limpiar mensajes de error en tiempo real mientras el usuario corrige los valores ingresados
usernameInput.addEventListener('input', () => {
  clearErrorForElement(usernameInput, usernameError);
});

passwordInput.addEventListener('input', () => {
  clearErrorForElement(passwordInput, passwordError);
});
