const boton = document.getElementById("estadoBoton")

boton.addEventListener('click', function() {
    // 
    const textoActual = boton.innerHTML;
    
  
    if (textoActual.includes('NO')) {
        boton.innerHTML = 'EN BUSQUEDA ACTIVA: SÍ <i class="fas fa-caret-down ml-2"></i>';
    } else {
        boton.innerHTML = 'EN BUSQUEDA ACTIVA: NO <i class="fas fa-caret-down ml-2"></i>';
    }
});