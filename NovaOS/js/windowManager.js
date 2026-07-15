// ======================================
// NOVA OS
// WINDOW MANAGER
// ======================================

let zIndexActual = 100;

class WindowManager {

    crearVentana(titulo, contenido) {

        // Obtener los contenedores en tiempo real
        const windowsContainer = document.getElementById("windows-container");
        const taskbarApps = document.getElementById("taskbar-apps");

        if (!windowsContainer) {
            console.error("No se encontró #windows-container");
            return;
        }

        if (!taskbarApps) {
            console.error("No se encontró #taskbar-apps");
            return;
        }

        // ===============================
        // Crear ventana
        // ===============================

        const ventana = document.createElement("div");

        ventana.className = "window";
        ventana.style.left = `${100 + Math.random() * 150}px`;
        ventana.style.top = `${80 + Math.random() * 120}px`;
        ventana.style.zIndex = ++zIndexActual;

        ventana.innerHTML = `
            <div class="window-header">

                <span>${titulo}</span>

                <div class="window-buttons">

                    <button class="minimize-button">─</button>
                    <button class="close-button">✖</button>

                </div>

            </div>

            <div class="window-body">

                ${contenido}

            </div>
        `;

        windowsContainer.appendChild(ventana);

        // ===============================
        // Botón de la barra de tareas
        // ===============================

        const taskButton = document.createElement("button");

        taskButton.className = "taskbar-app";
        taskButton.textContent = titulo;

        taskbarApps.appendChild(taskButton);

        // ===============================
        // Referencias
        // ===============================

        const header = ventana.querySelector(".window-header");
        const botonCerrar = ventana.querySelector(".close-button");
        const botonMinimizar = ventana.querySelector(".minimize-button");

        let moviendo = false;
        let offsetX = 0;
        let offsetY = 0;
        let minimizada = false;

        // ===============================
        // Activar ventana
        // ===============================

        const activarVentana = () => {

            ventana.style.zIndex = ++zIndexActual;

            document
                .querySelectorAll(".taskbar-app")
                .forEach(btn => btn.classList.remove("active"));

            taskButton.classList.add("active");

        };

        activarVentana();

        ventana.addEventListener("mousedown", activarVentana);

        // ===============================
        // Minimizar
        // ===============================

        botonMinimizar.addEventListener("click", (e) => {

            e.stopPropagation();

            ventana.style.display = "none";
            minimizada = true;

            taskButton.classList.remove("active");

        });

        // ===============================
        // Restaurar
        // ===============================

        taskButton.addEventListener("click", () => {

            if (minimizada) {

                ventana.style.display = "block";
                minimizada = false;

                activarVentana();

            } else {

                ventana.style.display = "none";
                minimizada = true;

                taskButton.classList.remove("active");

            }

        });

        // ===============================
        // Cerrar
        // ===============================

        botonCerrar.addEventListener("click", (e) => {

            e.stopPropagation();

            ventana.remove();
            taskButton.remove();

        });

        // ===============================
        // Arrastrar ventana
        // ===============================

        header.addEventListener("mousedown", (e) => {

            activarVentana();

            moviendo = true;

            offsetX = e.clientX - ventana.offsetLeft;
            offsetY = e.clientY - ventana.offsetTop;

        });

        document.addEventListener("mousemove", (e) => {

            if (!moviendo) return;

            ventana.style.left = `${e.clientX - offsetX}px`;
            ventana.style.top = `${e.clientY - offsetY}px`;

        });

        document.addEventListener("mouseup", () => {

            moviendo = false;

        });

    }

}

// Instancia global
const windowManager = new WindowManager();