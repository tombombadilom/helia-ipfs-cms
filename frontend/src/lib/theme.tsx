import React, { createContext, useEffect, useState } from "react";
export type Theme = "dark" | "light" | "system";

export type ContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
type Props = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const ThemeContext = createContext<ContextValue>({
  theme: "dark", // This is the default value for the context
  setTheme: () => {}, // No-op function for default
});

const ThemeProvider = ({ children, defaultTheme = "light", storageKey = "theme" }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const applyTheme = (theme: Theme) => {
      const rootElement = window.document.documentElement;
      rootElement.classList.remove("light", "dark");

      let effectiveTheme = theme;
      if (theme === "system") {
        effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }

      rootElement.classList.add(effectiveTheme);
      localStorage.setItem(storageKey, effectiveTheme);
    };

    applyTheme(theme);
  }, [theme, storageKey]);

  // Here we make sure to return a JSX element that provides the theme context to children components
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };