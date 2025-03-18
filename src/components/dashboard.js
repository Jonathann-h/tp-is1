import { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [academicoOpen, setAcademicoOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li onClick={() => setAcademicoOpen(!academicoOpen)}>
            📘 Académico {academicoOpen ? "▲" : "▼"}
            {academicoOpen && (
              <ul className="submenu">
                <li>Materias</li>
                <li>Notas</li>
                <li>Horarios</li>
              </ul>
            )}
          </li>
          <li onClick={() => setAdminOpen(!adminOpen)}>
            🏛️ Administrativo {adminOpen ? "▲" : "▼"}
            {adminOpen && (
              <ul className="submenu">
                <li>Pagos</li>
                <li>Inscripciones</li>
              </ul>
            )}
          </li>
        </ul>
      </aside>
      <main className="content">
        <h1>Bienvenido al Panel</h1>
        <p>Selecciona una opción del menú.</p>
      </main>
    </div>
  );
}
