import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  image: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, metrics, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex gap-4">
        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold truncate">{title}</h3>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 rounded-full p-1.5 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
          <p className="text-[#888888] text-sm mb-3 line-clamp-2">{description}</p>
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{metric.value}</div>
                <div className="text-[#888888] text-xs">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard; 