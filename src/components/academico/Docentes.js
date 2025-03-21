import React, { useState } from "react";
import "./Docente.css"; // Importar el archivo CSS

const Docente = () => {
  // Estados para gestionar las clases y la asistencia
  const [clases, setClases] = useState([
    { id: 1, nombre: "Matemáticas", fecha: "21/03/2025", asistencia: [] },
    { id: 2, nombre: "Física", fecha: "221/03/2025", asistencia: [] },
  ]);
  const [nuevaClase, setNuevaClase] = useState({ nombre: "", fecha: "" });

  // Estados para gestionar el contenido del libro de cátedra
  const [contenidoLibro, setContenidoLibro] = useState("");

  // Función para agregar una nueva clase
  const agregarClase = (e) => {
    e.preventDefault();
    if (nuevaClase.nombre && nuevaClase.fecha) {
      const clase = { id: clases.length + 1, ...nuevaClase, asistencia: [] };
      setClases([...clases, clase]);
      setNuevaClase({ nombre: "", fecha: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  // Función para tomar asistencia
  const tomarAsistencia = (claseId, asistio) => {
    const claseActualizada = clases.map((clase) => {
      if (clase.id === claseId) {
        return { ...clase, asistencia: [...clase.asistencia, asistio] };
      }
      return clase;
    });
    setClases(claseActualizada);
  };

  // Función para guardar el contenido del libro de cátedra
  const guardarContenido = () => {
    if (contenidoLibro) {
      alert("Contenido guardado exitosamente.");
      setContenidoLibro("");
    } else {
      alert("Por favor, ingrese el contenido.");
    }
  };

  return (
    <div className="pantalla-docente">
      <h1>Panel del Docente</h1>

      {/* Sección de Gestión de Clases */}
      <div className="gestion-clases">
        <h2>Gestión de Clases</h2>
        <form onSubmit={agregarClase}>
          <input
            type="text"
            placeholder="Nombre de la Clase"
            value={nuevaClase.nombre}
            onChange={(e) => setNuevaClase({ ...nuevaClase, nombre: e.target.value })}
            required
          />
          <input
            type="date"
            value={nuevaClase.fecha}
            onChange={(e) => setNuevaClase({ ...nuevaClase, fecha: e.target.value })}
            required
          />
          <button type="submit">Agregar Clase</button>
        </form>

        {/* Listado de Clases */}
        <div className="listado-clases">
          {clases.map((clase) => (
            <div key={clase.id} className="clase">
              <h3>{clase.nombre}</h3>
              <p>Fecha: {clase.fecha}</p>
              <button onClick={() => tomarAsistencia(clase.id, true)}>Asistió</button>
              <button onClick={() => tomarAsistencia(clase.id, false)}>No Asistió</button>
              <p>Asistencia: {clase.asistencia.filter((a) => a).length} presentes</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Generación de Informes */}
      <div className="generar-informes">
        <h2>Generar Informes</h2>
        <button onClick={() => alert("Informe generado exitosamente.")}>
          Generar Informe de Asistencia
        </button>
        <button onClick={() => alert("Informe generado exitosamente.")}>
          Generar Informe de Calificaciones
        </button>
      </div>
    </div>
  );
};

export default Docente;