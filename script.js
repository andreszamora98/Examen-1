function cargarVista(menu) {
    const divDinamic = document.getElementById('divdinamico');
    const filePath = `${menu}.html`; // Ahora todas las vistas están en la misma ruta

    // Usamos fetch para cargar el archivo HTML
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo');
            }
            return response.text();
        })
        .then(data => {
            // Inyectamos el contenido del archivo HTML en el div
            divDinamic.innerHTML = data;
        })
        .catch(error => {
            divDinamic.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleMenu');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var navLinks = document.querySelectorAll('.nav-link'); // Todas las opciones del sidebar

    // Abrir y cerrar sidebar al dar clic en el botón
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Cerrar sidebar al hacer clic en el overlay
    overlay.addEventListener('click', function() {
        cerrarSidebar();
    });

    // Cerrar sidebar al hacer clic en cualquier enlace del menú
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            cerrarSidebar();
        });
    });

    // Manejo de submenús
    var menuItems = document.querySelectorAll('[data-toggle="submenu"]');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var target = item.getAttribute('data-target');
            var submenu = document.getElementById(target);
            submenu.classList.toggle('active');
        });
    });

    // Función para cerrar sidebar y overlay
    function cerrarSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});


