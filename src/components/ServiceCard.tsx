import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, price }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold truncate">{title}</h3>
          </div>
          <p className="text-[#888888] text-xs mb-1.5 line-clamp-1">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">${price}/hr</span>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="group relative inline-flex items-center gap-1.5 bg-black/10 dark:bg-white/10 
                hover:bg-black/20 dark:hover:bg-white/15 px-3 py-1 rounded-full text-xs 
                text-black dark:text-white transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 