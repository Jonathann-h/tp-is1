import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle } from "./Icons/AlertCircle";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import "./login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const validatePassword = (value) => {
    setPassword(value);
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{5,}$/;
    setShowMessage(!regex.test(value));
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Acceso al Sistema</h2>
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
