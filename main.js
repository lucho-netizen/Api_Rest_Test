// Define la URL de la API con el ID 1
var apiUrl = 'https://localhost:7293/api/Gasoductos/';

// Realiza la solicitud GET a la URL
fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json(); // Suponiendo que la respuesta es en formato JSON
        } else {
            throw new Error('Error en la respuesta de la API');
        }
    })
    .then(data => {
        // Maneja los datos recibidos de la API aquí
        console.log('Datos de la API:', data);
        // Puedes acceder a los datos y usarlos según sea necesario
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
