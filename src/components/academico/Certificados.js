import React, { useState } from "react";
import "./Certificados.css"; // Importar el archivo CSS

const Certificados = () => {
  // Estados para gestionar certificados
  const [certificados, setCertificados] = useState([
    { id: 1, alumno: "Juan Pérez", programa: "Capacitación en Desarrollo Web", fecha: "21/03/2025" },
    { id: 2, alumno: "María Gómez", programa: "Especialización en Data Science", fecha: "21/03/2025" },
  ]);
  const [nuevoCertificado, setNuevoCertificado] = useState({ alumno: "", programa: "", fecha: "" });

  // Función para agregar un nuevo certificado
  const agregarCertificado = (e) => {
    e.preventDefault();
    if (nuevoCertificado.alumno && nuevoCertificado.programa && nuevoCertificado.fecha) {
      const certificado = { id: certificados.length + 1, ...nuevoCertificado };
      setCertificados([...certificados, certificado]);
      setNuevoCertificado({ alumno: "", programa: "", fecha: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="certificados">
      <h1>Gestión de Certificados</h1>

      {/* Formulario para agregar un nuevo certificado */}
      <div className="agregar-certificado">
        <h2>Agregar Nuevo Certificado</h2>
        <form onSubmit={agregarCertificado}>
          <input
            type="text"
            placeholder="Nombre del Alumno"
            value={nuevoCertificado.alumno}
            onChange={(e) => setNuevoCertificado({ ...nuevoCertificado, alumno: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Programa"
            value={nuevoCertificado.programa}
            onChange={(e) => setNuevoCertificado({ ...nuevoCertificado, programa: e.target.value })}
            required
          />
          <input
            type="date"
            placeholder="Fecha"
            value={nuevoCertificado.fecha}
            onChange={(e) => setNuevoCertificado({ ...nuevoCertificado, fecha: e.target.value })}
            required
          />
          <button type="submit">Agregar Certificado</button>
        </form>
      </div>

      {/* Listado de Certificados */}
      <div className="listado-certificados">
        <h2>Listado de Certificados</h2>
        <table>
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Programa</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {certificados.map((certificado) => (
              <tr key={certificado.id}>
                <td>{certificado.alumno}</td>
                <td>{certificado.programa}</td>
                <td>{certificado.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificados;