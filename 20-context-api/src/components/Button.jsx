import React, { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const ChangeTheme = ()=>{
    if(theme === "light") setTheme('dark');
    else setTheme('light');
  }
  return (
    <div>
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  );
}

export default button;
