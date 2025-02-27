
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://github.com/tholumuzikhuboni/construction/blob/4fdfeb909aec566b62e954169cda1ea9e4c778c2/public/Logo%20(3).png?raw=true" 
        alt="Write Mind Logo" 
        className="h-12 md:h-16 w-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/placeholder.svg';
        }}
      />
    </div>
  );
};

export default Logo;
