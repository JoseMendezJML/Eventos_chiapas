const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const evento = document.getElementById("evento").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || evento === "" || mensaje === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    const confirmar = confirm("¿Deseas enviar esta información?");

    if (confirmar) {
      alert("¡Gracias por confiar en Eventos Chiapas! Hemos recibido tu mensaje.");
      contactForm.reset();
    } else {
      alert("Envío cancelado.");
    }
  });
}