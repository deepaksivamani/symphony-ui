import * as React from 'react';

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`group inline-flex items-center px-10 py-6 border-b-2 font-medium text-base leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? 'border-primary text-black focus:outline-none focus:text-primary focus:border-primary'
        : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-primary focus:text-gray-600 focus:border-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);