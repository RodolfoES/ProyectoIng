import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import Publicar from "./pages/Publicar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/publicar" element={<Publicar />} />
        {/* puedes añadir más rutas después como /mis-objetos o /home */}
      </Routes>
    </Router>
  );
}

export default App;
