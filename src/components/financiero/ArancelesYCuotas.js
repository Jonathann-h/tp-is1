import React, { useState } from "react";
import "./ArancelesYCuotas.css"; // Importar el archivo CSS

const ArancelesYCuotas = () => {
  // Datos simulados de aranceles y cuotas
  const [aranceles] = useState([
    { id: 1, concepto: "Matrícula", monto: 500000 },
    { id: 2, concepto: "Mensualidad", monto: 300000 },
  ]);

  return (
    <div className="aranceles-y-cuotas">
      <h1>Aranceles y Cuotas</h1>

      {/* Listado de Aranceles y Cuotas */}
      <div className="listado-aranceles">
        <h2>Listado de Aranceles y Cuotas</h2>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {aranceles.map((arancel) => (
              <tr key={arancel.id}>
                <td>{arancel.concepto}</td>
                <td>Gs. {arancel.monto.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArancelesYCuotas;