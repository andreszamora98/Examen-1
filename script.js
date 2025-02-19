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

