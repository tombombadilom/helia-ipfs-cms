import React, { lazy, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './lib/ThemeProvider.tsx';
import loading from './lib/loading';
import { ErrorBoundary } from './lib/ErrorBoundary';

import CanvasBackground from './lib/BackgroundCanvas/CanvasBackground.tsx';
// Lazy load the Routes component to split code and only load it when needed
const Routes = lazy(() => import('./Routes'));

// Define the App component with ErrorBoundary and Suspense for handling loading and errors
const App = () => {
  return (
    <ErrorBoundary>
      <CanvasBackground />
      <Suspense fallback={loading()}>
        <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
          <Routes />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
};

export default App;