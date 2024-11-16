import React, { useState } from 'react';
import { Twitter, Linkedin, Store, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ExperienceCard from '../components/ExperienceCard';
import SocialLink from '../components/SocialLink';
import TimeDisplay from '../components/TimeDisplay';

function Home() {
  const [currentDot, setCurrentDot] = useState(0);
  const totalDots = 4;

  const handlePrevious = () => {
    setCurrentDot((prev) => (prev - 1 + totalDots) % totalDots);
  };

  const handleNext = () => {
    setCurrentDot((prev) => (prev + 1) % totalDots);
  };

  const renderCardContent = () => {
    switch(currentDot) {
      case 0:
        return (
          <>
            <ProfileCard 
              name="Marc Merih"
              verified={true}
              description="A creative industrial engineer crafting software solutions that tackle complex problems, with a modern minimalist design touch."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
            />

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-2.5"
            >
              <ExperienceCard 
                company="Sapplink"
                role="Founding Partner, CEO"
                icon={
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                }
              />
              <ExperienceCard 
                company="Dashh.io"
                role="Co-founder"
                icon={
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4ADE80] to-[#3B82F6] rounded-lg grid grid-cols-2 gap-0.5 p-1.5">
                    <div className="bg-black rounded-sm"></div>
                    <div className="bg-black rounded-sm"></div>
                    <div className="bg-black rounded-sm"></div>
                    <div className="bg-black rounded-sm"></div>
                  </div>
                }
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-7"
            >
              <h3 className="text-[#888888] text-[15px] mb-3 text-center">Connect with me:</h3>
              <div className="space-y-2.5">
                <SocialLink 
                  icon={<Twitter className="w-5 h-5" />}
                  platform="Twitter"
                />
                <SocialLink 
                  icon={<Linkedin className="w-5 h-5" />}
                  platform="LinkedIn"
                />
                <SocialLink 
                  icon={
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg">M</span>
                    </div>
                  }
                  platform="Medium"
                />
              </div>
            </motion.div>
          </>
        );
      default:
        return (
          <div className="h-[520px] flex items-center justify-center">
            <p className="text-[#888888] text-lg">Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden p-6">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-[580px] mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={handlePrevious}
          className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 p-3 text-[#888888] hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={handleNext}
          className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 p-3 text-[#888888] hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] card-gradient overflow-hidden mb-10"
        >
          <TimeDisplay />
          
          <div className="px-8 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderCardContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-2"
        >
          {[...Array(totalDots)].map((_, index) => (
            <motion.div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentDot ? 'bg-white w-3' : 'bg-[#333333]'
              }`}
              animate={{
                scale: index === currentDot ? 1 : 0.8,
              }}
              onClick={() => setCurrentDot(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-6"
        >
          <Link 
            to="/marketplace"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#202020] transition-colors px-6 py-2.5 rounded-full group cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span className="text-sm whitespace-nowrap">Visit Marketplace</span>
            <motion.span
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;