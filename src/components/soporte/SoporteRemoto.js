import React, { useState } from "react";
import "./SoporteRemoto.css"; // Importar el archivo CSS

const SoporteRemoto = () => {
  // Estados para gestionar el soporte remoto
  const [solicitud, setSolicitud] = useState("");
  const [solicitudes, setSolicitudes] = useState([]);

  // Función para enviar una solicitud de soporte
  const enviarSolicitud = (e) => {
    e.preventDefault();
    if (solicitud) {
      const nuevaSolicitud = { id: solicitudes.length + 1, descripcion: solicitud, fecha: new Date().toLocaleString() };
      setSolicitudes([...solicitudes, nuevaSolicitud]);
      setSolicitud(""); // Limpiar el campo de texto
      alert("Solicitud enviada exitosamente.");
    } else {
      alert("Por favor, ingrese una descripción de la solicitud.");
    }
  };

  return (
    <div className="soporte-remoto">
      <h1>Soporte Remoto</h1>

      {/* Formulario para enviar una solicitud de soporte */}
      <div className="enviar-solicitud">
        <h2>Enviar Solicitud de Soporte</h2>
        <form onSubmit={enviarSolicitud}>
          <textarea
            placeholder="Describa su problema o consulta..."
            value={solicitud}
            onChange={(e) => setSolicitud(e.target.value)}
            required
          />
          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>

      {/* Listado de Solicitudes Enviadas */}
      <div className="listado-solicitudes">
        <h2>Solicitudes Enviadas</h2>
        <table>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((solicitud) => (
              <tr key={solicitud.id}>
                <td>{solicitud.descripcion}</td>
                <td>{solicitud.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoporteRemoto;