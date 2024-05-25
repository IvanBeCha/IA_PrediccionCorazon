import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToFormSection = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    scrollToFormSection();
    navigate('/home');
  };

  return (
    <div className='text-white mb-20'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#F56565] font-bold p-2'>
          CUIDA TU SALUD
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Nadie quiere sorpresas.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Asegúrate de tener
          </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['futuro', 'seguridad', 'salud']}
            typeSpeed={200}
            backSpeed={220}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>Monitorea el estado de tu corazón.</p>
        <button
          className='bg-[#81E6D9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'
          onClick={handleButtonClick}
        >
          Quiero un diagnóstico!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
