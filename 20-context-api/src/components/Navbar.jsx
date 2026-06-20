import { ThemeDataContext } from '../context/ThemeContext';
import Navbar2 from './Navbar2';
import React, { useState, useContext } from 'react';



const Navbar = () => {

  const [theme] = useContext(ThemeDataContext);
    
  return (
    <div className={theme}>
      <h1>Mohammed Aqueel</h1>
      <Navbar2 />
    </div>
  );
}

export default Navbar;
