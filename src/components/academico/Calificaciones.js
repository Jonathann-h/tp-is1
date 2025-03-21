import React, { useState } from "react";
import "./Calificaciones.css"; // Importar el archivo CSS

const Calificaciones = () => {
  // Estados para gestionar calificaciones
  const [calificaciones, setCalificaciones] = useState([
    { id: 1, alumno: "Juan Pérez", materia: "Matemáticas", nota: 85 },
    { id: 2, alumno: "María Gómez", materia: "Física", nota: 90 },
  ]);
  const [nuevaCalificacion, setNuevaCalificacion] = useState({ alumno: "", materia: "", nota: "" });

  // Función para agregar una nueva calificación
  const agregarCalificacion = (e) => {
    e.preventDefault();
    if (nuevaCalificacion.alumno && nuevaCalificacion.materia && nuevaCalificacion.nota) {
      const calificacion = { id: calificaciones.length + 1, ...nuevaCalificacion };
      setCalificaciones([...calificaciones, calificacion]);
      setNuevaCalificacion({ alumno: "", materia: "", nota: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="calificaciones">
      <h1>Gestión de Calificaciones</h1>

      {/* Formulario para agregar una nueva calificación */}
      <div className="agregar-calificacion">
        <h2>Agregar Nueva Calificación</h2>
        <form onSubmit={agregarCalificacion}>
          <input
            type="text"
            placeholder="Nombre del Alumno"
            value={nuevaCalificacion.alumno}
            onChange={(e) => setNuevaCalificacion({ ...nuevaCalificacion, alumno: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Materia"
            value={nuevaCalificacion.materia}
            onChange={(e) => setNuevaCalificacion({ ...nuevaCalificacion, materia: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Nota"
            value={nuevaCalificacion.nota}
            onChange={(e) => setNuevaCalificacion({ ...nuevaCalificacion, nota: e.target.value })}
            min="0"
            max="100"
            required
          />
          <button type="submit">Agregar Calificación</button>
        </form>
      </div>

      {/* Listado de Calificaciones */}
      <div className="listado-calificaciones">
        <h2>Listado de Calificaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Materia</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {calificaciones.map((calificacion) => (
              <tr key={calificacion.id}>
                <td>{calificacion.alumno}</td>
                <td>{calificacion.materia}</td>
                <td>{calificacion.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calificaciones;