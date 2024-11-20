import React, { ReactNode } from 'react';

interface SocialLinkProps {
  icon: ReactNode;
  url: string;
  tooltip: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, url, tooltip }) => {
  return (
    <div className="relative group">
      <div 
        className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1A1A1A] 
          rounded-lg hover:bg-gray-50 dark:hover:bg-[#202020] transition-colors duration-200 
          cursor-pointer shadow-sm dark:shadow-none" 
        onClick={() => window.open(url, '_blank')}
      >
        {icon}
      </div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white dark:bg-[#1A1A1A] 
        rounded-lg text-sm shadow-lg dark:shadow-none pointer-events-none opacity-0 
        group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        <div className="text-gray-800 dark:text-white text-[13px]">{tooltip}</div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-[#1A1A1A] rotate-45" />
      </div>
    </div>
  );
};

export default SocialLink;