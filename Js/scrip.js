// FORMULARIO DE RESERVA PRINCIPAL
const form = document.getElementById("formReserva");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = form.querySelector('input[type="text"]').value;
        const telefono = form.querySelector('input[type="tel"]').value;
        const fecha = form.querySelector('input[type="date"]').value;
        const mensaje = form.querySelector('textarea').value;

        const texto = `Hola, quiero reservar una cita en Oasis Spa Vip.%0A%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Fecha: ${fecha}%0A
Mensaje: ${mensaje}`;

        const numeroWhatsApp = "18096743519";

        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
        window.open(url, "_blank");
    });
}

// BOTONES "RESERVAR" EN SERVICIOS
const botones = document.querySelectorAll(".btn-reservar");
const numeroWhatsAppServicios = "18096743519";

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const servicio = btn.getAttribute("data-servicio");

        const texto = `Hola, quiero reservar el servicio: ${servicio} en Oasis Spa Vip.`;
        const url = `https://wa.me/${numeroWhatsAppServicios}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    });
});
