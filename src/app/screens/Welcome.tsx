import { useNavigate } from 'react-router';
import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1220] to-[#1A2233] flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo/Icon */}
        <motion.div
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl flex items-center justify-center shadow-lg shadow-[#22C55E]/20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        >
          <TrendingUp className="w-10 h-10 text-white" />
        </motion.div>

        {/* App Name */}
        <motion.h1
          className="text-4xl font-bold text-[#F8FAFC] mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          BetEdge Pro
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl text-[#22C55E] font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Data-Driven Betting Intelligence
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-[#94A3B8] text-base leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Professional sports analytics platform that helps you make smarter betting decisions 
          with AI-powered insights and probability modeling.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleGetStarted}
          className="w-full bg-[#F8FAFC] text-[#0B1220] py-4 rounded-lg font-semibold text-lg hover:bg-[#F8FAFC]/90 transition-colors shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>

        {/* Footer Note */}
        <motion.p
          className="text-[#94A3B8] text-xs mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          This platform is for analytical and educational purposes only. 
          Please gamble responsibly.
        </motion.p>
      </motion.div>
    </div>
  );
}