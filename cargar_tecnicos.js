document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        window.location.href = `tecnicos.html?category=${category}`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        document.getElementById('category-name').textContent = category.charAt(0).toUpperCase() + category.slice(1);
        cargarTecnicos(category);
    }
});

async function cargarTecnicos(categoria) {
    try {
        const response = await fetch('tecnicos.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        const tecnicosData = await response.json();
        const tecnicos = tecnicosData[categoria];
        const techniciansContainer = document.getElementById('technicians-container');

        techniciansContainer.innerHTML = '';

        tecnicos.forEach(tecnico => {
            const technicianDiv = document.createElement('div');
            technicianDiv.classList.add('technician');

            technicianDiv.innerHTML = `
                <img src="${tecnico.imagen}" alt="${tecnico.nombre}" />
                <p class="technician-name">${tecnico.nombre}</p>
                <div class="rating">
                    ${generarEstrellas(tecnico.valoracion)}
                </div>
                <a href="perfil.html?id=${tecnico.id}&category=${categoria}" class="ver-mas-link">Ver más</a>
            `;

            techniciansContainer.appendChild(technicianDiv);
        });
    } catch (error) {
        console.error('Error al cargar los técnicos:', error);
    }
}

function generarEstrellas(valoracion) {
    const valoracionNum = parseFloat(valoracion);
    const estrellasTotales = 5;
    let estrellasHtml = '';

    for (let i = 1; i <= estrellasTotales; i++) {
        if (i <= valoracionNum) {
            estrellasHtml += '<i class="fas fa-star"></i>';
        } else {
            estrellasHtml += '<i class="far fa-star"></i>';
        }
    }

    return estrellasHtml;
}