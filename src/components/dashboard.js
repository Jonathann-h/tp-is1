import { useState } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
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
} from "lucide-react";
import "./dashboard.css";
import Inicio from "./Inicio"; // Importa el componente Inicio
import RegistroUsuarios from "./usuarios/RegistroUsuarios"; // Importa el componente RegistroUsuarios
import Roles from "./usuarios/RolesYPermisos"; // Importa el componente Roles
import CambioPassword from "./usuarios/CambiarContrasenia.js"; // Importa el componente CambioPassword
import Docentes from "./academico/Docentes.js"; // Importa el componente Docentes
import Alumnos from "./academico/Alumnos.js"; // Importa el componente Alumnos
import ProgramasAcademicos from "./academico/ProgramasAcademicos.js"; // Importa el componente ProgramasAcademicos
import ClasesYHorarios from "./academico/ClasesYHorarios.js"; // Importa el componente ClasesYHorarios
import Calificaciones from "./academico/Calificaciones.js"; // Importa el componente Calificaciones
import Certificados from "./academico/Certificados.js"; // Importa el componente Certificados
import ArancelesYCuotas from "./financiero/ArancelesYCuotas.js"; // Importa el componente ArancelesYCuotas
import Pagos from "./financiero/Pagos.js"; // Importa el componente Pagos
import Facturacion from "./financiero/Facturacion.js"; // Importa el componente Facturación
import AlertasVencimiento from "./financiero/AlertasVencimiento.js"; // Importa el componente AlertasVencimiento
import ReportesAcademicos from "./reportes/ReportesAcademicos.js"; // Importa el componente ReportesAcademicos
import ReportesFinancieros from "./reportes/ReportesFinancieros.js"; // Importa el componente ReportesFinancieros
import ConfigRolesYPermisos from "./configuracion/ConfigRolesYPermisos.js"; // Importa el componente ConfigRolesYPermisos
import ConfigNotificaciones from "./configuracion/ConfigNotificaciones.js"; // Importa el componente ConfigNotificaciones
import ExportacionDatos from "./configuracion/ExportacionDatos.js"; // Importa el componente ExportacionDatos
import SoporteRemoto from "./soporte/SoporteRemoto.js"; // Importa el componente SoporteRemoto
import ManualUsuario from "./soporte/ManualUsuario.js"; // Importa el componente ManualUsuario
import RegistrosAcceso from "./auditoria/RegistrosAcceso.js"; // Importa el componente RegistrosAcceso
import LogsSistema from "./auditoria/LogsSistema.js"; // Importa el componente LogsSistema

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
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li
            className={location.pathname === "/dashboard/inicio" ? "active" : ""}
            onClick={() => navigate("/dashboard/inicio")}
          >
            <Home className="menu-icon" /> Inicio
          </li>

          {/* Gestión de Usuarios */}
          <li onClick={() => setUsuariosOpen(!usuariosOpen)}>
            <Users className="menu-icon" /> Gestión de Usuarios {usuariosOpen ? "▲" : "▼"}
            {usuariosOpen && (
              <ul className="submenu">
                <li
                  className={location.pathname === "/dashboard/usuarios/registro" ? "active" : ""}
                  onClick={() => navigate("/dashboard/usuarios/registro")}>Registro de Usuarios</li>
                <li
                  className={location.pathname === "/dashboard/usuarios/roles" ? "active" : ""}
                  onClick={() => navigate("/dashboard/usuarios/roles")}>Roles y Permisos</li>
                <li
                  className={location.pathname === "/dashboard/usuarios/cambiar-password" ? "active" : ""}
                  onClick={() => navigate("/dashboard/usuarios/cambiar-password")}>Cambio de Contraseña</li>
              </ul>
            )}
          </li>

          {/* Gestión Académica */}
          <li onClick={() => setAcademicoOpen(!academicoOpen)}>
            <GraduationCap className="menu-icon" /> Gestión Académica {academicoOpen ? "▲" : "▼"}
            {academicoOpen && (
              <ul className="submenu">
                <li
                  className={location.pathname === "/dashboard/academico/docentes" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/docentes")}>Docentes</li>
                <li
                  className={location.pathname === "/dashboard/academico/alumnos" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/alumnos")}>Alumnos</li>
                <li
                  className={location.pathname === "/dashboard/academico/programas" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/programas")}>Programas Académicos</li>
                <li
                  className={location.pathname === "/dashboard/academico/clases" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/clases")}>Clases y Horarios</li>
                <li
                  className={location.pathname === "/dashboard/academico/calificaciones" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/calificaciones")}>Calificaciones</li>
                <li
                  className={location.pathname === "/dashboard/academico/certificados" ? "active" : ""}
                  onClick={() => navigate("/dashboard/academico/certificados")}>Certificados</li>
              </ul>
            )}
          </li>

          {/* Gestión Financiera */}
          <li onClick={() => setFinancieroOpen(!financieroOpen)}>
            <Briefcase className="menu-icon" /> Gestión Financiera {financieroOpen ? "▲" : "▼"}
            {financieroOpen && (
              <ul className="submenu">
                <li
                  className={location.pathname === "/dashboard/financiero/aranceles" ? "active" : ""}
                  onClick={() => navigate("/dashboard/financiero/aranceles")}>Aranceles y Cuotas</li>
                <li
                  className={location.pathname === "/dashboard/financiero/pagos" ? "active" : ""}
                  onClick={() => navigate("/dashboard/financiero/pagos")}>Pagos</li>
                <li
                  className={location.pathname === "/dashboard/financiero/facturacion" ? "active" : ""}
                  onClick={() => navigate("/dashboard/financiero/facturacion")}>Facturación</li>
                <li
                  className={location.pathname === "/dashboard/financiero/alertas" ? "active" : ""}
                  onClick={() => navigate("/dashboard/financiero/alertas")}>Alertas de Vencimiento</li>
              </ul>
            )}
          </li>

            {/* Reportes */}
            <li onClick={() => setReportesOpen(!reportesOpen)}>
              <BarChart className="menu-icon" /> Reportes {reportesOpen ? "▲" : "▼"}
              {reportesOpen && (
                <ul className="submenu">
                  <li
                    className={location.pathname === "/dashboard/reportes/academicos" ? "active" : ""}
                    onClick={() => navigate("/dashboard/reportes/academicos")}>Reportes Académicos</li>
                  <li
                    className={location.pathname === "/dashboard/reportes/financieros" ? "active" : ""}
                    onClick={() => navigate("/dashboard/reportes/financieros")}>Reportes Financieros</li>
                </ul>
              )}
            </li>

            {/* Configuración */}
            <li onClick={() => setConfiguracionOpen(!configuracionOpen)}>
              <Settings className="menu-icon" /> Configuración {configuracionOpen ? "▲" : "▼"}
              {configuracionOpen && (
                <ul className="submenu">
                  <li
                    className={location.pathname === "/dashboard/configuracion/roles" ? "active" : ""}
                    onClick={() => navigate("/dashboard/configuracion/roles")}>Roles y Permisos</li>
                  <li
                    className={location.pathname === "/dashboard/configuracion/notificaciones" ? "active" : ""}
                    onClick={() => navigate("/dashboard/configuracion/notificaciones")}>Notificaciones</li>
                  <li
                    className={location.pathname === "/dashboard/configuracion/exportacion" ? "active" : ""}
                    onClick={() => navigate("/dashboard/configuracion/exportacion")}>Exportación de Datos</li>
                </ul>
              )}
            </li>

            {/* Soporte */}
            <li onClick={() => setSoporteOpen(!soporteOpen)}>
              <LifeBuoy className="menu-icon" /> Soporte {soporteOpen ? "▲" : "▼"}
              {soporteOpen && (
                <ul className="submenu">
                  <li
                    className={location.pathname === "/dashboard/soporte/remoto" ? "active" : ""}
                    onClick={() => navigate("/dashboard/soporte/remoto")}>Soporte Remoto</li>
                  <li
                    className={location.pathname === "/dashboard/soporte/manual" ? "active" : ""}
                    onClick={() => navigate("/dashboard/soporte/manual")}>Manual de Usuario</li>
                </ul>
              )}
            </li>

            {/* Auditoría */}
            <li onClick={() => setAuditoriaOpen(!auditoriaOpen)}>
              <FileText className="menu-icon" /> Auditoría {auditoriaOpen ? "▲" : "▼"}
              {auditoriaOpen && (
                <ul className="submenu">
                  <li
                    className={location.pathname === "/dashboard/auditoria/accesos" ? "active" : ""}
                    onClick={() => navigate("/dashboard/auditoria/accesos")}>Registros de Acceso</li>
                  <li
                    className={location.pathname === "/dashboard/auditoria/logs" ? "active" : ""}
                    onClick={() => navigate("/dashboard/auditoria/logs")}>Logs del Sistema</li>
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
        <Routes>
          <Route path="/inicio" element={<Inicio />} /> {/* Ruta para Inicio */}
          <Route path="/usuarios/registro" element={<RegistroUsuarios />} /> {/* Ruta para Registro de Usuarios */}
          <Route path="/usuarios/roles" element={<Roles />} /> {/* Ruta para Roles y Permisos */}
          <Route path="/usuarios/cambiar-password" element={<CambioPassword />} /> {/* Ruta para Cambio de Contraseña */}
          <Route path="/academico/docentes" element={<Docentes />} /> {/* Ruta para Docentes */}
          <Route path="/academico/alumnos" element={<Alumnos />} /> {/* Ruta para Alumnos */}
          <Route path="/academico/programas" element={<ProgramasAcademicos />} /> {/* Ruta para Programas Académicos */}
          <Route path="/academico/clases" element={<ClasesYHorarios />} /> {/* Ruta para Clases y Horarios */}
          <Route path="/academico/calificaciones" element={<Calificaciones />} /> {/* Ruta para Calificaciones */}
          <Route path="/academico/certificados" element={<Certificados />} /> {/* Ruta para Certificados */}
          <Route path="/financiero/aranceles" element={<ArancelesYCuotas />} /> {/* Ruta para Aranceles y Cuotas */}
          <Route path="/financiero/pagos" element={<Pagos />} /> {/* Ruta para Pagos */}
          <Route path="/financiero/facturacion" element={<Facturacion />} /> {/* Ruta para Facturación */}
          <Route path="/financiero/alertas" element={<AlertasVencimiento />} /> {/* Ruta para Alertas de Vencimiento */}
          <Route path="/reportes/academicos" element={<ReportesAcademicos />} /> {/* Ruta para Reportes Académicos */}
          <Route path="/reportes/financieros" element={<ReportesFinancieros />} /> {/* Ruta para Reportes Financieros */}
          <Route path="/configuracion/roles" element={<ConfigRolesYPermisos />} /> {/* Ruta para Roles y Permisos */}
          <Route path="/configuracion/notificaciones" element={<ConfigNotificaciones />} /> {/* Ruta para Notificaciones */}
          <Route path="/configuracion/exportacion" element={<ExportacionDatos />} /> {/* Ruta para Exportación de Datos */}
          <Route path="/soporte/remoto" element={<SoporteRemoto />} /> {/* Ruta para Soporte Remoto */}
          <Route path="/soporte/manual" element={<ManualUsuario />} /> {/* Ruta para Manual de Usuario */}
          <Route path="/auditoria/accesos" element={<RegistrosAcceso />} /> {/* Ruta para Registros de Acceso */}
          <Route path="/auditoria/logs" element={<LogsSistema />} /> {/* Ruta para Logs del Sistema */}
        </Routes>
      </main>
    </div>
  );
}