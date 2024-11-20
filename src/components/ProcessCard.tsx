import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket, MessageSquare } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold mb-1">{title}</h3>
        <p className="text-[13px] text-[#888888] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProcessCard: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
      title: 'My Process',
      description: 'This is the description for My Process',
      index: 0,
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      title: 'Idea',
      description: 'This is the description for Idea',
      index: 1,
    },
    {
      icon: <Code className="w-5 h-5 text-green-500" />,
      title: 'Development',
      description: 'This is the description for Development',
      index: 2,
    },
    {
      icon: <Rocket className="w-5 h-5 text-red-500" />,
      title: 'Launch',
      description: 'This is the description for Launch',
      index: 3,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">My Process</h2>
      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ProcessCard; 