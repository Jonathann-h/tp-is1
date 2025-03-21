import React, { useState } from "react";
import "./RegistrosAcceso.css"; // Importar el archivo CSS

const RegistrosAcceso = () => {
  // Datos simulados de registros de acceso
  const [registrosAcceso] = useState([
    { id: 1, usuario: "Juan Pérez", fecha: "21/03/2025 10:00", accion: "Inicio de sesión" },
    { id: 2, usuario: "María Gómez", fecha: "21/03/2025 11:30", accion: "Cierre de sesión" },
  ]);

  return (
    <div className="registros-acceso">
      <h1>Registros de Acceso</h1>

      {/* Listado de Registros de Acceso */}
      <div className="listado-registros">
        <h2>Listado de Accesos</h2>
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {registrosAcceso.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.usuario}</td>
                <td>{registro.fecha}</td>
                <td>{registro.accion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrosAcceso;