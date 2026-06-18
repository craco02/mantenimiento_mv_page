// Abrir modal
document.getElementById("waButton").addEventListener("click", function(event) {
  event.preventDefault(); // evita que abra el enlace directo
  document.getElementById("waModal").style.display = "flex";
});

// Cerrar modal con botón
document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("waModal").style.display = "none";
});

// Cerrar modal clicando fuera del contenido
document.getElementById("waModal").addEventListener("click", function(event) {
  // Si el clic fue directamente en el fondo (overlay), cerramos
  if (event.target === this) {
    this.style.display = "none";
  }
});
