import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle, Lock, GraduationCap, User } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import "./login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [userType, setUserType] = useState("Alumno"); // Estado para cambiar entre Alumno y Profesor

  const validatePassword = (value) => {
    setPassword(value);
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{5,}$/;
    setShowMessage(!regex.test(value));
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
              onChange={(e) => validatePassword(e.target.value)}
            />
          </div>
          <Button className="login-button">Ingresar</Button>
        </CardContent>
      </Card>

      {/* Mensaje de error */}
      <Dialog open={showMessage} onOpenChange={setShowMessage}>
        <DialogContent>
          <DialogTitle className="sr-only">Contraseña no válida</DialogTitle>
          <div className="dialog-message">
            <AlertCircle className="icon" />
            La contraseña debe tener al menos 5 caracteres, un número y un carácter especial.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}