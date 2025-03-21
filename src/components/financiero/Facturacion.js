import React, { useState } from "react";
import "./Facturacion.css"; // Importar el archivo CSS

const Facturacion = () => {
  // Datos simulados de facturas
  const [facturas] = useState([
    { id: 1, numero: "001-001-0000001", monto: 500000, fecha: "2023-10-10" },
    { id: 2, numero: "001-001-0000002", monto: 300000, fecha: "2023-10-11" },
  ]);

  return (
    <div className="facturacion">
      <h1>Facturación</h1>

      {/* Listado de Facturas */}
      <div className="listado-facturas">
        <h2>Listado de Facturas</h2>
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((factura) => (
              <tr key={factura.id}>
                <td>{factura.numero}</td>
                <td>Gs. {factura.monto.toLocaleString()}</td>
                <td>{factura.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facturacion;