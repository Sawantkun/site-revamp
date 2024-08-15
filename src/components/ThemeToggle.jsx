import React, { useState, useEffect } from 'react';
import Sun from "../assets/sun-svgrepo-com.svg"
import Moon from "../assets/moon-svgrepo-com.svg"

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-gray-600 dark:border-gray-400 border  focus:outline-none bg-[#20152F] dark:bg-gradient-to-r from-[#6C78FE] to-[#5CA9FE]"
    >
      {theme === 'dark' ? (
        <img className='w-10 p-2 ' src={Moon} alt="moon svg" />
      ) : (
        <img className='w-10 p-2' src={Sun} alt="sun svg" />
      )}
    </button>
  );
};

export default ThemeToggle;
