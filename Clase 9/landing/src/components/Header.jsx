import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Menudencias Abel</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-4">
                            <a className="nav-link active text-white " aria-current="page" href="#about-me">Sobre nosotros</a>
                        </li>
                        <li className="nav-item ms-4">
                            <a className="nav-link text-white" href="#prices">Precios</a>
                        </li>
                    </ul>
                    <a type="button" className="btn btn-success" href="#footer">Contacto</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;