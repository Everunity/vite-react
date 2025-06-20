import React, { useState } from 'react';

export function Carousel({ children }) {
  return (
    <div className="relative overflow-hidden w-full">
      {children}
    </div>
  );
}

export function CarouselContent({ children }) {
  const [current, setCurrent] = useState(0);
  const items = React.Children.toArray(children);
  return (
    <div className="flex transition-transform duration-500 ease-in-out"
         style={{ transform: `translateX(-${current * 100}%)` }}>
      {items.map((child, i) => (
        <div key={i} className="min-w-full">{child}</div>
      ))}
    </div>
  );
}

export function CarouselItem({ children }) {
  return (
    <div className="p-4">{children}</div>
  );
}
