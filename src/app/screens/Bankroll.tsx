import { useState } from 'react';

type RiskProfile = 'conservative' | 'balanced' | 'aggressive';

export function Bankroll() {
  const [bankroll, setBankroll] = useState('100000');
  const [riskProfile, setRiskProfile] = useState<RiskProfile>('balanced');
  const [showResults, setShowResults] = useState(false);

  const calculateStake = () => {
    const amount = parseFloat(bankroll);
    if (isNaN(amount)) return 0;

    const percentages = {
      conservative: 0.02,
      balanced: 0.03,
      aggressive: 0.05,
    };

    return amount * percentages[riskProfile];
  };

  const calculateMaxExposure = () => {
    return calculateStake() * 4;
  };

  const getStopLossRule = () => {
    const rules = {
      conservative: 2,
      balanced: 3,
      aggressive: 4,
    };
    return rules[riskProfile];
  };

  const getProjectedROI = () => {
    const roi = {
      conservative: '4–8%',
      balanced: '6–12%',
      aggressive: '10–18%',
    };
    return roi[riskProfile];
  };

  const handleGeneratePlan = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] pb-24">
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#F8FAFC] mb-1">Bankroll Management</h1>
          <p className="text-[#94A3B8] text-sm">Build a sustainable betting strategy</p>
        </div>

        {/* Input Section */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 mb-4">
          <label className="block text-[#F8FAFC] font-medium mb-2">
            Enter Bankroll
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">₦</span>
            <input
              type="text"
              value={bankroll}
              onChange={(e) => setBankroll(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-[#0B1220] text-[#F8FAFC] border border-[#1F2937] rounded-lg py-3 pl-8 pr-4 text-lg font-semibold"
              placeholder="100,000"
            />
          </div>
        </div>

        {/* Risk Profile */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 mb-4">
          <label className="block text-[#F8FAFC] font-medium mb-3">Risk Profile</label>
          <div className="space-y-2">
            {(['conservative', 'balanced', 'aggressive'] as RiskProfile[]).map((profile) => (
              <button
                key={profile}
                onClick={() => setRiskProfile(profile)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  riskProfile === profile
                    ? 'bg-[#F8FAFC]/10 border-[#F8FAFC]'
                    : 'bg-[#0B1220] border-[#1F2937]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    riskProfile === profile ? 'border-[#F8FAFC]' : 'border-[#94A3B8]'
                  }`}
                >
                  {riskProfile === profile && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F8FAFC]" />
                  )}
                </div>
                <span className="text-[#F8FAFC] font-medium capitalize">{profile}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGeneratePlan}
          className="w-full bg-[#F8FAFC] text-[#0B1220] py-3 rounded-lg font-semibold hover:bg-[#F8FAFC]/90 transition-colors mb-4"
        >
          Generate Plan
        </button>

        {/* Results */}
        {showResults && (
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#F8FAFC]">Your Betting Plan</h3>

            <div className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-4">
              <div className="text-[#94A3B8] text-sm mb-1">Recommended Stake Per Pick</div>
              <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
                ₦{calculateStake().toLocaleString('en-NG', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[#94A3B8] text-xs">
                ({(riskProfile === 'conservative' ? 2 : riskProfile === 'balanced' ? 3 : 5)}% of bankroll)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-3">
                <div className="text-[#94A3B8] text-xs mb-1">Max Daily Exposure</div>
                <div className="text-xl font-bold text-[#F8FAFC]">
                  ₦{calculateMaxExposure().toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-3">
                <div className="text-[#94A3B8] text-xs mb-1">Stop-Loss Rule</div>
                <div className="text-xl font-bold text-[#F8FAFC]">
                  {getStopLossRule()} losses
                </div>
              </div>
            </div>

            <div className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-4">
              <div className="text-[#94A3B8] text-sm mb-1">Weekly Simulation</div>
              <div className="text-[#F8FAFC] font-medium mb-2">Projected ROI</div>
              <div className="text-2xl font-bold text-[#22C55E]">{getProjectedROI()}</div>
            </div>

            <p className="text-[#94A3B8] text-xs leading-relaxed">
              This plan is calculated based on your {riskProfile} risk profile and assumes disciplined
              betting on value picks with positive expected value. Past performance does not guarantee
              future results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
