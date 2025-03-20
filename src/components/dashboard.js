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
import CambioPassword from "./usuarios/CambioPassword"; // Importa el componente CambioPassword
import Docentes from "./academico/Docentes.js"; // Importa el componente Docentes
import Alumnos from "./academico/Alumnos.js"; // Importa el componente Alumnos
import ProgramasAcademicos from "./academico/ProgramasAcademicos.js"; // Importa el componente ProgramasAcademicos
import ClasesYHorarios from "./academico/ClasesYHorarios.js"; // Importa el componente ClasesYHorarios
import Calificaciones from "./academico/Calificaciones.js"; // Importa el componente Calificaciones
import Certificados from "./academico/Certificados.js"; // Importa el componente Certificados

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
        </Routes>
      </main>
    </div>
  );
}