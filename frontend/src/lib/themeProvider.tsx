import React, { useState, useEffect } from 'react';
import { ThemeContext, ContextValue } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: 'light' | 'dark' | 'system';
  storageKey: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme,
  storageKey,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const contextValue: ContextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };