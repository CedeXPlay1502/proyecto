// ======================================
// NOVA OS
// DESKTOP
// ======================================

const aplicaciones = [
    {
        id: "notes",
        nombre: "Bloc de notas",
        icono: "📄"
    },
    {
        id: "calculator",
        nombre: "Calculadora",
        icono: "🧮"
    },
    {
        id: "terminal",
        nombre: "Terminal",
        icono: "💻"
    },
    {
        id: "trash",
        nombre: "Papelera",
        icono: "🗑️"
    }
];

// ======================================
// CARGAR ESCRITORIO
// ======================================

function cargarEscritorio() {

    const desktop = document.getElementById("desktop");

    desktop.innerHTML = "";

    aplicaciones.forEach(app => {

        const icono = document.createElement("div");

        icono.className = "desktop-icon";
        icono.dataset.app = app.id;

        icono.innerHTML = `
            <div class="icon">${app.icono}</div>
            <span>${app.nombre}</span>
        `;

        icono.addEventListener("dblclick", () => {
            abrirAplicacion(app);
        });

        desktop.appendChild(icono);

    });

}

// ======================================
// ABRIR APLICACIONES
// ======================================

function abrirAplicacion(app) {

    switch (app.id) {

        case "notes":

            windowManager.crearVentana(
                "📄 Bloc de notas",
                `
                <textarea
                    style="
                        width:100%;
                        height:250px;
                        resize:none;
                        border:none;
                        outline:none;
                        font-size:16px;
                        font-family:Arial, sans-serif;
                    "
                    placeholder="Escribe aquí..."
                ></textarea>
                `
            );

            break;

        case "calculator":

            windowManager.crearVentana(
                "🧮 Calculadora",
                `
                <h2>Calculadora</h2>
                <p>🚧 Próximamente...</p>
                `
            );

            break;

        case "terminal":

            windowManager.crearVentana(
                "💻 Terminal",
                `
                <div style="
                    background:black;
                    color:#00ff00;
                    padding:10px;
                    height:250px;
                    font-family:monospace;
                ">
                    <p>NovaOS Terminal v0.1</p>
                    <p>Escribe "help" próximamente...</p>
                </div>
                `
            );

            break;

        case "trash":

            windowManager.crearVentana(
                "🗑️ Papelera",
                `
                <h3>Papelera</h3>
                <p>La papelera está vacía.</p>
                `
            );

            break;

        default:

            windowManager.crearVentana(
                "Aplicación",
                "<p>Aplicación no encontrada.</p>"
            );

    }

}

// ======================================
// INICIAR ESCRITORIO
// ======================================

cargarEscritorio();