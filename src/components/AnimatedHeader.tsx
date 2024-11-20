import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import TimeDisplay from './TimeDisplay';

interface AnimatedHeaderProps {
  isMinimized: boolean;
  name: string;
  imageUrl: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ isMinimized, name, imageUrl }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <AnimatePresence mode="wait">
          {isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <motion.img
                src={imageUrl}
                alt={name}
                className="w-8 h-8 rounded-full object-cover"
                layoutId="profile-image"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <motion.span
                className="text-[15px] font-medium"
                layoutId="profile-name"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {name}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <TimeDisplay />
    </div>
  );
};

export default AnimatedHeader; 