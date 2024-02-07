function validarFormulario() {
    var email = document.getElementById("form2Example1").value;
    var password = document.getElementById("form2Example2").value;

    if (email && password) {
        // Aquí podrías enviar los datos del formulario o realizar alguna otra acción
        alert("Inicio de sesión exitoso");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
