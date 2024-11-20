import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CompactMarketplaceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  index: number;
}

const CompactMarketplaceCard: React.FC<CompactMarketplaceCardProps> = ({ title, description, price, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold truncate">{title}</h3>
          </div>
          <p className="text-[#888888] text-xs mb-1.5 line-clamp-1">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">${price.toFixed(2)}</span>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="group relative inline-flex items-center gap-1.5 bg-black/10 dark:bg-white/10 
                hover:bg-black/20 dark:hover:bg-white/15 px-3 py-1 rounded-full text-xs 
                text-black dark:text-white transition-all duration-200"
            >
              <span>Purchase</span>
              <ArrowUpRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompactMarketplaceCard; 