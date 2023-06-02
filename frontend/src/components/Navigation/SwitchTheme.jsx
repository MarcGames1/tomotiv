'use client';
import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';
const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useState( 'tomotiv');

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === 'tomotiv' ? 'night' : 'tomotiv');
    localStorage.setItem('theme', theme);
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);



  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === 'night' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;
