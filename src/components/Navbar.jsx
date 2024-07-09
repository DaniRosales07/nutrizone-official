import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarTogglerDemo03"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand" to="/">NutriZone</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/productos/frutos-secos">Frutos Secos</Link></li>
                <li><Link className="dropdown-item" to="/productos/cereales-granolas">Cereales y Granolas</Link></li>
                <li><Link className="dropdown-item" to="/productos/mermeladas-mieles">Mermeladas y Mieles</Link></li>
                <li><Link className="dropdown-item" to="/productos/jugos-leches">Jugos y Leches</Link></li>
                <li><Link className="dropdown-item" to="/productos/snacks-chocolates">Snacks y Chocolates</Link></li>
                <li><Link className="dropdown-item" to="/productos/arroz-legumbres">Arroz y Legumbress</Link></li>
                <li><Link className="dropdown-item" to="/productos/oliva-salsas">Oliva y Salsas</Link></li>
                <li><Link className="dropdown-item" to="/productos/suplementos-vitaminicos">Suplementos Vitaminicos</Link></li>
              </ul>
            </li>
            
            <li className="nav-item carrito-mobile">
            <Link aria-current="page" className="nav-link active" to="/compras">Compras</Link>
            </li>
            <li className="nav-item carrito-escritorio">
            <Link to="/compras" className="nav-link active"> Compras <CartWidget/> </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to="/Contacto">Contacto</Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input aria-label="Search" className="form-control me-2" placeholder="Buscar" type="search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;