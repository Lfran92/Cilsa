alert("Hola Mundo");


/*const btn = document.getElementById("btn");

btn.addEventListener("click", function (){
    alert("Se guardaron tus datos")
}); */
document.getElementById('btn').addEventListener('click', function() {
    var isValid = true;
    var errorMessages = {
        nombre: 'El campo nombre es obligatorio.',
        apellido: 'El campo apellido es obligatorio.',
        contraseña: 'El campo contraseña es obligatorio.',
        correo: 'El campo correo es obligatorio y debe ser un correo válido.'
    };

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var contraseña = document.getElementById('contraseña').value.trim();
    var correo = document.getElementById('mail').value.trim();

    // Limpiar mensajes de error anteriores
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.remove();
    });

    // Validar campo nombre
    if (!nombre) {
        isValid = false;
        mostrarError('nombre', errorMessages.nombre);
    }

    // Validar campo apellido
    if (!apellido) {
        isValid = false;
        mostrarError('apellido', errorMessages.apellido);
    }

    // Validar campo contraseña
    if (!contraseña) {
        isValid = false;
        mostrarError('contraseña', errorMessages.contraseña);
    }

    // Validar campo correo
    if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        isValid = false;
        mostrarError('mail', errorMessages.correo);
    }

    // Enviar el formulario si es válido
    if (isValid) {
        document.getElementById('validarFormulario').submit();
    }
});

function mostrarError(campoId, mensaje) {
    var campo = document.getElementById(campoId);
    var errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = mensaje;
    campo.parentNode.appendChild(errorElement);
}