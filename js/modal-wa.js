// Abrir modal
document.getElementById("waButton").addEventListener("click", function(event) {
  event.preventDefault(); // evita que abra el enlace directo
  document.getElementById("waModal").style.display = "flex";
});

// Cerrar modal
document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("waModal").style.display = "none";
});
