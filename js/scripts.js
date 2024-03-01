var fullImgContainer = document.querySelector(".full-img")
var fullImg = document.querySelector(".img-preview")

// Miniatura

function colocarImg(element, nro) {
    var nro_fix

    if(nro < 0) {
        nro_fix = 21 + parseInt(nro % 22)
    } else {
        nro_fix = parseInt(nro % 22)
    }
    element.style.backgroundImage = "url('img/foto" + nro_fix + "_c.webp')";
    element.onclick = function() {
        changeImg(nro_fix);
    };
}

// Carrusel

function imagenCarrusel(nro) {
    var nro_fix = Math.abs(parseInt(nro % 22));
    var imgCarruselPrincipal = document.querySelector(".img-carrusel-principal");

    colocarImg(imgCarruselPrincipal, nro_fix)
    var imgCarrusel1 = document.getElementById("img-carrusel1")
    colocarImg(imgCarrusel1, nro_fix - 3)
    var imgCarrusel2 = document.getElementById("img-carrusel2")
    colocarImg(imgCarrusel2, nro_fix - 2)
    var imgCarrusel3 = document.getElementById("img-carrusel3")
    colocarImg(imgCarrusel3, nro_fix - 1)
    var imgCarrusel4 = document.getElementById("img-carrusel4")
    colocarImg(imgCarrusel4, nro_fix + 1)
    var imgCarrusel5 = document.getElementById("img-carrusel5")
    colocarImg(imgCarrusel5, nro_fix + 2)
    var imgCarrusel6 = document.getElementById("img-carrusel6")
    colocarImg(imgCarrusel6, nro_fix + 3)
}

// Controles full img

function openFulImg(nro){
    fullImgContainer.style.display = "flex";
    fullImg.src = `img/foto${nro}.webp`;
    fullImg.id = nro
    imagenCarrusel(nro)
}

function changeImg(nro) {
    var nro_fix = Math.abs(parseInt(nro % 22));
    fullImg.src = `img/foto${nro_fix}.webp`;
    fullImg.id = nro_fix
    imagenCarrusel(nro_fix)
}

function nextImg() {
    changeImg(parseInt(fullImg.id) + 1)
}

function previousImg() {
    if(fullImg.id == 0) {
        changeImg(21) 
    } else {
        changeImg(parseInt(fullImg.id) - 1)
    }
}

function closeImg(){
    fullImgContainer.style.display = "none";
}

function presionarTecla() {
    tecla = event.keyCode;

    if(tecla == 37){
        return previousImg()
    } else if (tecla == 39) {
        return nextImg()
    }
}

window.onkeydown = presionarTecla;

// Galeria

function nuevaImagenGaleria(nro){

    var nro_fix = Math.abs(parseInt(nro % 22));

    var img = document.createElement('div');

    img.className = 'img';
    img.id = nro_fix;
    img.onclick = function() {
        openFulImg(this.id);
    };
    img.style.backgroundImage = "url('img/foto" + nro_fix + "_c.webp')";

    var galeria = document.querySelector(".galeria");
    galeria.appendChild(img);

}

function ultimaImagenGaleria(total, nro){

    var galeria = document.querySelector(".galeria");

    var ultimaImagen = document.createElement('div');

    ultimaImagen.className = 'img ultima';

    ultimaImagen.onclick = function() {
        openFulImg(nro);
    };

    var parrafo = document.createElement('p');
    parrafo.textContent = `+ ${total - nro}`;

    ultimaImagen.appendChild(parrafo);

    galeria.appendChild(ultimaImagen);


}

// Agregar fotos a la galeria

var cantidadTotal = 22;
var cantidadFotosGaleria = 12;

for (var i = 0; i <= cantidadFotosGaleria - 2; i++) {
    nuevaImagenGaleria(i);
}

ultimaImagenGaleria(cantidadTotal, cantidadFotosGaleria - 1);
