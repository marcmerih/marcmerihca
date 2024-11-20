import React, { useState } from 'react';
import { X, Linkedin, Store, ChevronLeft, ChevronRight, Code, Paintbrush, Lightbulb, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ExperienceCard from '../components/ExperienceCard';
import SocialLink from '../components/SocialLink';
import TimeDisplay from '../components/TimeDisplay';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import AnimatedHeader from '../components/AnimatedHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CompactMarketplaceCard from '../components/CompactMarketplaceCard';
import ProcessCard from '../components/ProcessCard';
import ContactCard from '../components/ContactCard';
import TechStackSection from '../components/TechStackSection';
import CaseStudyCard from '../components/CaseStudyCard';

function Home() {
  const { theme } = useTheme();
  const [currentDot, setCurrentDot] = useState(0);
  const totalDots = 6;

  const handlePrevious = () => {
    setCurrentDot((prev) => (prev - 1 + totalDots) % totalDots);
  };

  const handleNext = () => {
    setCurrentDot((prev) => (prev + 1) % totalDots);
  };

  const renderCardContent = () => {
    if (currentDot === 0) {
      return (
        <div className="h-full flex flex-col justify-between">
          <div>
            <ProfileCard 
              name="Marc Merih"
              verified={true}
              description="A creative industrial engineer crafting software solutions that tackle complex problems, with a modern minimalist design touch."
              imageUrl="https://oorsyhpkchlailotwbom.supabase.co/storage/v1/object/sign/assets/marcmerih.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbWFyY21lcmloLmF2aWYiLCJpYXQiOjE3MzE3MTY4NDYsImV4cCI6MTk4NDAwNDg0Nn0.dADJpkM9c27v8gU_wnQiaeU3faSjQpceDOBtX7Dv_Z0&t=2024-11-16T00%3A27%3A26.401Z"
              isMinimized={false}
            />

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-2.5"
            >
              <ExperienceCard 
                company="Sapplink"
                role="Founding Partner, CEO"
                url='https://sapplink.ca'
                icon={<img src="https://oorsyhpkchlailotwbom.supabase.co/storage/v1/object/sign/assets/Asset%205.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvQXNzZXQgNS5wbmciLCJpYXQiOjE3MzE3NzMxNDcsImV4cCI6MTk4NDA2MTE0N30.DdwZBbor1mnJxjpJ-1JHcMPZDDYfp9cpGFL-e7_1-Gg&t=2024-11-16T16%3A05%3A47.504Z" className="w-10 h-10" alt="Sapplink logo" />}
              />
              <ExperienceCard 
                company="Dashh.io"
                role="Co-founder"
                url='https://dashh.io'
                icon={<img src="https://oorsyhpkchlailotwbom.supabase.co/storage/v1/object/sign/assets/dash_logo_black%20copy.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZGFzaF9sb2dvX2JsYWNrIGNvcHkucG5nIiwiaWF0IjoxNzMxNzcyODMwLCJleHAiOjE5ODQwNjA4MzB9._1rYeFwg0l1PMx5310EDOJJgrPAO_I0yGuv8QzuXUt8&t=2024-11-16T16%3A00%3A30.589Z" className="w-10 h-10" alt="Dashh.io logo" />}
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pb-16"
          >
            <h3 className="text-[#888888] text-[15px] mb-3 text-center">Connect with me:</h3>
            <div className="flex justify-center gap-3">
              <SocialLink 
                icon={<img className="w-5 h-5" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1024px-X_logo.jpg'/>}
                url='https://x.com/marcmerih'
                tooltip="Follow on X"
              />
              <SocialLink 
                icon={<img className="w-5 h-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6pm3Wz_EVjRNUGn-Lw-OgVL2877rKoRwSO20CNDL_Xma-1pcSzy4A9YH0uQbRjAC_F8&usqp=CAU'/>}
                url='https://www.linkedin.com/in/merihatasoy/'
                tooltip="Connect on LinkedIn"
              />
              <SocialLink 
                icon={<img className="w-5 h-5" src='https://cdn.icon-icons.com/icons2/3685/PNG/512/github_logo_icon_229278.png'/>}
                url='https://github.com/marcmerih'
                tooltip="Follow on GitHub"
              />
              <SocialLink 
                icon={<img className="w-5 h-5" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/768px-Medium_logo_Monogram.svg.png'/>}
                url='https://medium.com/@marc.atasoy'
                tooltip="Read on Medium"
              />
              <SocialLink 
                icon={<img className="w-5 h-5" src='https://cdn.kibrispdr.org/data/669/instagram-icon-black-and-white-7.webp'/>}
                url='https://www.instagram.com/marcmerih/'
                tooltip="Follow on Instagram"
              />
            </div>
          </motion.div>
        </div>
      );
    }

    if (currentDot === 1) {
      return (
        <div className="p-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-center mb-8"
          >
            My Work
          </motion.h2>
          <div className="space-y-2.5">
            <ProjectCard
              title="George's Chronos"
              description="A modern e-commerce solution with real-time inventory management"
              tech={["React", "Node.js", "MongoDB"]}
              image="https://images.unsplash.com/photo-1517245386807-bb43f82e79c6?auto=format&fit=crop&q=80&w=400"
              index={0}
            />
            <ProjectCard
              title="Healthcare Dashboard"
              description="Analytics dashboard for healthcare providers"
              tech={["Vue.js", "Python", "PostgreSQL"]}
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400"
              index={1}
            />
            <ProjectCard
              title="AI Content Generator"
              description="Content generation platform powered by machine learning"
              tech={["TypeScript", "TensorFlow", "AWS"]}
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
              index={2}
            />
          </div>
          <TechStackSection />
        </div>
      );
    }

    if (currentDot === 2) {
      return (
        <div className="p-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Case Studies
          </motion.h2>
          <div className="space-y-4">
            <CaseStudyCard
              title="E-commerce Platform Optimization"
              description="Improved conversion rates and user engagement through strategic UX improvements and performance optimization"
              metrics={[
                { label: "Conversion", value: "+45%" },
                { label: "Load Time", value: "-60%" },
                { label: "Revenue", value: "+75%" }
              ]}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
              index={0}
            />
            <CaseStudyCard
              title="Healthcare App Transformation"
              description="Redesigned and optimized a healthcare platform, focusing on accessibility and user experience"
              metrics={[
                { label: "User Base", value: "2.5M+" },
                { label: "Retention", value: "+85%" },
                { label: "Response", value: "-40%" }
              ]}
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500"
              index={1}
            />
            <CaseStudyCard
              title="SaaS Analytics Dashboard"
              description="Built a real-time analytics dashboard for SaaS businesses, improving decision-making capabilities"
              metrics={[
                { label: "Processing", value: "500TB" },
                { label: "Queries", value: "-70%" },
                { label: "Insights", value: "+120%" }
              ]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
              index={2}
            />
          </div>
        </div>
      );
    }

    if (currentDot === 3) {
      return (
        <div className="p-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-center mb-8"
          >
            My Services
          </motion.h2>
          <div className="space-y-4">
            <ServiceCard
              title="Web Development"
              description="Full-stack web applications built with modern technologies and best practices."
              icon={<Code className="w-6 h-6" />}
              price={150}
              index={0}
            />
            <ServiceCard
              title="UI/UX Design"
              description="User-centered design solutions that prioritize simplicity and functionality."
              icon={<Paintbrush className="w-6 h-6" />}
              price={120}
              index={1}
            />
            <ServiceCard
              title="Technical Consulting"
              description="Strategic guidance on technology choices and implementation approaches."
              icon={<Lightbulb className="w-6 h-6" />}
              price={200}
              index={2}
            />
            <ServiceCard
              title="System Architecture"
              description="Scalable and maintainable architecture design for complex applications."
              icon={<Box className="w-6 h-6" />}
              price={180}
              index={3}
            />
          </div>
        </div>
      );
    }

    if (currentDot === 5) {
      return (
        <div className="p-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Marketplace
          </motion.h2>
          <div className="space-y-2.5">
            <CompactMarketplaceCard
              title="Premium UI Kit"
              description="A comprehensive collection of minimalist UI components"
              price={49}
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
              index={0}
            />
            <CompactMarketplaceCard
              title="Design System"
              description="Complete design system for modern web applications"
              price={79}
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
              index={1}
            />
          </div>
        </div>
      );
    }

    if (currentDot === 3) {
      return <ProcessCard />;
    }

    if (currentDot === 4) {
      return <ContactCard />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-white relative overflow-hidden p-8">
      <div className="fixed inset-0 opacity-100" style={{ 
        backgroundImage: `url('https://oorsyhpkchlailotwbom.supabase.co/storage/v1/object/sign/assets/marcmerih-bg.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbWFyY21lcmloLWJnLmF2aWYiLCJpYXQiOjE3MzE3MTc3MTMsImV4cCI6MTk4NDAwNTcxM30.lzVFgQIrxK9oNUjnBzPukdC579fgwmfbx1bOs9OVBV4&t=2024-11-16T00%3A41%3A53.126Z')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: theme === 'light' 
          ? 'brightness(1.2) contrast(0.9) saturate(1.1)' 
          : 'brightness(0.8) contrast(1.1) saturate(0.9)',
        transition: 'filter 0.3s ease-in-out'
      }} />
      
      <div className="relative max-w-[780px] mx-auto">
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
          className="rounded-[24px] card-gradient overflow-hidden mb-10 h-[750px]"
        >
          <div className="p-3 h-full">
            <AnimatedHeader 
              isMinimized={currentDot !== 0}
              name="Marc Merih"
              imageUrl="https://oorsyhpkchlailotwbom.supabase.co/storage/v1/object/sign/assets/marcmerih.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbWFyY21lcmloLmF2aWYiLCJpYXQiOjE3MzE3MTY4NDYsImV4cCI6MTk4NDAwNDg0Nn0.dADJpkM9c27v8gU_wnQiaeU3faSjQpceDOBtX7Dv_Z0&t=2024-11-16T00%3A27%3A26.401Z"
            />
            {renderCardContent()}
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
            className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-[#202020] 
              transition-colors px-6 py-2.5 rounded-full group cursor-pointer shadow-sm dark:shadow-none"
          >
            <Store className="w-4 h-4 text-gray-900 dark:text-white" />
            <span className="text-sm whitespace-nowrap text-gray-900 dark:text-white">Visit Marketplace</span>
            <motion.span
              className="text-gray-900 dark:text-white"
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