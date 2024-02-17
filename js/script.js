function init() {
    // Puedes realizar alguna inicialización aquí si es necesario
}

function mostrarImagenes() {
    // Obtener valores de los límites
    const lowerLimit = document.getElementById('lower_limit').value;
    const upperLimit = document.getElementById('upper_limit').value;

    // Validar que el límite inferior sea menor que el límite superior
    if (parseInt(lowerLimit) >= parseInt(upperLimit)) {
        alert("El límite inferior debe ser menor que el límite superior");
        return;
    }

    // Obtener estado del switch
    const showOne = document.getElementById('showOne').checked;

    // Limpiar el contenedor de imágenes
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    // Mostrar imágenes
    if (showOne) {
        // Mostrar solo una imagen correspondiente al límite inferior
        consultarImagen(lowerLimit);
    } else {
        // Mostrar imágenes desde el límite inferior hasta el límite superior
        for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
            consultarImagen(i);
        }
    }
}

function consultarImagen(numero) {
    // Hacer la solicitud GET al endpoint
    fetch(`http://jsonplaceholder.typicode.com/photos/${numero}`)
        .then(response => response.json())
        .then(data => {
            // Crear elemento de imagen y asignar atributos
            const img = document.createElement('img');
            img.src = data.url;
            img.alt = data.title;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';

            // Agregar imagen al contenedor
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.appendChild(img);
        })
        .catch(error => console.error('Error al obtener la imagen:', error));
}
