import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, index }) => {
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
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 rounded-full p-1.5 cursor-pointer"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.div>
          </div>
          <p className="text-[#888888] text-xs mb-1.5 line-clamp-1">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tech.map((item) => (
              <span 
                key={item}
                className="px-2 py-0.5 bg-white/5 text-[10px] rounded-full text-[#888888]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;