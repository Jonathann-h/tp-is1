import React, { useState } from "react";
import "./ConfigRolesYPermisos.css"; // Importar el archivo CSS

const ConfigRolesYPermisos = () => {
  // Estados para gestionar roles y permisos
  const [roles, setRoles] = useState([
    { id: 1, nombre: "Administrador", permisos: ["Gestionar usuarios", "Editar contenido"] },
    { id: 2, nombre: "Docente", permisos: ["Editar contenido"] },
  ]);
  const [nuevoRol, setNuevoRol] = useState({ nombre: "", permisos: [] });

  // Función para agregar un nuevo rol
  const agregarRol = (e) => {
    e.preventDefault();
    if (nuevoRol.nombre) {
      const rol = { id: roles.length + 1, ...nuevoRol };
      setRoles([...roles, rol]);
      setNuevoRol({ nombre: "", permisos: [] }); // Limpiar formulario
    } else {
      alert("Por favor, complete el nombre del rol.");
    }
  };

  return (
    <div className="config-roles-permisos">
      <h1>Configuración de Roles y Permisos</h1>

      {/* Formulario para agregar un nuevo rol */}
      <div className="agregar-rol">
        <h2>Agregar Nuevo Rol</h2>
        <form onSubmit={agregarRol}>
          <input
            type="text"
            placeholder="Nombre del Rol"
            value={nuevoRol.nombre}
            onChange={(e) => setNuevoRol({ ...nuevoRol, nombre: e.target.value })}
            required
          />
          <button type="submit">Agregar Rol</button>
        </form>
      </div>

      {/* Listado de Roles y Permisos */}
      <div className="listado-roles">
        <h2>Listado de Roles</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Permisos</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol) => (
              <tr key={rol.id}>
                <td>{rol.nombre}</td>
                <td>{rol.permisos.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConfigRolesYPermisos;