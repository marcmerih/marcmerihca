import React, { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  icon: ReactNode;
  platform: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, platform }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4 flex items-center gap-4 group hover:bg-[#202020] transition-colors duration-200 h-[64px]">
      <div className="w-10 h-10 flex items-center justify-center bg-black rounded-lg flex-shrink-0">
        {icon}
      </div>
      <span className="flex-grow font-[600] text-[15px] truncate">{platform}</span>
      <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
    </div>
  );
};

export default SocialLink;