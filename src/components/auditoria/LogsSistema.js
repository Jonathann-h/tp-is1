import React, { useState } from "react";
import "./LogsSistema.css"; // Importar el archivo CSS

const LogsSistema = () => {
  // Datos simulados de logs del sistema
  const [logsSistema] = useState([
    { id: 1, fecha: "21/03/2025 10:00", tipo: "Error", descripcion: "Error en la conexión a la base de datos" },
    { id: 2, fecha: "21/03/2025 11:30", tipo: "Advertencia", descripcion: "Espacio en disco bajo" },
  ]);

  return (
    <div className="logs-sistema">
      <h1>Logs del Sistema</h1>

      {/* Listado de Logs del Sistema */}
      <div className="listado-logs">
        <h2>Listado de Logs</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {logsSistema.map((log) => (
              <tr key={log.id}>
                <td>{log.fecha}</td>
                <td>{log.tipo}</td>
                <td>{log.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsSistema;