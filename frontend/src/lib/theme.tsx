import React,{ createContext, useContext, useEffect, useReducer } from "react";

type Theme = "dark" | "light" | "system";

type Props = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeState = {
  theme: Theme;
};

type ThemeAction = {
  type: "SET_THEME";
  payload: Theme;
};

const initialState: ThemeState = {
  theme: "system",
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

const ThemeContext = createContext<ContextValue>({
  theme: initialState.theme,
  setTheme: () => {},
});

const ThemeProvider = ({ children, defaultTheme = "system" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer<React.Reducer<ThemeState, ThemeAction>>(themeReducer, {
    theme: defaultTheme,
  });

  const applyTheme = (theme: Theme) => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      rootElement.classList.add(systemTheme);
    } else {
      rootElement.classList.add(theme);
    }
  };

  useEffect(() => {
    applyTheme(state.theme);
  }, [state.theme]);

  const setTheme = (theme: Theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const contextValue: ContextValue = {
    theme: state.theme,
    setTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};


const useTheme = (): ContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };