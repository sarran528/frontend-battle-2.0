import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 transition-opacity duration-300">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 dark:border-blue-900 animate-spin">
          {/* Inner circle (loading indicator) */}
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-t-4 border-blue-600 animate-spin" />
        </div>
        
        {/* Loading text */}
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader; 