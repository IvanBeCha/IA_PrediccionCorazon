import React from 'react';
import heartImage from '../../assets/images/corazon.png'; // Importa la imagen

const About = () => {
  return (
    <footer className="bg-black py-12 mt-auto"> {/* Agrega mt-auto para empujar la sección hacia abajo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="mb-4 lg:mb-0 lg:mr-8"> {/* Contenedor de la imagen */}
            <img className="w-full max-w-xs object-cover" src={heartImage} alt="Heart Soothing" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Acerca de Heart Soothing</h2>
            <p className="mt-3 text-lg text-gray-300">Esta aplicación utiliza inteligencia artificial para predecir el riesgo de infartos basándose en datos personales relevantes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default About;
