const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí debes agregar la lógica para validar las credenciales del usuario
    // Por ejemplo, puedes compararlas con un conjunto de usuarios predefinidos
    // o enviar una solicitud a un servidor para verificarlas

    if (username === 'admin' && password === 'contraseña') {
        alert('¡Inicio de sesión exitoso!');
         // Redirigir a la página deseada en una nueva pestaña
         window.location.href = "inicio.html";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});