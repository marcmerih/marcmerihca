import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg
        dark:bg-[#1A1A1A] dark:hover:bg-[#202020] 
        bg-white hover:bg-gray-100
        transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 dark:text-white text-gray-800" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 