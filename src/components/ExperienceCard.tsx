import React, { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  role: string;
  icon: ReactNode;
  url: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, icon, url }) => {
  return (
    <div 
      className="bg-white dark:bg-[#1A1A1A] rounded-xl p-4 flex items-center gap-4 group 
        hover:bg-gray-50 dark:hover:bg-[#202020] transition-colors duration-200 h-[64px] cursor-pointer 
        shadow-sm dark:shadow-none" 
      onClick={() => window.open(url, '_blank')}
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-[600] text-[15px] truncate">{company}</h3>
        <p className="text-gray-500 dark:text-[#888888] text-[13px] mt-0.5 truncate">{role}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
    </div>
  );
};

export default ExperienceCard;