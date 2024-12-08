import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Brand - Tienda de componentes */}
                <a className="navbar-brand" href="/">TIenda de Componentes</a>

                {/* Botón de colapso en pantallas pequeñas */}
                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Listado de categorías */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/category/electronics">GPU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/clothing">RAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/home">SSD</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;