import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Heart Soothing</h1>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Inicio</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">Acerca de</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
