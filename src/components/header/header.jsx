// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaBell } from 'react-icons/fa';
import { IoPersonCircleSharp } from "react-icons/io5";



const Header = ({ toggleSidebar, headerTitle }) => {
  return (
    <header className="bg-white shadow-md p-3  flex w-[100vw] md:w-full justify-between items-center">
      <div className="flex items-center">
        <button className="block lg:hidden" onClick={toggleSidebar}>
          <FaBars className="text-[#4069B0] mr-6" />
        </button>
        <h1 className="text-[#080140] text-xl sm:text-lg font-bold select-none">
          {headerTitle}
        </h1>
      </div>


      {/* <div>
        react-icons/fa
      </div> */}
      <div className="flex items-center space-x-3 border-l-2 px-2">
        <div>
        
        </div>
        <IoPersonCircleSharp className='text-3xl' />
        <div className="text-left cursor-pointer hidden md:block">
          <p className="text-gray-600 text-md sm:text-md font-medium">
            Ira Verite
          </p>
          <p className="text-xs text-gray-400">Itec Engineering LTD</p>
        </div>
      </div>
    </header>
  );
};

export default Header;