import React, { useState } from "react";
import "./ClasesYHorarios.css"; // Importar el archivo CSS

const ClasesYHorarios = () => {
  // Estados para gestionar clases, horarios y docentes
  const [clases, setClases] = useState([
    { id: 1, nombre: "Matemáticas", docente: "Juan Pérez", horario: "Lunes 10:00 - 12:00" },
    { id: 2, nombre: "Física", docente: "María Gómez", horario: "Martes 14:00 - 16:00" },
  ]);
  const [nuevaClase, setNuevaClase] = useState({ nombre: "", docente: "", horario: "" });

  // Función para agregar una nueva clase
  const agregarClase = (e) => {
    e.preventDefault();
    if (nuevaClase.nombre && nuevaClase.docente && nuevaClase.horario) {
      const clase = { id: clases.length + 1, ...nuevaClase };
      setClases([...clases, clase]);
      setNuevaClase({ nombre: "", docente: "", horario: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="clases-y-horarios">
      <h1>Gestión de Clases y Horarios</h1>

      {/* Formulario para agregar una nueva clase */}
      <div className="agregar-clase">
        <h2>Agregar Nueva Clase</h2>
        <form onSubmit={agregarClase}>
          <input
            type="text"
            placeholder="Nombre de la Clase"
            value={nuevaClase.nombre}
            onChange={(e) => setNuevaClase({ ...nuevaClase, nombre: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Nombre del Docente"
            value={nuevaClase.docente}
            onChange={(e) => setNuevaClase({ ...nuevaClase, docente: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Horario (ej: Lunes 10:00 - 12:00)"
            value={nuevaClase.horario}
            onChange={(e) => setNuevaClase({ ...nuevaClase, horario: e.target.value })}
            required
          />
          <button type="submit">Agregar Clase</button>
        </form>
      </div>

      {/* Listado de Clases */}
      <div className="listado-clases">
        <h2>Listado de Clases</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Docente</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {clases.map((clase) => (
              <tr key={clase.id}>
                <td>{clase.nombre}</td>
                <td>{clase.docente}</td>
                <td>{clase.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClasesYHorarios;