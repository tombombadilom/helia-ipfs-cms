import React, { ReactNode } from 'react';
import MapLoading from '../components/loading/Map';
type State = {
  hasError: boolean;
  error: Error | null;
  children: ReactNode;
};

type Props = {
  children: ReactNode;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    children: null,
  };

  /**
   * Constructor function.
   *
   * @param {Props} props - The props object.
   */
  constructor(props: Props) {
    super(props);
  }

  /**
   * A static method that returns an object with the updated state when an error occurs.
   *
   * @param {Error} error - The error that occurred.
   * @return {Partial<State>} - An object with the updated state, indicating that an error has occurred and providing the error details.
   */
  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  /**
   * Renders the component.
   *
   * @return {JSX.Element} The rendered component.
   */
  render(): JSX.Element {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }
    return this.props.children as JSX.Element;
  }
}

/**
 * Renders a loading spinner.
 *
 * @return {JSX.Element} The loading spinner component.
 */
const loading = (): JSX.Element => (
  <div className="w-screen h-screen text-center">
    <div role="status" className='loading'>
      <MapLoading />
    <span className="sr-only">Loading...</span>
  </div>
</div>
);
export { loading, ErrorBoundary };