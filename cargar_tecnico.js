document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tecnicoId = urlParams.get('id');
    const categoria = urlParams.get('category');

    if (tecnicoId && categoria) {
        try {
            const response = await fetch('tecnicos.json');
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON.');
            }
            const tecnicosData = await response.json();
            const tecnico = tecnicosData[categoria].find(tec => tec.id == tecnicoId);

            if (tecnico) {
                document.getElementById('photo-profile').src = tecnico.imagen;
                document.getElementById('profile-name').textContent = tecnico.nombre;
                document.getElementById('email').textContent = tecnico.correo;
                document.getElementById('phone').textContent = tecnico.telefono;
                document.getElementById('address').textContent = tecnico.ubicacion;
                document.getElementById('services').textContent = tecnico.servicios.join(', ');
                document.getElementById('prices').textContent = tecnico.precios.join(', ');
            } else {
                console.error('Técnico no encontrado');
            }
        } catch (error) {
            console.error('Error al cargar los detalles del técnico:', error);
        }
    } else {
        console.error('ID de técnico o categoría no proporcionados');
    }
});