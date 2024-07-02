
//cambio de estilo

const btn= document.querySelector("#contraste");


btn.addEventListener("click", ()=> {
    document.body.classList.toggle("white");
    

});



//Validacion de formulario

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const contraseña = document.getElementById("contraseña");
const mail = document.getElementById("mail");
const formulario = document.getElementById("formulario");



formulario.addEventListener("submit", e => {
    e.preventDefault();
    let campoMail = document.getElementById("mail");
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(nombre.value.length <6 ) {
        alert("El nombre no es valido");
    }
    if( apellido.value.length <1){
        alert("Apellido no valido");
    }
    if(contraseña.value.length ==" "){
        alert("contraseña no valida");
    }
    
    if(validarEmail.test(campoMail.value)){
        return true;
    }else {
        alert("Email no valido");
        return false;
    }
})
