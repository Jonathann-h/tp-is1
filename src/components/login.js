import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle, GraduationCap, User } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import "./login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [userType, setUserType] = useState("Alumno"); // Estado para cambiar entre Alumno y Profesor

  const validatePassword = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{5,}$/;
    setShowMessage(!regex.test(password)); // Solo se activa al presionar "Ingresar"
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        {/* Pestañas de selección */}
        <div className="tabs">
          <button
            className={`tab ${userType === "Alumno" ? "active" : ""}`}
            onClick={() => setUserType("Alumno")}
          >
            Alumno
          </button>
          <button
            className={`tab ${userType === "Profesor" ? "active" : ""}`}
            onClick={() => setUserType("Profesor")}
          >
            Profesor
          </button>
        </div>

        {/* Título con icono dinámico */}
        <h2 className="login-title">
          {userType === "Alumno" ? (
            <GraduationCap className="login-icon" />
          ) : (
            <User className="login-icon" />
          )}
          Acceso {userType}
        </h2>

        <CardContent>
          <div className="input-group">
            <label className="label">Número de Cédula</label>
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ingrese su cédula"
              className="input"
            />
          </div>
          <div className="input-group">
            <label className="label">Contraseña</label>
            <Input
              type="password"
              placeholder="Ingrese su contraseña"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Se almacena pero no se evalúa aún
            />
          </div>
          <Button className="login-button" onClick={validatePassword}>
            Ingresar
          </Button>
        </CardContent>
      </Card>

      {/* Mensaje emergente flotante */}
      {showMessage && (
        <div className="floating-message">
          <AlertCircle className="icon" />
          La contraseña debe tener al menos 5 caracteres, un número y un carácter especial.
          <button className="close-button" onClick={() => setShowMessage(false)}>✖</button>
        </div>
      )}
    </div>
  );
}
