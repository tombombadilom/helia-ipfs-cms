import React, {lazy, Suspense} from 'react';
import './App.css'
import { ThemeProvider } from './lib//theme'
import { ErrorBoundary, loading } from './lib/loading'

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
