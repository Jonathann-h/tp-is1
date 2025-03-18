import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./dashboard.css";

export default function Dashboard() {
  const [usuariosOpen, setUsuariosOpen] = useState(false);
  const [academicoOpen, setAcademicoOpen] = useState(false);
  const [financieroOpen, setFinancieroOpen] = useState(false);
  const [reportesOpen, setReportesOpen] = useState(false);
  const [configuracionOpen, setConfiguracionOpen] = useState(false);
  const [soporteOpen, setSoporteOpen] = useState(false);
  const [auditoriaOpen, setAuditoriaOpen] = useState(false);
  const [perfilOpen, setPerfilOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          {/* Inicio */}
          <li>🏠 Inicio</li>

          {/* Gestión de Usuarios */}
          <li onClick={() => setUsuariosOpen(!usuariosOpen)}>
            👥 Gestión de Usuarios {usuariosOpen ? "▲" : "▼"}
            {usuariosOpen && (
              <ul className="submenu">
                <li>Registro de Usuarios</li>
                <li>Roles y Permisos</li>
                <li>Cambio de Contraseña</li>
              </ul>
            )}
          </li>

          {/* Gestión Académica */}
          <li onClick={() => setAcademicoOpen(!academicoOpen)}>
            📘 Gestión Académica {academicoOpen ? "▲" : "▼"}
            {academicoOpen && (
              <ul className="submenu">
                <li>Docentes</li>
                <li>Alumnos</li>
                <li>Programas Académicos</li>
                <li>Clases y Horarios</li>
                <li>Calificaciones</li>
                <li>Certificados</li>
              </ul>
            )}
          </li>

          {/* Gestión Financiera */}
          <li onClick={() => setFinancieroOpen(!financieroOpen)}>
            💰 Gestión Financiera {financieroOpen ? "▲" : "▼"}
            {financieroOpen && (
              <ul className="submenu">
                <li>Aranceles y Cuotas</li>
                <li>Pagos</li>
                <li>Facturación</li>
                <li>Alertas de Vencimiento</li>
              </ul>
            )}
          </li>

          {/* Reportes */}
          <li onClick={() => setReportesOpen(!reportesOpen)}>
            📊 Reportes {reportesOpen ? "▲" : "▼"}
            {reportesOpen && (
              <ul className="submenu">
                <li>Reportes Académicos</li>
                <li>Reportes Financieros</li>
              </ul>
            )}
          </li>

          {/* Configuración */}
          <li onClick={() => setConfiguracionOpen(!configuracionOpen)}>
            ⚙️ Configuración {configuracionOpen ? "▲" : "▼"}
            {configuracionOpen && (
              <ul className="submenu">
                <li>Roles y Permisos</li>
                <li>Notificaciones</li>
                <li>Exportación de Datos</li>
              </ul>
            )}
          </li>

          {/* Soporte */}
          <li onClick={() => setSoporteOpen(!soporteOpen)}>
            🛠️ Soporte {soporteOpen ? "▲" : "▼"}
            {soporteOpen && (
              <ul className="submenu">
                <li>Soporte Remoto</li>
                <li>Manual de Usuario</li>
              </ul>
            )}
          </li>

          {/* Auditoría */}
          <li onClick={() => setAuditoriaOpen(!auditoriaOpen)}>
            📜 Auditoría {auditoriaOpen ? "▲" : "▼"}
            {auditoriaOpen && (
              <ul className="submenu">
                <li>Registros de Acceso</li>
                <li>Logs del Sistema</li>
              </ul>
            )}
          </li>

          {/* Perfil de Usuario */}
          <li onClick={() => setPerfilOpen(!perfilOpen)}>
            👤 Perfil de Usuario {perfilOpen ? "▲" : "▼"}
            {perfilOpen && (
              <ul className="submenu">
                <li>Mi Perfil</li>
                
              </ul>
            )}
          </li>
        </ul>

        {/* Botón de Cerrar Sesión con icono */}
        <button className="logout-button" onClick={handleLogout}>
          <LogOut className="logout-icon" />
          Cerrar Sesión
        </button>
      </aside>

      <main className="content">
        <h1>Bienvenido al Panel</h1>
        <p>Selecciona una opción del menú.</p>
      </main>
    </div>
  );
}