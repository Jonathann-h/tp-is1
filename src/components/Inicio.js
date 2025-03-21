import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "./Inicio.css";

// Registrar los componentes del gráfico
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Inicio = () => {
  // Datos simulados para el dashboard
  const metricas = {
    alumnosActivos: 120,
    docentes: 15,
    pagosPendientes: 5,
    alertasRecientes: 2,
  };

  const notificaciones = [
    { id: 1, mensaje: "Cuota de Marzo vence en 3 días.", tipo: "alerta" },
    { id: 2, mensaje: "Nueva solicitud de soporte recibida.", tipo: "notificacion" },
  ];

  // Configuración del gráfico
  const data = {
    labels: ["Alumnos Activos", "Docentes", "Pagos Pendientes", "Alertas Recientes"],
    datasets: [
      {
        label: "Cantidad",
        data: [
          metricas.alumnosActivos,
          metricas.docentes,
          metricas.pagosPendientes,
          metricas.alertasRecientes,
        ],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="inicio">
      <h1>Bienvenido al Sistema de Gestión Académica</h1>

      {/* Resumen de Métricas */}
      <div className="resumen-metricas">
        {Object.entries(metricas).map(([key, value]) => (
          <div className="metrica" key={key}>
            <h2>{key.replace(/([A-Z])/g, " $1")}</h2>
            <p>{value}</p>
          </div>
        ))}
      </div>

      {/* Gráfico de barras */}
      <div className="grafico-container">
        <h2>Resumen de Datos</h2>
        <Bar data={data} options={options} />
      </div>

      {/* Notificaciones y Alertas */}
      <div className="notificaciones">
        <h2>Notificaciones Recientes</h2>
        <ul>
          {notificaciones.map((notificacion) => (
            <li key={notificacion.id} className={notificacion.tipo}>
              {notificacion.mensaje}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inicio;
