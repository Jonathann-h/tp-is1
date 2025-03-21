import React from "react";
import "./Inicio.css"; // Importar el archivo CSS

const Inicio = () => {
  // Datos simulados para el dashboard
  const metricas = {
    alumnosActivos: 120,
    docentes: 15,
    pagosPendientes: 5,
    alertasRecientes: 2,
  };

  const notificaciones = [
    { id: 1, mensaje: "Cuota de octubre vence en 3 días.", tipo: "alerta" },
    { id: 2, mensaje: "Nueva solicitud de soporte recibida.", tipo: "notificacion" },
  ];

  return (
    <div className="inicio">
      <h1>Bienvenido al Sistema de Gestión Académica</h1>

      {/* Resumen de Métricas */}
      <div className="resumen-metricas">
        <div className="metrica">
          <h2>Alumnos Activos</h2>
          <p>{metricas.alumnosActivos}</p>
        </div>
        <div className="metrica">
          <h2>Docentes</h2>
          <p>{metricas.docentes}</p>
        </div>
        <div className="metrica">
          <h2>Pagos Pendientes</h2>
          <p>{metricas.pagosPendientes}</p>
        </div>
        <div className="metrica">
          <h2>Alertas Recientes</h2>
          <p>{metricas.alertasRecientes}</p>
        </div>
      </div>

      {/* Accesos Rápidos */}
      <div className="accesos-rapidos">
        <h2>Accesos Rápidos</h2>
        <div className="botones-acceso">
          <button>Gestión de Alumnos</button>
          <button>Gestión de Docentes</button>
          <button>Pagos y Facturación</button>
          <button>Configuración</button>
        </div>
      </div>

      {/* Notificaciones y Alertas */}
      <div className="notificaciones">
        <h2>Notificaciones Recientes</h2>
        <ul>
          {notificaciones.map((notificacion) => (
            <li key={notificacion.id} className={notificacion.tipo}>
              {notificacion.mensaje}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inicio;