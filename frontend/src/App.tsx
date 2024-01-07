import React, {lazy, Suspense} from 'react';
import './App.css'
import { ThemeProvider } from './lib//theme'
import loading  from './lib/loading'
import { ErrorBoundary } from './lib/ErrorBoundary';

const Routes = lazy(() => import('./Routes'));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={loading()}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </Suspense>
  </ErrorBoundary>
);

export default App
