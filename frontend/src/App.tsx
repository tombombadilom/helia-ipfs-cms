import React, { lazy, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './lib/themeProvider';
import loading from './lib/loading';
import { ErrorBoundary } from './lib/ErrorBoundary';
// import CanvasBackground from './lib/CanvasBackground';
import BackgroundCanvas from './lib/BackgroundCanvas';

// Lazy load the Routes component to split code and only load it when needed
const Routes = lazy(() => import('./Routes'));

// Define the App component with ErrorBoundary and Suspense for handling loading and errors
const App = () => {
  const themeStorageKey = 'vite-ui-theme';
  type ThemeOption = 'light' | 'dark' | 'system';
  const storedTheme: ThemeOption | null = localStorage.getItem(themeStorageKey) as ThemeOption | null;
  const defaultTheme: ThemeOption = storedTheme && ['light', 'dark', 'system'].includes(storedTheme) ? storedTheme : 'dark';
  return (
    <ErrorBoundary>
      <Suspense fallback={loading()}>
        <ThemeProvider defaultTheme={defaultTheme} storageKey={themeStorageKey}>
          <BackgroundCanvas />
          {/* <CanvasBackground /> */}
          <Routes />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
};

export default App;