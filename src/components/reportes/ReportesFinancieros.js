import React, { useState } from "react";
import "./ReportesFinancieros.css"; // Importar el archivo CSS

const ReportesFinancieros = () => {
  // Datos simulados de reportes financieros
  const [reportesFinancieros] = useState([
    { id: 1, nombre: "Reporte de Pagos", fecha: "20/03/2025" },
    { id: 2, nombre: "Reporte de Deudas", fecha: "20/03/2025" },
  ]);

  // Función para descargar un reporte financiero
  const descargarReporteFinanciero = (nombre) => {
    alert(`Descargando ${nombre}...`);
    // Aquí iría la lógica para generar y descargar el reporte en PDF
  };

  return (
    <div className="reportes-financieros">
      <h1>Reportes Financieros</h1>

      {/* Listado de Reportes Financieros */}
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
            {reportesFinancieros.map((reporte) => (
              <tr key={reporte.id}>
                <td>{reporte.nombre}</td>
                <td>{reporte.fecha}</td>
                <td>
                  <button onClick={() => descargarReporteFinanciero(reporte.nombre)}>
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

export default ReportesFinancieros;