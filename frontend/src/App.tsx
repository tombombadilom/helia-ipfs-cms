import React, {lazy, Suspense} from 'react';
const Routes = lazy(() => import('./Routes'));

import './App.css'
type State = {
	hasError: boolean;
	error: Error | null;
	children: React.ReactNode;
};
type Props = {
	children: React.ReactNode;
};

class ErrorBoundary extends React.Component <Props , State> {
	state: State = {
		hasError: false,
		error: null,
	}
  constructor(props: {}) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }

	render() {
		if (this.state.hasError) {
			return <p>Loading failed! Please reload.</p>;
		}
		return this.props.children;
	}
}

const loading = () => (
	<div
 	 	className="flex items-center justify-center h-screen"
  	role="status">
		<span className="loading loading-ring loading-lg text-info"></span>
	</div>

);
const App = () => (
	<ErrorBoundary>
		<Suspense fallback={loading()}>
			<Routes />
		</Suspense>
	</ErrorBoundary>
)

export default App
