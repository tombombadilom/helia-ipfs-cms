import React from 'react'


const NotFound = (): JSX.Element => {
  // Update the docstring to reflect the types
  /**
   * Render the 404 page component.
   * @param {NotFoundProps} props - The props for the component.
   * @returns {JSX.Element} The rendered component.
   */
  return (
    <div
      className="bg-transparent dark:bg-transparent"
    >
      <h2>404</h2>
      <div>Page not found</div>
    </div>
  );
};

export default NotFound;