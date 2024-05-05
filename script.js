const ruleta = document.getElementById("ruleta");
const resultado = document.getElementById("resultado");
const imagenResultado = document.getElementById("imagenResultado");

let angulo = 90; // Establece un ángulo inicial diferente para que se muestren los temas alrededor de la ruleta
const temas = [
  { nombre: "Par de Cillas", imagen: "img-s/par-de-cillas.gif" },
  { nombre: "69", imagen: "img-s/cesta.png" },
  { nombre: "Encuadernación", imagen: "img-s/Encuadernacion.png" },
  { nombre: "Pies en el Aire", imagen: "img-s/PIES-EN-el-arie.jpg" },
  { nombre: "Arriba", imagen: "img-s/arriba.gif" },
  { nombre: "Hierro", imagen: "img-s/hierro.png" },
  { nombre: "Delight", imagen: "img-s/deligth.jpg" },
  { nombre: "Cuchara", imagen: "img-s/cuchara.gif" },
  { nombre: "Cebolla", imagen: "img-s/cebolla.png" },
  { nombre: "Manos Felices", imagen: "img-s/manos-felices.gif" },
  { nombre: "Álamo", imagen: "img-s/alamo.png" },
  { nombre: "Águila", imagen: "img-s/aguila.png" },
  { nombre: "Amazon", imagen: "img-s/amazon.gif" },
  { nombre: "Puente", imagen: "img-s/puente.png" },
  { nombre: "Pila", imagen: "img-s/pila.gif" },
  { nombre: "Sisa", imagen: "img-s/sisa.gif" },
  { nombre: "Estrecha", imagen: "img-s/estrecha.png" },
  { nombre: "Cruzifijo", imagen: "img-s/crusifijo.png" },
  { nombre: "Bella", imagen: "img-s/bella.jpg" },
  { nombre: "Vive", imagen: "img-s/vive.gif" },
  { nombre: "Equilibrio", imagen: "img-s/equilibrio.jpg" },
  { nombre: "Cohete", imagen: "img-s/cohete.png" },
  { nombre: "Locomotora", imagen: "img-s/locomotora.jpg" },
  { nombre: "Papelería", imagen: "img-s/papeleria.gif" },
  { nombre: "Armas", imagen: "img-s/armas.gif" },
  { nombre: "Presidente", imagen: "img-s/presidente.gif" },
  { nombre: "Satisfacción", imagen: "img-s/satisfaccion.png" },
  { nombre: "Pelota", imagen: "img-s/pelota.gif" },
  { nombre: "Camaleón", imagen: "img-s/camaleon.jpg" },
  { nombre: "Baile", imagen: "img-s/baile.png" },
  { nombre: "Conyugal", imagen: "img-s/conyugal.png" },
  { nombre: "Descenso", imagen: "img-s/descenso.jpg" },
  { nombre: "Zigzag", imagen: "img-s/zizag.png" },
  { nombre: "Superman", imagen: "img-s/superman.gif" },
  { nombre: "Amado", imagen: "img-s/amado.jpg" },
  { nombre: "Pared", imagen: "img-s/pared.gif" },
  { nombre: "Pulso", imagen: "img-s/pulso.png" },
  { nombre: "Cuatro", imagen: "img-s/cuatro.jpg" },
  { nombre: "Vela", imagen: "img-s/vela.png" },
  { nombre: "Rehén", imagen: "img-s/rehen.png" },
  { nombre: "Delfín", imagen: "img-s/delfin.png" },
  { nombre: "Límite", imagen: "img-s/limite.gif" },
  { nombre: "Sucio", imagen: "img-s/sucio.gif" },
  { nombre: "Asiento", imagen: "img-s/asiento.gif" },
  { nombre: "Tigeras", imagen: "img-s/tigeras.gif" },
  { nombre: "Misionero", imagen: "img-s/misionero.gif" },
  { nombre: "Pimentón", imagen: "img-s/pimenton.jpg" },
  { nombre: "Beso Rosa", imagen: "img-s/beso-rosa.gif" },
  { nombre: "Fluctuaciones", imagen: "img-s/fluctaciones.gif" },
  { nombre: "Voto", imagen: "img-s/voto.png" },
  { nombre: "Widcat", imagen: "img-s/widcat.gif" },
  { nombre: "Avión", imagen: "img-s/avion.gif" },
  { nombre: "Panel de Lanzamiento", imagen: "img-s/panel-lanzamiento.gif" },
  { nombre: "Buseo", imagen: "img-s/buseo.jpg" },
  { nombre: "Plancha", imagen: "img-s/plancha.png" },
  { nombre: "Men", imagen: "img-s/men.jpg" },
  { nombre: "Mariposa", imagen: "img-s/mariposa.gif" },
  { nombre: "Helise", imagen: "img-s/helise.jpg" },
  { nombre: "Castigo", imagen: "img-s/castigo.jpg" },
  { nombre: "Perito Límite", imagen: "img-s/perito-limite.jpg" },
  { nombre: "Enferma", imagen: "img-s/emferma.jpg" },
  { nombre: "Callejón", imagen: "img-s/callejon.png" },
  { nombre: "Vidrio", imagen: "img-s/vidrio.gif" },
  { nombre: "69 al Revés", imagen: "img-s/69-alreves.gif" },
  { nombre: "Predzel", imagen: "img-s/predzel.gif" },
  { nombre: "Dos en Uno", imagen: "img-s/dos-en-uno.gif" },
  { nombre: "Monja", imagen: "img-s/monja.png" },
  { nombre: "Apóyate Barbilla", imagen: "img-s/apoyate-barbilla.gif" },
  { nombre: "Sacerdotisa", imagen: "img-s/sacerdotisa.jpg" },
  { nombre: "Pies Arriba", imagen: "img-s/pies-arriba.gif" },
  { nombre: "Arpa", imagen: "img-s/arpa.png" },
  { nombre: "Volcado", imagen: "img-s/volcado.jpg" },
  { nombre: "Águila Desplegada", imagen: "img-s/aguila-desplegada.gif" },
  { nombre: "Balanza", imagen: "img-s/balanza.png" },
  { nombre: "Doble Desafío", imagen: "img-s/doble-desafio.gif" },
  { nombre: "Balón Pared", imagen: "img-s/balon-pared.gif" },
  { nombre: "Semental Salvaje", imagen: "img-s/semental-salvaje.jpg" },
  { nombre: "Fruta Prohibida", imagen: "img-s/fruta-prohibida.png" },
  { nombre: "Diamante", imagen: "img-s/diamante.png" },
  { nombre: "Laberinto", imagen: "img-s/laberinto.png" },
  { nombre: "Rider", imagen: "img-s/rider.gif" },
  { nombre: "Giratoria", imagen: "img-s/giratoria.png" },
  { nombre: "Puente 3", imagen: "img-s/puente3.gif" },
  { nombre: "Pony Salvaje", imagen: "img-s/pony-salvaje.jpg" },
  { nombre: "Caballera", imagen: "img-s/caballera.jpg" },
  { nombre: "Barco", imagen: "img-s/barco.jpg" },
  { nombre: "Dominante", imagen: "img-s/dominante.jpg" },
  { nombre: "Beso Cuello", imagen: "img-s/beso-cuello.gif" },
  { nombre: "Riderr", imagen: "img-s/riderr.gif" },
  { nombre: "Libido", imagen: "img-s/libido.png" },
  { nombre: "69 Puro", imagen: "img-s/69-puro.gif" },
  { nombre: "Conociendo A", imagen: "img-s/conociendo-a.jpg" },
  { nombre: "Lámpara Araña", imagen: "img-s/lampara-araña.png" },
  { nombre: "Abalancha", imagen: "img-s/abalancha.gif" },
  { nombre: "Acrobat", imagen: "img-s/acrobat.png" },
  { nombre: "Pepinillo", imagen: "img-s/PEPINILLO.gif" },
  { nombre: "Polilla Nocturna", imagen: "img-s/polilla-nocturna.jpg" },
  { nombre: "Barco de Vela", imagen: "img-s/barco-de-vela.jpg" },
  { nombre: "Saltamontes", imagen: "img-s/saltamontes.jpg" },
  { nombre: "Punto Dulce", imagen: "img-s/punto-dulce.gif" },
  { nombre: "Araña", imagen: "img-s/araña.gif" },
  { nombre: "Acordeona", imagen: "img-s/acordeona.png" },
  { nombre: "Abraza", imagen: "img-s/abraza.gif" },
  { nombre: "Misionero Inverso", imagen: "img-s/misionero-inverso.gif" },
  { nombre: "Ventilador", imagen: "img-s/ventilador.png" },
  { nombre: "Descarado", imagen: "img-s/descarado.jpg" },
  { nombre: "Yunque", imagen: "img-s/yunque.gif" },
  { nombre: "Doguy", imagen: "img-s/doguy.png" },
  { nombre: "Cuña", imagen: "img-s/cuña.jpg" },
  { nombre: "Tortuga", imagen: "img-s/tortuga.gif" },
  { nombre: "Estrella", imagen: "img-s/estrella.jpg" },
  { nombre: "Venus", imagen: "img-s/venus.png" },
  { nombre: "Luchador Lujurioso", imagen: "img-s/luchador-lujurioso.gif" },
  { nombre: "Cielo", imagen: "img-s/cielo.gif" },
  { nombre: "Baden", imagen: "img-s/baden.gif" },
  { nombre: "Impacto", imagen: "img-s/impacto.gif" },
  { nombre: "Atrás", imagen: "img-s/atras.png" },
  { nombre: "Asiento 2", imagen: "img-s/asiento2.gif" },
  { nombre: "Contralmirante", imagen: "img-s/contramirante.jpg" },
  { nombre: "Bulto", imagen: "img-s/bulto.png" },
  { nombre: "Montaña", imagen: "img-s/montaña.gif" },
  { nombre: "Tumbado", imagen: "img-s/tumbado.gif" },
  { nombre: "Emperador", imagen: "img-s/emperador.png" },
  { nombre: "Aficionado", imagen: "img-s/aficionado.jpg" },
  { nombre: "Tazón", imagen: "img-s/tazon.png" },
  { nombre: "Silla", imagen: "img-s/silla.jpg" },
  { nombre: "Manos Arriba", imagen: "img-s/manosarriba.gif" },
  { nombre: "Alfombra", imagen: "img-s/alfobra.jpg" },
  { nombre: "Hawaiana", imagen: "img-s/hawaiana.gif" },
  { nombre: "Amazona", imagen: "img-s/amazona.gif" },
  { nombre: "Full Nelson", imagen: "img-s/full-nelson.gif" },
  { nombre: "Parar y Entregar", imagen: "img-s/parar-entregar.gif" },
  { nombre: "Caliente", imagen: "img-s/caliente.gif" },
  { nombre: "Hierro 3", imagen: "img-s/hierro3.gif" },
  { nombre: "Torre Eiffel", imagen: "img-s/torre-ifel.gif" },
  { nombre: "Batidora", imagen: "img-s/batidora.gif" },
  { nombre: "Noche Caliente", imagen: "img-s/noche-caliente.png" },
  { nombre: "Loto", imagen: "img-s/lotus.gif" },
  { nombre: "Leo", imagen: "img-s/leo.png" },
  { nombre: "Balancín", imagen: "img-s/balancin.gif" },
  { nombre: "Mariposa 2", imagen: "img-s/mariposa2.jpg" },
  { nombre: "Señora", imagen: "img-s/señora.jpg" },
  { nombre: "Corcho", imagen: "img-s/corcho.jpg" },
  { nombre: "Perro Abajo", imagen: "img-s/perro abajo.jpg" },
  { nombre: "Sobremesa", imagen: "img-s/sobremesa.gif" },
  { nombre: "Escultor", imagen: "img-s/escultor.png" },
  { nombre: "Nirvana", imagen: "img-s/nirvana.png" },
  { nombre: "Elección Damas", imagen: "img-s/eleccion-damas.gif" },
  // Continuar con más temas según sea necesario
];

// Función para inicializar la ruleta con las opciones

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

  // Mostrar el nombre de la pose en el h2
  const nombrePose = document.querySelector(".pose");
  nombrePose.textContent = opcionElegida.nombre;
}

// Función para cerrar el resultado
// Función para cerrar el resultado
function cerrarResultado() {
  resultado.style.display = "none";
}

// Agregar un event listener al cuerpo del documento para detectar clics fuera del área de la imagen resultado
document.body.addEventListener("click", function (event) {
  // Verificar si el clic ocurrió fuera del área de la imagen resultado y si la imagen resultado está visible
  if (
    !resultado.contains(event.target) &&
    resultado.style.display === "block"
  ) {
    // Si el clic ocurrió fuera del área de la imagen resultado y la imagen está visible, cerrar la imagen resultado
    cerrarResultado();
  }
});
