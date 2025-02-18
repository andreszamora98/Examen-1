function cargarVista(menu) {
    const divDinamic = document.getElementById('divdinamico');
    const filePath = `./views/${menu}.html`; // Construye la ruta al archivo HTML

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
