// Activar/desactivar modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Datos de las noticias
const noticias = {
    noticia1: {
        titulo: "Nuevo Modelo de Superdeportivo 2024",
        contenido: "Este superdeportivo redefine la velocidad y el diseño."
    }
    // Agrega más noticias si es necesario
};

// Función para abrir el modal y mostrar contenido de la noticia
function openModal(noticiaId) {
    const noticia = noticias[noticiaId];
    document.getElementById("modalBody").innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p>${noticia.contenido}</p>
    `;
    document.getElementById("newsModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("newsModal").style.display = "none";
}

// Cerrar modal al hacer clic fuera
window.onclick = (event) => {
    const modal = document.getElementById("newsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
