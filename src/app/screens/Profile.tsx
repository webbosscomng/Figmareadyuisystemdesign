import { ChevronRight, Bell, Globe, HelpCircle, FileText, Crown, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Profile() {
  const navigate = useNavigate();

  const handleViewOnboarding = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-[#0B1220] pb-24">
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#F8FAFC] mb-1">Profile</h1>
          <p className="text-[#94A3B8] text-sm">Manage your account settings</p>
        </div>

        {/* Subscription Status */}
        <div className="bg-gradient-to-r from-[#22C55E]/20 to-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg p-4 mb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#22C55E]" />
              <h3 className="text-[#F8FAFC] font-semibold">Premium Member</h3>
            </div>
            <span className="bg-[#22C55E] text-white text-xs px-2 py-1 rounded font-medium">
              ACTIVE
            </span>
          </div>
          <p className="text-[#94A3B8] text-sm mb-3">
            Your subscription renews on March 19, 2026
          </p>
          <button className="text-[#22C55E] text-sm font-medium">
            Manage Subscription
          </button>
        </div>

        {/* Premium Banner */}
        <div className="bg-gradient-to-r from-[#F59E0B]/20 to-[#EF4444]/20 border border-[#F59E0B]/30 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-[#F8FAFC] font-semibold">Unlock Pro Insights</h3>
          </div>
          <p className="text-[#94A3B8] text-sm mb-3">
            Get unlimited access to all features
          </p>
          <ul className="space-y-1 mb-4">
            <li className="text-[#94A3B8] text-sm flex items-center gap-2">
              <span className="text-[#22C55E]">✓</span>
              Unlimited Match Insights
            </li>
            <li className="text-[#94A3B8] text-sm flex items-center gap-2">
              <span className="text-[#22C55E]">✓</span>
              Value Picks Feed
            </li>
            <li className="text-[#94A3B8] text-sm flex items-center gap-2">
              <span className="text-[#22C55E]">✓</span>
              Bankroll Optimization
            </li>
            <li className="text-[#94A3B8] text-sm flex items-center gap-2">
              <span className="text-[#22C55E]">✓</span>
              Early Access Alerts
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white py-2.5 rounded-lg font-semibold">
            Start 7-Day Free Trial
          </button>
          <p className="text-center text-[#94A3B8] text-xs mt-2">
            ₦7,000/month • Cancel anytime
          </p>
        </div>

        {/* Settings */}
        <div className="space-y-2 mb-6">
          <button className="w-full bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between hover:border-[#94A3B8]/50 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#94A3B8]" />
              <span className="text-[#F8FAFC] font-medium">Manage Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>

          <button className="w-full bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between hover:border-[#94A3B8]/50 transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#94A3B8]" />
              <span className="text-[#F8FAFC] font-medium">Preferred Leagues</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>

          <button className="w-full bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between hover:border-[#94A3B8]/50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#94A3B8]" />
              <span className="text-[#F8FAFC] font-medium">Disclaimer</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>

          <button className="w-full bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between hover:border-[#94A3B8]/50 transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#94A3B8]" />
              <span className="text-[#F8FAFC] font-medium">Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>

          <button className="w-full bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between hover:border-[#94A3B8]/50 transition-colors" onClick={handleViewOnboarding}>
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#94A3B8]" />
              <span className="text-[#F8FAFC] font-medium">View Onboarding</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
          </button>
        </div>

        {/* Footer Info */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
          <h4 className="text-[#F8FAFC] font-medium mb-2">Important Notice</h4>
          <p className="text-[#94A3B8] text-xs leading-relaxed">
            This platform provides analytical insights and probability estimates for educational purposes.
            We do not facilitate betting and are not responsible for any financial decisions made based on
            this information. Please gamble responsibly.
          </p>
        </div>
      </div>
    </div>
  );
}