import { useContext } from "react";
import { ThemeContext, ContextValue } from "./theme"; // Make sure the import path is correct

/**
 * Returns the context value of the current theme.
 *
 * @return {ContextValue} The context value of the current theme.
 */
const useTheme = (): ContextValue => {
  const context = useContext<ContextValue>(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { useTheme };