import React, { useState } from "react";
import "./ConfigNotificaciones.css"; // Importar el archivo CSS

const ConfigNotificaciones = () => {
  // Estados para gestionar notificaciones
  const [notificaciones, setNotificaciones] = useState([
    { id: 1, tipo: "Correo Electrónico", activa: true },
    { id: 2, tipo: "Notificación Push", activa: false },
  ]);

  // Función para cambiar el estado de una notificación
  const cambiarEstadoNotificacion = (id) => {
    const notificacionesActualizadas = notificaciones.map((notificacion) => {
      if (notificacion.id === id) {
        return { ...notificacion, activa: !notificacion.activa };
      }
      return notificacion;
    });
    setNotificaciones(notificacionesActualizadas);
  };

  return (
    <div className="config-notificaciones">
      <h1>Configuración de Notificaciones</h1>

      {/* Listado de Notificaciones */}
      <div className="listado-notificaciones">
        <h2>Listado de Notificaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notificaciones.map((notificacion) => (
              <tr key={notificacion.id}>
                <td>{notificacion.tipo}</td>
                <td>{notificacion.activa ? "Activa" : "Inactiva"}</td>
                <td>
                  <button onClick={() => cambiarEstadoNotificacion(notificacion.id)}>
                    {notificacion.activa ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConfigNotificaciones;