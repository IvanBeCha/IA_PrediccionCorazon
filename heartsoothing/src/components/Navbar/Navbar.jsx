import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ navigateToHome }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleHomeClick = () => {
    // Redirige al landing page
    navigate('/');
  };

  return (
    <div className='bg-[#566785] flex justify-between items-center h-24 w-full px-4 text-white rounded-b-lg'>
      <h1 onClick={handleHomeClick} className='text-3xl font-bold text-[#81E6D9] cursor-pointer'>HeartSoothing</h1>
      <ul className='hidden md:flex'>
        <li onClick={handleHomeClick} className='p-4 hover:text-[#F56565] transition-colors duration-300 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-[#F56565] transition-colors duration-300'>Objetivo</li>
        <li className='p-4 hover:text-[#F56565] transition-colors duration-300'>Quienes somos</li>
        <li className='p-4 hover:text-[#F56565] transition-colors duration-300'>Contacto</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1A202C] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 onClick={handleHomeClick} className='w-full text-3xl font-bold text-[#81E6D9] m-4 cursor-pointer'>HeartSoothing</h1>
        <li className='p-4 border-b border-gray-600 hover:text-[#F56565] transition-colors duration-300'>Pagina principal</li>
        <li className='p-4 border-b border-gray-600 hover:text-[#F56565] transition-colors duration-300'>Objetivo</li>
        <li className='p-4 border-b border-gray-600 hover:text-[#F56565] transition-colors duration-300'>Quienes somos</li>
        <li className='p-4 hover:text-[#F56565] transition-colors duration-300'>Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
