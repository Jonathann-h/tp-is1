import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle, GraduationCap, User } from "lucide-react";
import "./login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [userType, setUserType] = useState("Alumno");
  const navigate = useNavigate(); // Hook para redirigir

  const validatePassword = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{5,}$/;
    if (!regex.test(password)) {
      setShowMessage(true);
    } else {
      navigate("/dashboard"); // Redirige a Dashboard si la contraseña es válida
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
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
            <Input type="text" inputMode="numeric" placeholder="Ingrese su cédula" className="input" />
          </div>
          <div className="input-group">
            <label className="label">Contraseña</label>
            <Input
              type="password"
              placeholder="Ingrese su contraseña"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="login-button" onClick={validatePassword}>
            Ingresar
          </Button>
        </CardContent>
      </Card>

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
