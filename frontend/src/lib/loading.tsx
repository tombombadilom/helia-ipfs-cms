import React, { ReactNode } from 'react';

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
  <div className="text-center">
    <div role="status" className='loading'>
      <svg 
        version="1.2" 
        height="300" 
        width="600" 
        xmlns="http://www.w3.org/2000/svg"
        viewport="0 0 60 60" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path 
          id="pulsar" 
          stroke="rgba(0,155,155,1)" 
          fill="none" 
          strokeWidth="1"
          strokeLinejoin="round" 
          d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" 
        />
      </svg> 
    <span className="sr-only">Loading...</span>
  </div>
</div>
);
export { loading, ErrorBoundary };