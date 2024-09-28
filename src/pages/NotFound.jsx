import React from 'react';

const NotFound = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2">Oops! The page you're looking for does not exist.</p>
      <a href="/" className="text-blue-600 hover:underline mt-4 block">Go back to Home</a>
    </div>
  );
};

export default NotFound;