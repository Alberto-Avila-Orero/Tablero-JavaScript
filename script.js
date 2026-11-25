let celdas = document.querySelectorAll(".celda");
let botonLimpiar = document.querySelector(".boton-limpiar");
let botonArriba = document.querySelector(".arriba");
let botonIzquierda = document.querySelector(".izquierda");
let botonAbajo = document.querySelector(".abajo");
let botonDerecha = document.querySelector(".derecha");
let tablero = document.querySelector(".tablero");




let colores = ['red', 'green', 'blue', 'yellow'];
let queColor = 2;




function cambiarColor(e) {
   queColor++;
   if (queColor >= colores.length) {
       queColor = 0;
   }
   e.preventDefault();
   alert("Has cambiado de color");
}


function limpiar() {
   for (let i = 0; i < celdas.length; i++) {
       celdas[i].style.backgroundColor = "white";
   }
}


function pintarCelda(e) {
   if (e.target.classList.contains("celda")) {
       e.target.style.backgroundColor = colores[queColor];
   }
}
tablero.addEventListener("click", pintarCelda);
botonLimpiar.addEventListener("click", limpiar);
document.addEventListener("contextmenu", cambiarColor);




let posicion = Math.floor(Math.random() * 64);
celdas[posicion].classList.add("activa");


function moverA(nuevaPosicion) {
   celdas[posicion].classList.remove("activa");
   posicion = nuevaPosicion;
   celdas[posicion].classList.add("activa");
}


function moverArriba() {
   if (posicion >= 8) {         
       moverA(posicion - 8);
   }
}


function moverAbajo() {
   if (posicion < 56) {        
       moverA(posicion + 8);
   }
}


function moverIzquierda() {
   if (posicion % 8 !== 0) {    
       moverA(posicion - 1);
   }
}


function moverDerecha() {
   if (posicion % 8 !== 7) {    
       moverA(posicion + 1);
   }
}


botonArriba.addEventListener("click", moverArriba);
botonAbajo.addEventListener("click", moverAbajo);
botonIzquierda.addEventListener("click", moverIzquierda);
botonDerecha.addEventListener("click", moverDerecha);






function moverConTeclado(e) {
   let tecla = e.key.toLowerCase();


   if (tecla === "w") {
       moverArriba();
   } else if (tecla === "a") {
       moverIzquierda();
   } else if (tecla === "s") {
       moverAbajo();
   } else if (tecla === "d") {
       moverDerecha();
   }
}


document.addEventListener("keydown", moverConTeclado);
