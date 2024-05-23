import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <h1>Bienvenido a Heart Soothing</h1>
        <p>
          En Heart Soothing, entendemos la importancia de la salud cardíaca.
          Nuestra IA puede ayudarte a prevenir posibles riesgos de infarto.
          ¡Comienza ya ingresando tus datos!
        </p>
        <Link to="/form">
          <button>Comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
