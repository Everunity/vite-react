import React from 'react';

export function Avatar({ className = '', children }) {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  );
}

export function AvatarFallback({ children }) {
  return (
    <div className="bg-gray-300 flex items-center justify-center text-white text-lg">
      {children}
    </div>
  );
}
