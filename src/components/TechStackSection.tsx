import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cloud, Cpu, Terminal } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  items: string[];
  index: number;
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 bg-black/10 dark:bg-white/5 text-[10px] rounded-full 
              text-black/70 dark:text-[#888888]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const TechStackSection: React.FC = () => {
  const techStack = [
    {
      icon: <Code2 className="w-4 h-4" />,
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Angular", "VueJS","Tailwind CSS", "Redux", "Sass", "Bootstrap", "Material UI"]
    },
    {
      icon: <Database className="w-4 h-4" />,
      name: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "Java", "Supabase", "Firebase", "Express", "Django", "Flask"]
    },
    {
      icon: <Cloud className="w-4 h-4" />,
      name: "Cloud",
      items: ["AWS", "Docker", "Salesforce Marketing Cloud", "Vercel"]
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      name: "Tools",
      items: ["Git", "Cursor", "Postman", "Figma", "Jest", "Adobe Suite", "Notion", "Slack", "n8n"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6"
    >
      <h3 className="text-[#888888] text-[15px] mb-3 text-center">My Tech Stack</h3>
      <div className="grid grid-cols-2 gap-2">
        {techStack.map((tech, index) => (
          <TechItem key={tech.name} {...tech} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackSection; 