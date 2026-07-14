// =============================
// -   NOVAOS DESKTOP          -
// =============================


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

function cargarEscritorio(){

    const desktop = document.getElementById("desktop");

    aplicaciones.forEach(app => {

        const icono = document.createElement("div");

        icono.classList.add("desktop-icon");
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

cargarEscritorio();

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
                        "
                        placeholder="Escribe aquí..."
                    ></textarea>
                `
            );

            break;

        case "calculator":

            windowManager.crearVentana(
                "🧮 Calculadora",
                "<h2>Calculadora en construcción</h2>"
            );

            break;

        case "terminal":

            windowManager.crearVentana(
                "💻 Terminal",
                "<p>Bienvenido a NovaOS Terminal</p>"
            );

            break;

        case "trash":

            windowManager.crearVentana(
                "🗑 Papelera",
                "<p>La papelera está vacía.</p>"
            );

            break;
    }

}