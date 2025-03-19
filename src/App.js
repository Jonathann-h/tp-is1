import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <Router basename="/tp-is1">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;