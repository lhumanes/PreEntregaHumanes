import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="data:image/png;base64,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" className="object-fit-none border rounded" alt="Logo" height="30" />
          Street Pilcha</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
