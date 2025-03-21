import React, { useState } from "react";
import "./AlertasVencimiento.css"; // Importar el archivo CSS

const AlertasVencimiento = () => {
  // Datos simulados de alertas de vencimiento
  const [alertas] = useState([
    { id: 1, concepto: "Mensualidad Abril", fechaVencimiento: "25/3/2025", estado: "Pendiente" },
    { id: 2, concepto: "Matrícula 2025", fechaVencimiento: "20/03/2025", estado: "Pendiente" },
  ]);

  return (
    <div className="alertas-vencimiento">
      <h1>Alertas de Vencimiento</h1>

      {/* Listado de Alertas de Vencimiento */}
      <div className="listado-alertas">
        <h2>Listado de Alertas</h2>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Fecha de Vencimiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {alertas.map((alerta) => (
              <tr key={alerta.id}>
                <td>{alerta.concepto}</td>
                <td>{alerta.fechaVencimiento}</td>
                <td>{alerta.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertasVencimiento;