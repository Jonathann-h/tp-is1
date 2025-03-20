import React, { useState, useEffect } from "react";
import "./RolesYPermisos.css";

const RolesYPermisos = () => {
  // Estados para gestionar roles y permisos
  const [roles, setRoles] = useState([]); // Lista de roles
  const [permisos, setPermisos] = useState([]); // Lista de permisos disponibles
  const [rolSeleccionado, setRolSeleccionado] = useState(null); // Rol seleccionado para asignar permisos
  const [nuevoRol, setNuevoRol] = useState({ nombre: "", descripcion: "" }); // Datos para crear un nuevo rol

  // Cargar datos iniciales (simulación de una API)
  useEffect(() => {
    // Simular carga de roles y permisos desde una API
    const cargarDatosIniciales = async () => {
      const rolesIniciales = [
        { id: 1, nombre: "Administrador", descripcion: "Acceso completo al sistema" },
        { id: 2, nombre: "Docente", descripcion: "Acceso académico" },
      ];
      const permisosIniciales = [
        { id: 1, nombre: "Ver calificaciones", modulo: "Académico" },
        { id: 2, nombre: "Editar calificaciones", modulo: "Académico" },
        { id: 3, nombre: "Gestionar aranceles", modulo: "Administrativo" },
      ];
      setRoles(rolesIniciales);
      setPermisos(permisosIniciales);
    };
    cargarDatosIniciales();
  }, []);

  // Función para crear un nuevo rol
  const crearRol = () => {
    if (nuevoRol.nombre && nuevoRol.descripcion) {
      const nuevoId = roles.length + 1;
      const rol = { id: nuevoId, ...nuevoRol };
      setRoles([...roles, rol]);
      setNuevoRol({ nombre: "", descripcion: "" }); // Limpiar formulario
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  // Función para eliminar un rol
  const eliminarRol = (id) => {
    const confirmar = window.confirm("¿Está seguro de eliminar este rol?");
    if (confirmar) {
      setRoles(roles.filter((rol) => rol.id !== id));
    }
  };

  // Función para asignar permisos a un rol
  const asignarPermisos = (rolId, permisoId, asignado) => {
    const rolActualizado = roles.map((rol) => {
      if (rol.id === rolId) {
        const permisosActualizados = asignado
          ? [...rol.permisos, permisoId] // Agregar permiso
          : rol.permisos.filter((p) => p !== permisoId); // Eliminar permiso
        return { ...rol, permisos: permisosActualizados };
      }
      return rol;
    });
    setRoles(rolActualizado);
  };

  return (
    <div className="roles-y-permisos">
      <h1>Gestión de Roles y Permisos</h1>

      {/* Sección de Creación de Roles */}
      <div className="crear-rol">
        <h2>Crear Nuevo Rol</h2>
        <input
          type="text"
          placeholder="Nombre del Rol"
          value={nuevoRol.nombre}
          onChange={(e) => setNuevoRol({ ...nuevoRol, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción del Rol"
          value={nuevoRol.descripcion}
          onChange={(e) => setNuevoRol({ ...nuevoRol, descripcion: e.target.value })}
        />
        <button onClick={crearRol}>Crear Rol</button>
      </div>

      {/* Listado de Roles */}
      <div className="listado-roles">
        <h2>Listado de Roles</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol) => (
              <tr key={rol.id}>
                <td>{rol.id}</td>
                <td>{rol.nombre}</td>
                <td>{rol.descripcion}</td>
                <td>
                  <button onClick={() => setRolSeleccionado(rol)}>Asignar Permisos</button>
                  <button onClick={() => eliminarRol(rol.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Asignación de Permisos */}
      {rolSeleccionado && (
        <div className="asignar-permisos">
          <h2>Asignar Permisos a: {rolSeleccionado.nombre}</h2>
          {permisos.map((permiso) => (
            <div key={permiso.id}>
              <label>
                <input
                  type="checkbox"
                  checked={rolSeleccionado.permisos?.includes(permiso.id)}
                  onChange={(e) =>
                    asignarPermisos(rolSeleccionado.id, permiso.id, e.target.checked)
                  }
                />
                {permiso.nombre} ({permiso.modulo})
              </label>
            </div>
          ))}
          <button onClick={() => setRolSeleccionado(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default RolesYPermisos;