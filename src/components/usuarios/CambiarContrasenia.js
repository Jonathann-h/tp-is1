import React, { useState } from "react";
import "./CambioContrasenia.css"; // Importar el archivo CSS

const CambioContraseña = () => {
  // Estados para el cambio de contraseña
  const [contraseñaActual, setContraseñaActual] = useState("");
  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  // Estados para la recuperación de contraseña
  const [correoRecuperacion, setCorreoRecuperacion] = useState("");
  const [mostrarRecuperacion, setMostrarRecuperacion] = useState(false);

  // Función para cambiar la contraseña
  const cambiarContraseña = (e) => {
    e.preventDefault();
    if (nuevaContraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    // Aquí iría la lógica para enviar la nueva contraseña al backend
    alert("Contraseña cambiada exitosamente.");
    setContraseñaActual("");
    setNuevaContraseña("");
    setConfirmarContraseña("");
  };

  // Función para recuperar la contraseña
  const recuperarContraseña = (e) => {
    e.preventDefault();
    if (!correoRecuperacion) {
      alert("Por favor, ingrese su correo electrónico.");
      return;
    }
    // Aquí iría la lógica para enviar el correo de recuperación
    alert(`Se ha enviado un correo a ${correoRecuperacion} para recuperar su contraseña.`);
    setCorreoRecuperacion("");
  };

  return (
    <div className="cambio-contraseña">
      <h1>Gestión de Contraseña</h1>

      {/* Sección de Cambio de Contraseña */}
      <div className="cambio-contraseña-form">
        <h2>Cambiar Contraseña</h2>
        <form onSubmit={cambiarContraseña}>
          <input
            type="password"
            placeholder="Contraseña Actual"
            value={contraseñaActual}
            onChange={(e) => setContraseñaActual(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={nuevaContraseña}
            onChange={(e) => setNuevaContraseña(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            required
          />
          <button type="submit">Cambiar Contraseña</button>
        </form>
      </div>

      {/* Sección de Recuperación de Contraseña */}
      <div className="recuperacion-contraseña">
        <h2>¿Olvidaste tu contraseña?</h2>
        <button onClick={() => setMostrarRecuperacion(!mostrarRecuperacion)}>
          {mostrarRecuperacion ? "Ocultar" : "Recuperar Contraseña"}
        </button>

        {mostrarRecuperacion && (
          <form onSubmit={recuperarContraseña}>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={correoRecuperacion}
              onChange={(e) => setCorreoRecuperacion(e.target.value)}
              required
            />
            <button type="submit">Enviar Correo de Recuperación</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CambioContraseña;