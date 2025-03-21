import React, { useState } from "react";
import "./ProgramasAcademicos.css"; // Importar el archivo CSS

const ProgramasAcademicos = () => {
  // Estados para gestionar programas, módulos y materias
  const [programas, setProgramas] = useState([
    { id: 1, nombre: "Capacitación en Desarrollo Web", tipo: "Capacitación" },
    { id: 2, nombre: "Especialización en Data Science", tipo: "Especialización" },
  ]);
  const [nuevoPrograma, setNuevoPrograma] = useState({ nombre: "", tipo: "" });

  const [modulos, setModulos] = useState([
    { id: 1, programaId: 1, nombre: "Módulo 1: Introducción a HTML y CSS" },
    { id: 2, programaId: 1, nombre: "Módulo 2: JavaScript Avanzado" },
  ]);
  const [nuevoModulo, setNuevoModulo] = useState({ programaId: "", nombre: "" });

  const [materias, setMaterias] = useState([
    { id: 1, moduloId: 1, nombre: "HTML Básico" },
    { id: 2, moduloId: 1, nombre: "CSS Grid y Flexbox" },
  ]);
  const [nuevaMateria, setNuevaMateria] = useState({ moduloId: "", nombre: "" });

  // Función para agregar un nuevo programa
  const agregarPrograma = (e) => {
    e.preventDefault();
    if (nuevoPrograma.nombre && nuevoPrograma.tipo) {
      const programa = { id: programas.length + 1, ...nuevoPrograma };
      setProgramas([...programas, programa]);
      setNuevoPrograma({ nombre: "", tipo: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  // Función para agregar un nuevo módulo
  const agregarModulo = (e) => {
    e.preventDefault();
    if (nuevoModulo.programaId && nuevoModulo.nombre) {
      const modulo = { id: modulos.length + 1, ...nuevoModulo };
      setModulos([...modulos, modulo]);
      setNuevoModulo({ programaId: "", nombre: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  // Función para agregar una nueva materia
  const agregarMateria = (e) => {
    e.preventDefault();
    if (nuevaMateria.moduloId && nuevaMateria.nombre) {
      const materia = { id: materias.length + 1, ...nuevaMateria };
      setMaterias([...materias, materia]);
      setNuevaMateria({ moduloId: "", nombre: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="programas-academicos">
      <h1>Gestión de Programas Académicos</h1>

      {/* Sección de Programas */}
      <div className="gestion-programas">
        <h2>Programas Académicos</h2>
        <form onSubmit={agregarPrograma}>
          <input
            type="text"
            placeholder="Nombre del Programa"
            value={nuevoPrograma.nombre}
            onChange={(e) => setNuevoPrograma({ ...nuevoPrograma, nombre: e.target.value })}
            required
          />
          <select
            value={nuevoPrograma.tipo}
            onChange={(e) => setNuevoPrograma({ ...nuevoPrograma, tipo: e.target.value })}
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="Capacitación">Capacitación</option>
            <option value="Especialización">Especialización</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
          </select>
          <button type="submit">Agregar Programa</button>
        </form>

        {/* Listado de Programas */}
        <div className="listado-programas">
          {programas.map((programa) => (
            <div key={programa.id} className="programa">
              <h3>{programa.nombre}</h3>
              <p>Tipo: {programa.tipo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Módulos */}
      <div className="gestion-modulos">
        <h2>Módulos</h2>
        <form onSubmit={agregarModulo}>
          <select
            value={nuevoModulo.programaId}
            onChange={(e) => setNuevoModulo({ ...nuevoModulo, programaId: e.target.value })}
            required
          >
            <option value="">Seleccione un programa</option>
            {programas.map((programa) => (
              <option key={programa.id} value={programa.id}>
                {programa.nombre}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nombre del Módulo"
            value={nuevoModulo.nombre}
            onChange={(e) => setNuevoModulo({ ...nuevoModulo, nombre: e.target.value })}
            required
          />
          <button type="submit">Agregar Módulo</button>
        </form>

        {/* Listado de Módulos */}
        <div className="listado-modulos">
          {modulos.map((modulo) => (
            <div key={modulo.id} className="modulo">
              <h3>{modulo.nombre}</h3>
              <p>Programa: {programas.find((p) => p.id === modulo.programaId)?.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Materias */}
      <div className="gestion-materias">
        <h2>Materias</h2>
        <form onSubmit={agregarMateria}>
          <select
            value={nuevaMateria.moduloId}
            onChange={(e) => setNuevaMateria({ ...nuevaMateria, moduloId: e.target.value })}
            required
          >
            <option value="">Seleccione un módulo</option>
            {modulos.map((modulo) => (
              <option key={modulo.id} value={modulo.id}>
                {modulo.nombre}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nombre de la Materia"
            value={nuevaMateria.nombre}
            onChange={(e) => setNuevaMateria({ ...nuevaMateria, nombre: e.target.value })}
            required
          />
          <button type="submit">Agregar Materia</button>
        </form>

        {/* Listado de Materias */}
        <div className="listado-materias">
          {materias.map((materia) => (
            <div key={materia.id} className="materia">
              <h3>{materia.nombre}</h3>
              <p>Módulo: {modulos.find((m) => m.id === materia.moduloId)?.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramasAcademicos;