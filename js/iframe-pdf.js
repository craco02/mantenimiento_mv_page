// Definición de grupos con sus PDFs en la nube
const grupos = {
  // Grupo 1 – Soldadoras
  grupo1: [
    { nombre: "Ficha técnica - UNIVERSAL 400", url: "https://drive.google.com/file/d/1qsKYTIog5T156I1egmxsWtwqLcih6-0M/preview" },
    { nombre: "Ficha técnica - SPARC 226", url: "https://drive.google.com/file/d/1YlGrstANFU2LayfJBwPlteuVoS3_Tm8P/preview" },
    { nombre: "Ficha técnica - UNIMIG 318", url: "https://drive.google.com/file/d/16ezVkPtwUIcaOj5U5R2sIUjPDW6Xlcti/preview" },
    { nombre: "Ficha técnica - UNIMIG 418", url: "https://drive.google.com/file/d/1vR3kg2uc3WzgJ90KOTJtSQtzbUaUls62/preview" },
    { nombre: "Ficha técnica - UNIMIG 498", url: "https://drive.google.com/file/d/1diU5IFb7bpnn8VwD90dA9OYEJv1LlehM/preview" },
    { nombre: "Ficha técnica - GLOBUS 201", url: "https://drive.google.com/file/d/17KD4H1pj357SDpaph_9ZT7pU845Ir3-E/preview" },
    { nombre: "Ficha técnica - MAXI MIG 298", url: "https://drive.google.com/file/d/1Zf92ZRRBSyIHAATI7zxPD-yTcShFmjtX/preview" },

    { nombre: "Lista de partes - UNIVERSAL 400", url: "https://drive.google.com/file/d/1s2chk30iWlxm3VdUlhOTVGcVCZKzHmrE/preview" },
    { nombre: "Lista de partes - SPARC 226", url: "https://drive.google.com/file/d/1oIGtz1gVwDvCDB1WxzGJoiOYZnbR7kB_/preview" },
    { nombre: "Lista de partes - UNIMIG 318", url: "https://drive.google.com/file/d/1ZWVF7T_Tic9_UJlJQaekli5Rvf026ovS/preview" },
    { nombre: "Lista de partes - UNIMIG 418", url: "https://drive.google.com/file/d/1E1uvr2pqPrs7O3eYfJzrOoyly5x9Al_3/preview" },
    { nombre: "Lista de partes - UNIMIG 498", url: "https://drive.google.com/file/d/1fP3VUbk3dnkZCMTwgNUAaHi0g6eA4QwR/preview" },
    { nombre: "Lista de partes - GLOBUS 201", url: "https://drive.google.com/file/d/1llezZ5wjojA14Yo8Y6v5cFH7YTQRSf4M/preview" },
    { nombre: "Lista de partes - MAXI MIG 298", url: "https://drive.google.com/file/d/1Y7qN6J49ZBNXGM9O1zwrAf0PKAPGSISM/preview" },

    { nombre: "Manual de usuario - UNIVERSAL 400", url: "https://drive.google.com/file/d/1bVWo3AQlKbcVvWEuYEkxZhl3fC6H9aGs/preview" },
    { nombre: "Manual de usuario - SPARC 226", url: "https://drive.google.com/file/d/1qGLsKpycD4GKRDhqYZxekxsh7_2oycXD/preview" },
    { nombre: "Manual de usuario - UNIMIG 318/418/498/298", url: "https://drive.google.com/file/d/1Kx8OG7e5rCGnTHUQ4wjj8y2X78sjVx_f/preview" },
    { nombre: "Manual de usuario - GLOBUS 201", url: "https://drive.google.com/file/d/1uujh75E1piyqH2eAIKdJmtWNUJMvjavE/preview" },
  ],

  // Grupo 2 – Herramientas Makita
  grupo2: [
    { nombre: "Ficha técnica - 9557hnr", url: "https://drive.google.com/file/d/1jTB1a9Hq1zMhCWdK7OKDbVow1F9USJV0/preview" },
    { nombre: "Ficha técnica - ga9020", url: "https://drive.google.com/file/d/12OwNbdfhTAF1cBBXVV8xPNU50wJnwbDR/preview" },
    { nombre: "Ficha técnica - hp1640", url: "https://drive.google.com/file/d/1Pujn6XnM3ihYCGdohBtw7vAIxCYmPI3d/preview" },
    { nombre: "Ficha técnica - gd0600", url: "https://drive.google.com/file/d/1WVDzA-yDoButLqOkOLozaJ3VtBi3oxnP/preview" },
    { nombre: "Ficha técnica - gd0800c", url: "https://drive.google.com/file/d/1eCHOzcTWYU9HzqNJwZ_I3PpHpvBv7N9J/preview" },
    { nombre: "Ficha técnica - hr2470", url: "https://drive.google.com/file/d/19E9F-9jQvIeYJ1gyzmrOM18aQumEs5Ih/preview" },
    { nombre: "Ficha técnica - fs2700", url: "https://drive.google.com/file/d/15mtw9YSztA9eN6lAR6-WdyApBOhtV-jx/preview" },

    { nombre: "Despiece - 9557NB", url: "https://drive.google.com/file/d/1IFnwmV4QKdsVddhzbQuDXQZuDVir63eT/preview" },
    { nombre: "Despiece - GA9020", url: "https://drive.google.com/file/d/1sm7Zm4DiYqgy2g3k5bW2-aCuWcm6Zgbg/preview" },
    { nombre: "Despiece - HP1640", url: "https://drive.google.com/file/d/1fk9X8Gz5uZUCB9Mj1iX1yts79WUi5WMg/preview" },
    { nombre: "Despiece - GD0601", url: "https://drive.google.com/file/d/1PFOK2ivqXUmWTya5n6mRanHryvruKYKl/preview" },
    { nombre: "Despiece - GD0800C", url: "https://drive.google.com/file/d/1EJp_2PDpCKg9YgwKV1PiL7ahFoVzJz1Q/preview" },
    { nombre: "Despiece - HR2470", url: "https://drive.google.com/file/d/1ja150ukRLV65S8jC8lVEprYuHaddetzk/preview" },
    { nombre: "Despiece - FS2700", url: "https://drive.google.com/file/d/11FiAAgSGX7F4PAR5oMEgcYkgTgVJvIuu/preview" },

    { nombre: "Método de reparación - HR2470", url: "https://drive.google.com/file/d/1aRs0pCBbiGALNCI82hkUnkCqdk1sfzFI/preview" },
    { nombre: "Método de reparación - FS2700", url: "https://drive.google.com/file/d/1vJAAEMbB3D5788WvFgF5chdxndNLmbCa/preview" },
  ],

  // Grupo 3 – Documentos eléctricos
  grupo3: [
    { nombre: "Norma Paraguaya NP_2_028_13", url: "https://drive.google.com/file/d/1XAzptRdntv93bbRDq-1msQfz68s0M_SI/preview" },
    { nombre: "Reglamento de Baja Tensión Vigente", url: "https://drive.google.com/file/d/19y7gRFtq-7rz2JAW7EYhQtodL1WTJ98A/preview" },
    { nombre: "Pliego de Tarifas NRO 21", url: "https://drive.google.com/file/d/1foU9XfrNHWsEwwFAVwCV0I1gSl_lZwFl/preview" },

    { nombre: "Temario para examen de matriculación", url: "https://drive.google.com/file/d/1CWZ8e-42UJ-ZNtx2guOwzD47a6K5O4jr/preview" },
    { nombre: "Solicitud de Carnet de Electricista Particular", url: "https://drive.google.com/file/d/1K_-Af_EU2MdT3tAAjG86LP7viAGqMBO9/preview" },
    { nombre: "Calendario MEEDA 2026", url: "https://drive.google.com/file/d/1h-9kdg7cFkY8LYLMzl84FtlQbOeNbdXQ/preview" },
    { nombre: "RP46876 Manual de cálculo tasa de conexión", url: "https://drive.google.com/file/d/1p83M14e8129jHksOphZ8kinRf1lmafJE/preview" },

    { nombre: "Cálculo sección de conductor baja tensión", url: "https://drive.google.com/file/d/1uJP6R-lDbFIlg6eQh46u7e5vntccwv6y/preview" },
    { nombre: "Norma de instalaciones Electromecánicas", url: "https://drive.google.com/file/d/1r7SelOf9RZO-BrkVY5tEwHCBsulSDk85/preview" },
  ],
};

// Función para cargar un grupo en el select
function cargarGrupo(nombreGrupo) {
  const lista = document.getElementById("listaDocs");
  lista.innerHTML = '<option value="">-- Elegir documento --</option>';
  grupos[nombreGrupo].forEach(doc => {
    const option = document.createElement("option");
    option.value = doc.url;
    option.textContent = doc.nombre;
    lista.appendChild(option);
  });
  document.getElementById("visor").src = ""; // limpiar iframe
}

// Función para mostrar PDF en iframe
function mostrarPDF() {
  const url = document.getElementById("listaDocs").value;
  if (url) {
    document.getElementById("visor").src = url;
  }
}

// Detectar parámetro de grupo en la URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const grupo = params.get("grupo");
  if (grupo) {
    cargarGrupo(grupo);
  }
});