// ========================
//  NOVAOS - TASKBAR
// ========================

function actualizarReloj(){

    const reloj = document.getElementById("clock");

    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    reloj.textContent = `${horas}:${minutos}`;

}

setInterval(actualizarReloj, 1000);

actualizarReloj();

// ======================================
// NOVA OS
// TASKBAR
// ======================================

const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

// ==========================
// MENÚ INICIO
// ==========================

startButton.addEventListener("click", (e) => {

    e.stopPropagation();

    startMenu.classList.toggle("hidden");

});

// ==========================
// CERRAR MENÚ AL HACER CLIC
// FUERA DE ÉL
// ==========================

document.addEventListener("click", (e) => {

    if (
        !startMenu.contains(e.target) &&
        !startButton.contains(e.target)
    ) {

        startMenu.classList.add("hidden");

    }

});