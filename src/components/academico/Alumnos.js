import React, { useState } from "react";
import "./Alumnos.css"; // Importar el archivo CSS

const Alumnos = () => {
  // Datos simulados del alumno
  const [alumno] = useState({
    nombre: "Juan Pérez",
    estado: "Habilitado",
    notas: [
      { materia: "Matemáticas", nota: 85 },
      { materia: "Física", nota: 90 },
      { materia: "Química", nota: 78 },
    ],
    asistencia: [
      { materia: "Matemáticas", presente: true, fecha: "21/03/2025" },
      { materia: "Física", presente: false, fecha: "21/03/20251" },
    ],
    estadoCuenta: {
      saldo: 150000,
      cuotasPagadas: 3,
      cuotasPendientes: 2,
    },
  });

  return (
    <div className="pantalla-alumno">
      <h1>Panel del Alumno</h1>

      {/* Información del Alumno */}
      <div className="informacion-alumno">
        <h2>Información del Alumno</h2>
        <p>
          <strong>Nombre:</strong> {alumno.nombre}
        </p>
        <p>
          <strong>Estado:</strong> {alumno.estado}
        </p>
      </div>

      {/* Notas del Alumno */}
      <div className="notas-alumno">
        <h2>Notas</h2>
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {alumno.notas.map((nota, index) => (
              <tr key={index}>
                <td>{nota.materia}</td>
                <td>{nota.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Asistencia del Alumno */}
      <div className="asistencia-alumno">
        <h2>Asistencia</h2>
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Fecha</th>
              <th>Asistió</th>
            </tr>
          </thead>
          <tbody>
            {alumno.asistencia.map((asistencia, index) => (
              <tr key={index}>
                <td>{asistencia.materia}</td>
                <td>{asistencia.fecha}</td>
                <td>{asistencia.presente ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Estado de Cuenta del Alumno */}
      <div className="estado-cuenta">
        <h2>Estado de Cuenta</h2>
        <p>
          <strong>Saldo:</strong> Gs. {alumno.estadoCuenta.saldo.toLocaleString()}
        </p>
        <p>
          <strong>Cuotas Pagadas:</strong> {alumno.estadoCuenta.cuotasPagadas}
        </p>
        <p>
          <strong>Cuotas Pendientes:</strong> {alumno.estadoCuenta.cuotasPendientes}
        </p>
      </div>
    </div>
  );
};

export default Alumnos;