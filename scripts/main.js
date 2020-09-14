//cambia de imagenes al hacer clic sobre la imagen//
let miImagen = document.querySelector('img');
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'img/odin.jpeg'){
        miImagen.setAttribute('src','img/images.png');
    } else{
        miImagen.setAttribute('src','img/odin.jpeg');
    }
}

//obtiene nombre ingresado mediante elemento boton//
//mejorar codigo: al reabrir el navegador poner todo como estaba//
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('escribe tu nombre bro!');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre',miNombre);
        miTitulo.textContent = 'Odin: salvando a '+miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Odin: salvando a '+nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}