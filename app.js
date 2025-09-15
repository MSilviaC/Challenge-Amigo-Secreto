// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
limpiarCaja();

//Permite sustituir texto del html
function asignarTextoElemento (elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//Agrega nombres desde el boton añadir se vincula el html
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();
  let soloLetrasRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/; //No se permite ingresar números ni espacios
   if (nombres.includes(nombreAmigo)) {
        alert('El nombre ya fue ingresado, por favor ingrese otro nombre.');
        limpiarCaja();
        return;
        
   }
  
  if (nombreAmigo === ""){
    alert("Ingresa un nombre valido");
  }
   else
      if(!soloLetrasRegex.test(nombreAmigo)){ //Solo ingresar letras
       alert("Solo se permite ingresar letras sin espacios ni números."); 
       limpiarCaja();
       return;
       
      } else {
      

    nombres.push(nombreAmigo);
    console.log(nombres);
   
// actualizarListaDeAmigos();

      }

  let lista = document.getElementById("listaAmigos");
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombreAmigo;
  lista.appendChild(nuevoElemento);
   limpiarCaja();
}

//Para limpiar el campo despues de añadir cada nombre
function limpiarCaja(){
  document.querySelector("#amigo").value = "";

}
function mostrarAmigos() {
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]); // Imprimir en la consola
    }
  }
function sortearAmigo(){
  if (nombres.length === 0) {
    alert("No hay nombres para sortear");
  return;
  }

  if (nombres.length === 1) {
    alert('No se puede sortear, ingrese al menos dos nombres.');
  return;
        
  }
         
  let sortear = Math.floor(Math.random() * nombres.length);
  let nombreSeleccionado = nombres[sortear];
  console.log(nombreSeleccionado);
  asignarTextoElemento("h2", `Tu amigo secreto es: ${nombreSeleccionado}`);

} 

function reiniciarJuego() {
  nombres = [];// vaciar el array
  document.getElementById("listaAmigos").innerHTML = "";// limpiar la lista de la pantalla
  asignarTextoElemento("h2", "");// borrar el resultado del sorteo
  limpiarCaja();// limpar la caja de texto
  console.log("Juego reiniciado");
}