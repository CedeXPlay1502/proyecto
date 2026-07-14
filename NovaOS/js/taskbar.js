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

// ================================
//      MENÚ INICIO
// ================================

const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

startButton.addEventListener("click", () => {
    startMenu.classList.toggle("hidden");
});