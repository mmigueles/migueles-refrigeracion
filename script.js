function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("activo");
}

function sendToWhatsApp(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = `Hola, mi nombre es ${nombre}.\nCorreo: ${email}\nTeléfono: ${telefono}\nConsulta: ${mensaje}`;
  const url = `https://wa.me/+5491137583720?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

const fondoSlider = document.querySelector(".fondo-slider");
const imagenes = [
  "img/trabajo1.jpg",
  "img/trabajo2.jpg",
  "img/trabajo3.jpg",
  "img/trabajo4.jpg",
];
let index = 0;

function cambiarFondo() {
  fondoSlider.style.backgroundImage = `url('${imagenes[index]}')`;
  index = (index + 1) % imagenes.length;
}

cambiarFondo(); // inicial
setInterval(cambiarFondo, 4000); // cada 4 segundos
