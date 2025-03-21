import React, { useState } from "react";
import "./ReportesAcademicos.css"; // Importar el archivo CSS

const ReportesAcademicos = () => {
  // Datos simulados de reportes académicos
  const [reportesAcademicos] = useState([
    { id: 1, nombre: "Reporte de Asistencia", fecha: "2023-10-10" },
    { id: 2, nombre: "Reporte de Calificaciones", fecha: "2023-10-11" },
  ]);

  // Función para descargar un reporte académico
  const descargarReporteAcademico = (nombre) => {
    alert(`Descargando ${nombre}...`);
    // Aquí iría la lógica para generar y descargar el reporte en PDF
  };

  return (
    <div className="reportes-academicos">
      <h1>Reportes Académicos</h1>

      {/* Listado de Reportes Académicos */}
      <div className="listado-reportes">
        <h2>Listado de Reportes</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reportesAcademicos.map((reporte) => (
              <tr key={reporte.id}>
                <td>{reporte.nombre}</td>
                <td>{reporte.fecha}</td>
                <td>
                  <button onClick={() => descargarReporteAcademico(reporte.nombre)}>
                    Descargar
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

export default ReportesAcademicos;