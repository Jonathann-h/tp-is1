import React, { useState } from "react";
import "./Pagos.css"; // Importar el archivo CSS

const Pagos = () => {
  // Datos simulados de pagos
  const [pagos] = useState([
    { id: 1, concepto: "Matrícula", monto: 500000, fecha: "20/03/2025" },
    { id: 2, concepto: "Mensualidad", monto: 300000, fecha: "20/03/2025" },
  ]);

  return (
    <div className="pagos">
      <h1>Pagos</h1>

      {/* Listado de Pagos */}
      <div className="listado-pagos">
        <h2>Listado de sus pagoos realizados</h2>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago) => (
              <tr key={pago.id}>
                <td>{pago.concepto}</td>
                <td>Gs. {pago.monto.toLocaleString()}</td>
                <td>{pago.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pagos;