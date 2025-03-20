import { useState } from "react"; 
import { useNavigate, useLocation } from "react-router-dom"; 
import {
  Home,
  Users,
  GraduationCap,
  Briefcase,
  BarChart,
  Settings,
  LifeBuoy,
  FileText,
  User,
  LogOut,
} from "lucide-react"; // Se importan los iconos de Lucide
import "./dashboard.css";

export default function Dashboard() { // Componente Dashboard
  const [usuariosOpen, setUsuariosOpen] = useState(false);
  const [academicoOpen, setAcademicoOpen] = useState(false);
  const [financieroOpen, setFinancieroOpen] = useState(false);
  const [reportesOpen, setReportesOpen] = useState(false);
  const [configuracionOpen, setConfiguracionOpen] = useState(false);
  const [soporteOpen, setSoporteOpen] = useState(false);
  const [auditoriaOpen, setAuditoriaOpen] = useState(false);
  const [perfilOpen, setPerfilOpen] = useState(false); 
  const navigate = useNavigate(); // Hook para redirigir
  const location = useLocation(); // Hook para obtener la ubicación actual

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul> {/* Lista de opciones del menú */}
          {/* Inicio */}
          <li
            className={location.pathname === "/inicio" ? "active" : ""}
            onClick={() => navigate("/inicio")} // Redirige a la ruta /inicio
          >
            <Home className="menu-icon" /> Inicio
          </li>

          {/* Gestión de Usuarios */}
          <li onClick={() => setUsuariosOpen(!usuariosOpen)}>
            <Users className="menu-icon" /> Gestión de Usuarios {usuariosOpen ? "▲" : "▼"}
            {usuariosOpen && (
              <ul className="submenu">
                <li className={location.pathname === "/usuarios/registro" ? "active" : ""} 
                    onClick={() => navigate("/usuarios/registro")}>Registro de Usuarios</li>
                <li className={location.pathname === "/usuarios/roles" ? "active" : ""} 
                    onClick={() => navigate("/usuarios/roles")}>Roles y Permisos</li>
                <li className={location.pathname === "/usuarios/cambiar-password" ? "active" : ""} 
                    onClick={() => navigate("/usuarios/cambiar-password")}>Cambio de Contraseña</li>
              </ul>
            )}
          </li>

          {/* Gestión Académica */}
          <li onClick={() => setAcademicoOpen(!academicoOpen)}>
            <GraduationCap className="menu-icon" /> Gestión Académica {academicoOpen ? "▲" : "▼"}
            {academicoOpen && (
              <ul className="submenu">
                <li className={location.pathname === "/academico/docentes" ? "active" : ""} 
                    onClick={() => navigate("/academico/docentes")}>Docentes</li>
                <li className={location.pathname === "/academico/alumnos" ? "active" : ""} 
                    onClick={() => navigate("/academico/alumnos")}>Alumnos</li>
              </ul>
            )}
          </li>

          {/* Gestión Financiera */}
          <li onClick={() => setFinancieroOpen(!financieroOpen)}>
            <Briefcase className="menu-icon" /> Gestión Financiera {financieroOpen ? "▲" : "▼"}
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
            <BarChart className="menu-icon" /> Reportes {reportesOpen ? "▲" : "▼"}
            {reportesOpen && (
              <ul className="submenu">
                <li>Reportes Académicos</li>
                <li>Reportes Financieros</li>
              </ul>
            )}
          </li>

          {/* Configuración */}
          <li onClick={() => setConfiguracionOpen(!configuracionOpen)}>
            <Settings className="menu-icon" /> Configuración {configuracionOpen ? "▲" : "▼"}
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
            <LifeBuoy className="menu-icon" /> Soporte {soporteOpen ? "▲" : "▼"}
            {soporteOpen && (
              <ul className="submenu">
                <li>Soporte Remoto</li>
                <li>Manual de Usuario</li>
              </ul>
            )}
          </li>

          {/* Auditoría */}
          <li onClick={() => setAuditoriaOpen(!auditoriaOpen)}>
            <FileText className="menu-icon" /> Auditoría {auditoriaOpen ? "▲" : "▼"}
            {auditoriaOpen && (
              <ul className="submenu">
                <li>Registros de Acceso</li>
                <li>Logs del Sistema</li>
              </ul>
            )}
          </li>

          {/* Perfil de Usuario */}
          <li onClick={() => setPerfilOpen(!perfilOpen)}>
            <User className="menu-icon" /> Perfil de Usuario {perfilOpen ? "▲" : "▼"}
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
