document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("documentos");
  const iframe = document.getElementById("visor");
  const fallback = document.getElementById("fallback");
  const fallbackLink = document.getElementById("fallback-link");

  // Si la página tiene parámetro src en la URL, cargarlo directamente
  const params = new URLSearchParams(window.location.search);
  const srcParam = params.get("src");
  if (srcParam) {
    if (srcParam.startsWith("link:")) {
      iframe.style.display = "none";
      fallback.style.display = "block";
      const url = srcParam.replace("link:", "");
      fallbackLink.href = url;
      fallbackLink.textContent = "Abrir Modelo 3D";
    } else {
      iframe.src = srcParam;
    }
  }

  // Cambiar el contenido al seleccionar una opción
  select.addEventListener("change", () => {
    const valor = select.value;

    if (!valor) {
      iframe.src = "";
      iframe.style.display = "none";
      fallback.style.display = "none";
      return;
    }

    if (valor.startsWith("link:")) {
      iframe.style.display = "none";
      fallback.style.display = "block";
      const url = valor.replace("link:", "");
      fallbackLink.href = url;
      fallbackLink.textContent = select.options[select.selectedIndex].text;
      history.replaceState(null, "", `?src=${valor}`);
    } else {
      iframe.style.display = "block";
      iframe.src = valor;
      fallback.style.display = "none";
      history.replaceState(null, "", `?src=${valor}`);
    }
  });
});
