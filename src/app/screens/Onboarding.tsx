import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TrendingUp, Brain, Wallet, BarChart3, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const onboardingSteps = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced algorithms analyze thousands of data points to calculate true match probabilities and identify value opportunities.',
    color: '#22C55E',
  },
  {
    icon: TrendingUp,
    title: 'Find Value Picks',
    description: 'Discover betting opportunities with positive expected value. We compare fair odds against bookmaker prices to spot the best bets.',
    color: '#3B82F6',
  },
  {
    icon: Wallet,
    title: 'Smart Bankroll Management',
    description: 'Build a sustainable betting strategy with personalized stake recommendations based on your risk profile and bankroll size.',
    color: '#F59E0B',
  },
  {
    icon: BarChart3,
    title: 'Track Performance',
    description: 'Monitor win rates, ROI, and league-specific performance. Transparency and data-driven decisions are our foundation.',
    color: '#8B5CF6',
  },
];

export function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  const completeOnboarding = () => {
    localStorage.setItem('onboarding_completed', 'true');
    navigate('/');
  };

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col overflow-hidden">
      {/* Skip Button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={handleSkip}
          className="text-[#94A3B8] text-sm font-medium hover:text-[#F8FAFC] transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="max-w-md w-full text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${step.color}20` }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Icon className="w-12 h-12" style={{ color: step.color }} />
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">{step.title}</h2>

              {/* Description */}
              <p className="text-[#94A3B8] text-base leading-relaxed mb-12">
                {step.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${
                  index === currentStep ? 'bg-[#F8FAFC]' : 'bg-[#1F2937]'
                }`}
                animate={{
                  width: index === currentStep ? 32 : 8,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="w-full bg-[#F8FAFC] text-[#0B1220] py-4 rounded-lg font-semibold hover:bg-[#F8FAFC]/90 transition-colors flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            {currentStep < onboardingSteps.length - 1 ? (
              <>
                Next
                <ChevronRight className="w-5 h-5" />
              </>
            ) : (
              'Get Started'
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}