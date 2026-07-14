// ======================================
// NOVA OS
// WINDOW MANAGER
// ======================================

// Controla qué ventana queda por encima de las demás
let zIndexActual = 1;

class WindowManager {

    constructor() {

        // Contenedor donde se agregarán todas las ventanas
        this.windowsContainer = document.getElementById("windows-container");

    }

    // ======================================
    // Crear una nueva ventana
    // ======================================

    crearVentana(titulo, contenido) {

        // Crear la ventana
        const ventana = document.createElement("div");
        ventana.className = "window";

        // Posición inicial aleatoria
        const x = Math.floor(Math.random() * 250) + 100;
        const y = Math.floor(Math.random() * 120) + 70;

        ventana.style.left = `${x}px`;
        ventana.style.top = `${y}px`;

        // La ventana nueva queda al frente
        ventana.style.zIndex = ++zIndexActual;

        // Contenido HTML
        ventana.innerHTML = `
            <div class="window-header">
                <span>${titulo}</span>
                <button class="close-button">✖</button>
            </div>

            <div class="window-body">
                ${contenido}
            </div>
        `;

        // Agregar la ventana al escritorio
        this.windowsContainer.appendChild(ventana);

        // ======================================
        // BOTÓN CERRAR
        // ======================================

        const botonCerrar = ventana.querySelector(".close-button");

        botonCerrar.addEventListener("click", () => {
            ventana.remove();
        });

        // ======================================
        // TRAER AL FRENTE
        // ======================================

        ventana.addEventListener("mousedown", () => {
            ventana.style.zIndex = ++zIndexActual;
        });

        // ======================================
        // HACER LA VENTANA ARRASTRABLE
        // ======================================

        const header = ventana.querySelector(".window-header");

        let moviendo = false;
        let offsetX = 0;
        let offsetY = 0;

        // Cuando comienza el arrastre
        header.addEventListener("mousedown", (e) => {

            moviendo = true;

            offsetX = e.clientX - ventana.offsetLeft;
            offsetY = e.clientY - ventana.offsetTop;

        });

        // Mientras se mueve el mouse
        document.addEventListener("mousemove", (e) => {

            if (!moviendo) return;

            ventana.style.left = `${e.clientX - offsetX}px`;
            ventana.style.top = `${e.clientY - offsetY}px`;

        });

        // Cuando se suelta el botón del mouse
        document.addEventListener("mouseup", () => {

            moviendo = false;

        });

    }

}

// Crear una única instancia del administrador de ventanas
const windowManager = new WindowManager();
