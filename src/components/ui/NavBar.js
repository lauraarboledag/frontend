import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">IUD Tecnología y Videojuegos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                OPCIONES
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link to="/equipo" className="dropdown-item" href="#">Equipos</Link></li>
                <li><Link to="/usuario" className="dropdown-item" href="#">Usuario</Link></li>
                <li><Link to="/marca" className="dropdown-item" href="#">Marcas</Link></li>
                <li><Link to="/inventario" className="dropdown-item" href="#">Inventario</Link></li>
                <li><Link to="/estado" className="dropdown-item" href="#">Estado Equipo</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
