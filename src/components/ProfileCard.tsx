import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  verified: boolean;
  description: string;
  imageUrl: string;
  isMinimized: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  verified, 
  description, 
  imageUrl,
  isMinimized 
}) => {
  return (
    <AnimatePresence mode="wait">
      {!isMinimized && (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-[140px] h-[140px] mx-auto mb-5 rounded-full shadow-lg"
            layoutId="profile-image-container"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full rounded-full object-cover"
              layoutId="profile-image"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.h2 
              className="text-2xl font-bold"
              layoutId="profile-name"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {name}
            </motion.h2>
            {verified && (
              <BadgeCheck className="w-6 h-6 text-blue-500" />
            )}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[#888888] text-[15px] leading-relaxed max-w-[400px] mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileCard;