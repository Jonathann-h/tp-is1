import React, { useState } from "react";
import "./RegistroUsuarios.css";

export default function RegistroUsuarios() {
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", rol: "Administrador" },
    { id: 2, nombre: "María Gómez", email: "maria@example.com", rol: "Usuario" },
    { id: 3, nombre: "Carlos López", email: "carlos@example.com", rol: "Editor" },
  ]);

  // Estado para el formulario de nuevo usuario
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    email: "",
    rol: "",
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario({ ...nuevoUsuario, [name]: value });
  };

  // Función para agregar un nuevo usuario
  const agregarUsuario = (e) => {
    e.preventDefault(); // Evita que el formulario se recargue
    if (nuevoUsuario.nombre && nuevoUsuario.email && nuevoUsuario.rol) {
      const usuario = { ...nuevoUsuario, id: usuarios.length + 1 };
      setUsuarios([...usuarios, usuario]); // Agrega el nuevo usuario a la lista
      setNuevoUsuario({ nombre: "", email: "", rol: "" }); // Limpia el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="registro-usuarios">
      <h1>Registro de Usuarios</h1>

      {/* Formulario para agregar usuarios */}
      <form onSubmit={agregarUsuario} className="formulario-usuario">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nuevoUsuario.nombre}
            onChange={handleInputChange}
            placeholder="Ingrese el nombre"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={nuevoUsuario.email}
            onChange={handleInputChange}
            placeholder="Ingrese el email"
            required
          />
        </div>
        <div className="form-group">
          <label>Rol:</label>
          <select
            name="rol"
            value={nuevoUsuario.rol}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        <button type="submit" className="btn-agregar">
          Agregar Usuario
        </button>
      </form>

      {/* Grilla de usuarios */}
      <div className="grilla-usuarios">
        <h2>Usuarios Registrados</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}