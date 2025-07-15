import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/home" style={{ marginRight: "1rem" }}>Inicio</Link>
        <Link to="/publicar" style={{ marginRight: "1rem" }}>Publicar</Link>
        <Link to="/mis-objetos" style={{ marginRight: "1rem" }}>Mis Objetos</Link>
      </div>
      <div>
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1rem" }}>Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
