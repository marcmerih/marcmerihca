import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarketplaceCard from '../components/MarketplaceCard';

const products = [
  {
    id: 1,
    title: "Premium UI Kit",
    description: "A comprehensive collection of minimalist UI components",
    price: 49,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Design System",
    description: "Complete design system for modern web applications",
    price: 79,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
  },
  // Add more products as needed
];

function Marketplace() {
  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden p-6">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-[1200px] mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/"
            className="flex items-center gap-2 text-[#888888] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Profile</span>
          </Link>
          <h1 className="text-3xl font-bold">Marketplace</h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <MarketplaceCard 
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Marketplace;