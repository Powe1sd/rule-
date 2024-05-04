const ruleta = document.getElementById("ruleta");
const resultado = document.getElementById("resultado");
const imagenResultado = document.getElementById("imagenResultado");

let angulo = 90; // Establece un ángulo inicial diferente para que se muestren los temas alrededor de la ruleta
const temas = [
  { nombre: "Camasutra", imagen: "img-s/par-de-cillas.gif" },
  { nombre: "69", imagen: "img-s/cesta.png" },
  { nombre: "Tigereta", imagen: "img-s/Encuadernacion.png" },
  { nombre: "pies", imagen: "img-s/PIES-EN-el-arie.jpg" },
  { nombre: "Tigereta", imagen: "img-s/arriba.gif" },
  { nombre: "Tigereta", imagen: "img-s/hierro.png" },
  { nombre: "Tigereta", imagen: "img-s/deligth.jpg" },
  { nombre: "Tigereta", imagen: "img-s/cuchara.gif" },
  { nombre: "Tigereta", imagen: "img-s/cebolla.png" },
  { nombre: "Tigereta", imagen: "img-s/manos-felices.gif" },
  { nombre: "Tigereta", imagen: "img-s/alamo.png" },
  { nombre: "Tigereta", imagen: "img-s/aguila.png" },
  { nombre: "Tigereta", imagen: "img-s/amazon.gif" },
  { nombre: "Tigereta", imagen: "img-s/puente.png" },
  { nombre: "Tigereta", imagen: "img-s/pila.gif" },
  { nombre: "Tigereta", imagen: "img-s/sisa.gif" },
  { nombre: "Tigereta", imagen: "img-s/estrecha.png" },
  { nombre: "Tigereta", imagen: "img-s/crusifijo.png" },
  { nombre: "Tigereta", imagen: "img-s/bella.jpg" },
  { nombre: "Tigereta", imagen: "img-s/vive.gif" },
  { nombre: "Tigereta", imagen: "img-s/equilibrio.jpg" },
  { nombre: "Tigereta", imagen: "img-s/cohete.png" },
  { nombre: "Tigereta", imagen: "img-s/locomotora.jpg" },
  { nombre: "Tigereta", imagen: "img-s/papeleria.gif" },
  { nombre: "Tigereta", imagen: "img-s/armas.gif" },
  { nombre: "Tigereta", imagen: "img-s/presidente.gif" },
  { nombre: "Tigereta", imagen: "img-s/satisfaccion.png" },
  { nombre: "Tigereta", imagen: "img-s/pelota.gif" },
  { nombre: "Tigereta", imagen: "img-s/camaleon.jpg" },
  { nombre: "Tigereta", imagen: "img-s/baile.png" },
  { nombre: "Tigereta", imagen: "img-s/conyugal.png" },
  { nombre: "Tigereta", imagen: "img-s/descenso.jpg" },
  { nombre: "Tigereta", imagen: "img-s/zizag.png" },
  { nombre: "Tigereta", imagen: "img-s/superman.gif" },
  { nombre: "Tigereta", imagen: "img-s/amado.jpg" },
  { nombre: "Tigereta", imagen: "img-s/pared.gif" },
  { nombre: "Tigereta", imagen: "img-s/pulso.png" },
  { nombre: "Tigereta", imagen: "img-s/cuatro.jpg" },
  { nombre: "Tigereta", imagen: "img-s/vela.png" },
  { nombre: "Tigereta", imagen: "img-s/rehen.png" },
  { nombre: "Tigereta", imagen: "img-s/delfin.png" },
  { nombre: "Tigereta", imagen: "img-s/limite.gif" },
  { nombre: "Tigereta", imagen: "img-s/sucio.gif" },
  { nombre: "Tigereta", imagen: "img-s/asiento.gif" },
  { nombre: "Tigereta", imagen: "img-s/tigeras.gif" },
  { nombre: "Tigereta", imagen: "img-s/misionero.gif" },
  { nombre: "Tigereta", imagen: "img-s/pimenton.jpg" },
  { nombre: "Tigereta", imagen: "img-s/beso-rosa.gif" },
  { nombre: "Tigereta", imagen: "img-s/fluctaciones.gif" },
  { nombre: "Tigereta", imagen: "img-s/voto.png" },
  { nombre: "Tigereta", imagen: "img-s/widcat.gif" },
  { nombre: "Tigereta", imagen: "img-s/avion.gif" },
  { nombre: "Tigereta", imagen: "img-s/panel-lanzamiento.gif" },
  { nombre: "Tigereta", imagen: "img-s/buseo.jpg" },
  { nombre: "Tigereta", imagen: "img-s/plancha.png" },
  { nombre: "Tigereta", imagen: "img-s/men.jpg" },
  { nombre: "Tigereta", imagen: "img-s/mariposa.gif" },
  { nombre: "Tigereta", imagen: "img-s/helise.jpg" },
  { nombre: "Tigereta", imagen: "img-s/castigo.jpg" },
  { nombre: "Tigereta", imagen: "img-s/perito-limite.jpg" },
  { nombre: "Tigereta", imagen: "img-s/emferma.jpg" },
  { nombre: "Tigereta", imagen: "img-s/callejon.png" },
  { nombre: "Tigereta", imagen: "img-s/vidrio.gif" },
  { nombre: "Tigereta", imagen: "img-s/69-alreves.gif" },
  { nombre: "Tigereta", imagen: "img-s/predzel.gif" },
  { nombre: "Tigereta", imagen: "img-s/dos-en-uno.gif" },
  { nombre: "Tigereta", imagen: "img-s/monja.png" },
  { nombre: "Tigereta", imagen: "img-s/apoyate-barbilla.gif" },
  { nombre: "Tigereta", imagen: "img-s/sacerdotisa.jpg" },
  { nombre: "Tigereta", imagen: "img-s/pies-arriba.gif" },
  { nombre: "Tigereta", imagen: "img-s/arpa.png" },
  { nombre: "Tigereta", imagen: "img-s/volcado.jpg" },
  { nombre: "Tigereta", imagen: "img-s/aguila-desplegada.gif" },
  { nombre: "Tigereta", imagen: "img-s/balanza.png" },
  { nombre: "Tigereta", imagen: "img-s/doble-desafio.gif" },
  { nombre: "Tigereta", imagen: "img-s/balon-pared.gif" },
  { nombre: "Tigereta", imagen: "img-s/semental-salvaje.jpg" },
  { nombre: "Tigereta", imagen: "img-s/fruta-prohibida.png" },
  { nombre: "Tigereta", imagen: "img-s/diamante.png" },
  { nombre: "Tigereta", imagen: "img-s/laberinto.png" },
  { nombre: "Tigereta", imagen: "img-s/rider.gif" },
  { nombre: "Tigereta", imagen: "img-s/giratoria.png" },
  { nombre: "Tigereta", imagen: "img-s/puente3.gif" },
  { nombre: "Tigereta", imagen: "img-s/pony-salvaje.jpg" },
  { nombre: "Tigereta", imagen: "img-s/caballera.jpg" },
  { nombre: "Tigereta", imagen: "img-s/barco.jpg" },
  { nombre: "Tigereta", imagen: "img-s/dominante.jpg" },
  { nombre: "Tigereta", imagen: "img-s/beso-cuello.gif" },
  { nombre: "Tigereta", imagen: "img-s/riderr.gif" },
  { nombre: "Tigereta", imagen: "img-s/libido.png" },
  { nombre: "Tigereta", imagen: "img-s/69-puro.gif" },
  { nombre: "Tigereta", imagen: "img-s/conociendo-a.jpg" },
  { nombre: "Tigereta", imagen: "img-s/lampara-araña.png" },
  { nombre: "Tigereta", imagen: "img-s/abalancha.gif" },
  { nombre: "Tigereta", imagen: "img-s/acrobat.png" },
  { nombre: "Tigereta", imagen: "img-s/PEPINILLO.gif" },
  { nombre: "Tigereta", imagen: "img-s/polilla-nocturna.jpg" },
  { nombre: "Tigereta", imagen: "img-s/barco-de-vela.jpg" },
  { nombre: "Tigereta", imagen: "img-s/saltamontes.jpg" },
  { nombre: "Tigereta", imagen: "img-s/punto-dulce.gif" },
  { nombre: "Tigereta", imagen: "img-s/araña.gif" },
  { nombre: "Tigereta", imagen: "img-s/acordeona.png" },
  { nombre: "Tigereta", imagen: "img-s/abraza.gif" },
  { nombre: "Tigereta", imagen: "img-s/misionero-inverso.gif" },
  { nombre: "Tigereta", imagen: "img-s/ventilador.png" },
  { nombre: "Tigereta", imagen: "img-s/descarado.jpg" },
  { nombre: "Tigereta", imagen: "img-s/yunque.gif" },
  { nombre: "Tigereta", imagen: "img-s/doguy.png" },
  { nombre: "Tigereta", imagen: "img-s/cuña.jpg" },
  { nombre: "Tigereta", imagen: "img-s/tortuga.gif" },
  { nombre: "Tigereta", imagen: "img-s/estrella.jpg" },
  { nombre: "Tigereta", imagen: "img-s/venus.png" },
  { nombre: "Tigereta", imagen: "img-s/luchador-lujurioso.gif" },
  { nombre: "Tigereta", imagen: "img-s/cielo.gif" },
  { nombre: "Tigereta", imagen: "img-s/baden.gif" },
  { nombre: "Tigereta", imagen: "img-s/impacto.gif" },
  { nombre: "Tigereta", imagen: "img-s/atras.png" },
  { nombre: "Tigereta", imagen: "img-s/asiento2.gif" },
  { nombre: "Tigereta", imagen: "img-s/contramirante.jpg" },
  { nombre: "Tigereta", imagen: "img-s/bulto.png" },
  { nombre: "Tigereta", imagen: "img-s/montaña.gif" },
  { nombre: "Tigereta", imagen: "img-s/tumbado.gif" },
  { nombre: "Tigereta", imagen: "img-s/emperador.png" },
  { nombre: "Tigereta", imagen: "img-s/aficionado.jpg" },
  { nombre: "Tigereta", imagen: "img-s/tazon.png" },
  { nombre: "Tigereta", imagen: "img-s/silla.jpg" },
  { nombre: "Tigereta", imagen: "img-s/manosarriba.gif" },
  { nombre: "Tigereta", imagen: "img-s/alfobra.jpg" },
  { nombre: "Tigereta", imagen: "img-s/hawaiana.gif" },
  { nombre: "Tigereta", imagen: "img-s/amazona.gif" },
  { nombre: "Tigereta", imagen: "img-s/full-nelson.gif" },
  { nombre: "Tigereta", imagen: "img-s/parar-entregar.gif" },
  { nombre: "Tigereta", imagen: "img-s/caliente.gif" },
  { nombre: "Tigereta", imagen: "img-s/hierro3.gif" },
  { nombre: "Tigereta", imagen: "img-s/torre-ifel.gif" },
  { nombre: "Tigereta", imagen: "img-s/batidora.gif" },
  { nombre: "Tigereta", imagen: "img-s/noche-caliente.png" },
  { nombre: "Tigereta", imagen: "img-s/lotus.gif" },
  { nombre: "Tigereta", imagen: "img-s/leo.png" },
  { nombre: "Tigereta", imagen: "img-s/balancin.gif" },
  { nombre: "Tigereta", imagen: "img-s/mariposa2.jpg" },
  { nombre: "Tigereta", imagen: "img-s/señora.jpg" },
  { nombre: "Tigereta", imagen: "img-s/corcho.jpg" },
  { nombre: "Tigereta", imagen: "img-s/perro abajo.jpg" },
  { nombre: "Tigereta", imagen: "img-s/sobremesa.gif" },
  { nombre: "Tigereta", imagen: "img-s/escultor.png" },
  { nombre: "Tigereta", imagen: "img-s/nirvana.png" },
  { nombre: "Tigereta", imagen: "img-s/eleccion-damas.gif" },
  /* QUEDE EN LA 8 DE { nombre: "Tigereta", imagen: "img-s/" },
   */

  // Agrega más temas según sea necesario
];

// Función para inicializar la ruleta con las opciones
function inicializarRuleta() {
  temas.forEach((tema, index) => {
    const opcion = document.createElement("div");
    opcion.classList.add("opcion");
    opcion.textContent = tema.nombre;
    const angle = (360 / temas.length) * index;
    opcion.style.setProperty("--angle", `${angle}deg`);
    opcion.style.setProperty("--index", index + 1); // índice basado en 1
    ruleta.appendChild(opcion);
  });
}

// Llamamos a la función de inicialización cuando carga la página
document.addEventListener("DOMContentLoaded", inicializarRuleta);

function girarRuleta() {
  const randomAngle = Math.floor(Math.random() * 360) + 1440;
  angulo += randomAngle;
  ruleta.style.transition = "transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)";
  ruleta.style.transform = `rotate(${angulo}deg)`;
  setTimeout(mostrarResultado, 3000);
}

function mostrarResultado() {
  const anguloFinal = angulo % 360;
  const opcionIndex = Math.floor(anguloFinal / (360 / temas.length));
  const opcionElegida = temas[opcionIndex];

  resultado.style.display = "block";
  imagenResultado.src = opcionElegida.imagen;
}

function cerrarResultado() {
  resultado.style.display = "none";
  imagenResultado.src = "";
}

