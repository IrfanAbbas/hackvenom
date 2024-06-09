import React from 'react';

const PageNotFound = () => {
  return (
    <div>
      <h1 className='not'> ops  Page Not Found</h1>
      <h1 className='number'>404</h1>
      <p className='not-exist'>The page you're looking for does not exist.</p>
      <a href="/" className='homebtn'>Go back to Home</a>
    </div>
  );
}

export default PageNotFound;
