function toggleMenu() {
  const menu = document.getElementById("menu");
  // Verifica si el menú tiene la clase "activo", si no la tiene, se agrega
  if (menu.classList.contains("activo")) {
    menu.classList.remove("activo");
  } else {
    menu.classList.add("activo");
  }
}

function sendToWhatsApp(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = `Hola Migueles Refrigeración, mi nombre es ${nombre}.
Correo: ${email}
Teléfono: ${telefono}
Consulta: ${mensaje}

Quedo a la espera de su respuesta.`;
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

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("activo");
  });
});
