import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Tienda de Componentes</a>
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
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
                    <CartWidget /> {/* Aquí se añade el CartWidget */}
                </div>
        </div>
    </nav>
    );
};
export default NavBar;