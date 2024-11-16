import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MarketplaceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  index: number;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ title, description, price, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-white text-black rounded-full p-2 cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
        <p className="text-[#888888] mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${price}</span>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Purchase
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketplaceCard;