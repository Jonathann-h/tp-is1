import React from "react";
import "./ManualUsuario.css"; // Importar el archivo CSS

const ManualUsuario = () => {
  // Función para descargar el manual en PDF
  const descargarManual = () => {
    alert("Descargando manual de usuario...");
    // Aquí iría la lógica para descargar el PDF
  };

  return (
    <div className="manual-usuario">
      <h1>Manual de Usuario</h1>

      {/* Botón para descargar el manual */}
      <div className="descargar-manual">
        <button onClick={descargarManual}>Descargar Manual en PDF</button>
      </div>
    </div>
  );
};

export default ManualUsuario;