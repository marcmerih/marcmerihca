import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="p-4">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-center mb-8"
      >
        Get in Touch
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 backdrop-blur-sm rounded-lg pl-10 pr-4 py-3 text-sm 
              placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-white/10
              transition-all duration-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 backdrop-blur-sm rounded-lg pl-10 pr-4 py-3 text-sm 
              placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-white/10
              transition-all duration-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/5 backdrop-blur-sm rounded-lg pl-10 pr-4 py-3 text-sm 
              placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-white/10
              transition-all duration-200"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          type="submit"
          className="w-full bg-white/5 backdrop-blur-sm rounded-lg pl-4 py-3 text-sm 
            text-center text-white focus:outline-none focus:ring-2 focus:ring-white/10
            transition-all duration-200"
        >
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactCard; 