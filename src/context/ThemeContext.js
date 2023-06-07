'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== undefined) {
      return localStorage.getItem('theme') || 'dark';
    }
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    if (typeof window !== undefined) {
      localStorage.setItem('theme', mode === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
