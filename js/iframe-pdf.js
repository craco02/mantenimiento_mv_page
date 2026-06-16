// Definición de grupos con sus PDFs en la nube
const grupos = {
  // Grupo 1 – Soldadoras
  grupo1: [
    { nombre: "Ficha técnica - UNIVERSAL 400", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=a95010b6-f07c-4d35-8c4a-c5a76e95ac14" },
    { nombre: "Ficha técnica - SPARC 226", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=1a3dc059-b722-48c0-b3d1-8fd1a93a49b5" },
    { nombre: "Ficha técnica - UNIMIG 318", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=1459b9ff-ba2e-41c4-bc46-3b86fffeaf0c" },
    { nombre: "Ficha técnica - UNIMIG 418", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=6014b7e8-339d-4aac-b775-a2bca446028d" },
    { nombre: "Ficha técnica - UNIMIG 498", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=bab78c3d-ae6f-4535-b850-94a286f2ea3f" },
    { nombre: "Ficha técnica - GLOBUS 201", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=35d9e42a-0482-4bd5-829a-193b1610d88d" },
    { nombre: "Ficha técnica - MAXI MIG 298", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=094be912-ea79-44be-a6d0-22aae3efb92a" },

    { nombre: "Lista de partes - UNIVERSAL 400", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=bbafb1de-efa7-4b9a-a9ac-a4f0ff05004d" },
    { nombre: "Lista de partes - SPARC 226", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=dc8d1883-78c9-4258-b056-f6ec202b42dd" },
    { nombre: "Lista de partes - UNIMIG 318", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=6b78769e-c08c-4e02-b24a-bed07c571399" },
    { nombre: "Lista de partes - UNIMIG 418", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=c17eb2bc-7137-457f-a654-132ac7120284" },
    { nombre: "Lista de partes - UNIMIG 498", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=c9a70af1-1a8f-4afd-ad58-990e9a2fd3a1" },
    { nombre: "Lista de partes - GLOBUS 201", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=eec27ca8-a351-4bcc-9f7f-e7fe5f851aa0" },
    { nombre: "Lista de partes - MAXI MIG 298", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=df0dfdd0-c6fb-4382-9ede-6e3d2622fe16" },

    { nombre: "Manual de usuario - UNIVERSAL 400", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=5319f018-aca5-40f9-bef2-76f21ecb6b7a" },
    { nombre: "Manual de usuario - SPARC 226", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=805b72fb-9c7f-4f0c-b5aa-83990b1ea23e" },
    { nombre: "Manual de usuario - UNIMIG 318/418/498", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=644e3690-793f-47dc-b6e6-bae433051711" },
    { nombre: "Manual de usuario - GLOBUS 201", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=6bb2e7a4-04b3-423e-825f-fc3ec0ba7346" },
  ],

  // Grupo 2 – Herramientas Makita
  grupo2: [
    { nombre: "Ficha técnica - 9557hnr", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=d883389f-72aa-406d-aebe-be9162dbd75f" },
    { nombre: "Ficha técnica - ga9020", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=e3b19608-a394-4d8d-8148-bd964699cd50" },
    { nombre: "Ficha técnica - hp1640", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=b6ac0738-39ef-4722-8160-6b6cd61156e5" },
    { nombre: "Ficha técnica - gd0600", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=3a76f59b-d1f4-4354-858c-b7777d8137c8" },
    { nombre: "Ficha técnica - gd0800c", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=5bfe27d6-5919-49a8-b200-ea98534730f8" },
    { nombre: "Ficha técnica - hr2470", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=2799c6fa-5dc0-4438-8ee6-058066993845" },
    { nombre: "Ficha técnica - fs2700", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=5fec6211-4437-4af7-b00c-de3978b5fc63" },

    { nombre: "Despiece - 9557NB", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=536c5364-27e3-47e1-9737-bdac6e169e66" },
    { nombre: "Despiece - GA9020", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=804553b4-cf20-44ef-b275-08826a7ec9cb" },
    { nombre: "Despiece - HP1640", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=58230564-a2c7-40b0-af59-8d1fe3277f6b" },
    { nombre: "Despiece - GD0601", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=24f0893c-a97a-4c82-ae7c-7849a0358e53" },
    { nombre: "Despiece - GD0800C", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=b86d16f9-59ef-4875-a83d-bdf5048e76af" },
    { nombre: "Despiece - HR2470", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=0d8b6b00-b04e-40dc-9aed-d2d4b2c8c3c3" },
    { nombre: "Despiece - FS2700", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=e8c93be6-2814-4e1e-9493-af86cf450ec0" },

    { nombre: "Método de reparación - HR2470", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=cfe60192-b15d-43df-8513-80b2ef199928" },
    { nombre: "Método de reparación - FS2700", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=f69302f7-9be1-45a7-8e70-0c2ebb7a2c64" }
  ],

  // Grupo 3 – Documentos eléctricos
  grupo3: [
    { nombre: "Norma Paraguaya NP_2_028_13", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=a5126992-cf5c-4641-a190-8655fc0802d8" },
    { nombre: "Reglamento de Baja Tensión Vigente", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=e4e228d0-44ae-4c19-a2ba-10b4a4eb5a8d" },
    { nombre: "Pliego de Tarifas NRO 21", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=13d016b1-b58a-4cde-a40e-0bb2ededfa52" },

    { nombre: "Temario para examen de matriculación", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=66662257-1d12-4c46-bbea-b4612de15a75" },
    { nombre: "Solicitud de Carnet de Electricista Particular", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=f19d9d51-3ef3-425e-8eb0-ae66f6236b1d" },
    { nombre: "Calendario MEEDA 2026", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=ef4397c3-03da-4d3d-ac92-75dbdfabb5ed" },
    { nombre: "RP46876 Manual de cálculo tasa de conexión", url: "https://mvaceros-my.sharepoint.com/personal/reparaciones_metalurgicavera_com_py/_layouts/15/embed.aspx?UniqueId=70b8dfba-c77f-4847-be90-eb73bcbb4c0a" },
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