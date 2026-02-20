import { useState } from 'react';
import { Settings, RotateCcw } from 'lucide-react';

export function DevTools() {
  const [isOpen, setIsOpen] = useState(false);

  const resetOnboarding = () => {
    localStorage.removeItem('onboarding_completed');
    window.location.href = '/welcome';
  };

  // Only show in development
  if (import.meta.env.PROD) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-50 w-12 h-12 bg-[#F59E0B] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F59E0B]/90 transition-colors"
        title="Dev Tools"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Dev Tools Panel */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 z-50 bg-[#111827] border border-[#1F2937] rounded-lg p-4 shadow-xl w-64">
          <h3 className="text-[#F8FAFC] font-semibold mb-3">Dev Tools</h3>
          <button
            onClick={resetOnboarding}
            className="w-full bg-[#EF4444] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#EF4444]/90 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Onboarding
          </button>
        </div>
      )}
    </>
  );
}
