// Script para cargar dinámicamente el iframe según la opción seleccionada
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("documentos");
  const iframe = document.getElementById("visor");

  // Si la página tiene parámetro src en la URL, cargarlo directamente
  const params = new URLSearchParams(window.location.search);
  const srcParam = params.get("src");
  if (srcParam) iframe.src = srcParam;

  // Cambiar el contenido del iframe al seleccionar una opción
  select.addEventListener("change", () => {
    const valor = select.value;
    if (valor) {
      iframe.src = valor;
      // Actualizar la URL para mantener el parámetro src
      history.replaceState(null, "", `?src=${valor}`);
    } else {
      iframe.src = "";
    }
  });
});
