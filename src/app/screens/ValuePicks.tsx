import { useState } from 'react';
import { RiskBadge } from '../components/RiskBadge';
import { valuePicks } from '../data/mockData';
import { ArrowUpDown } from 'lucide-react';

type SortOption = 'ev' | 'risk' | 'time';

export function ValuePicks() {
  const [sortBy, setSortBy] = useState<SortOption>('ev');

  const sortedPicks = [...valuePicks].sort((a, b) => {
    if (sortBy === 'ev') return b.expectedValue - a.expectedValue;
    if (sortBy === 'risk') {
      const riskOrder = { low: 0, medium: 1, high: 2 };
      return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
    }
    return a.kickoff.localeCompare(b.kickoff);
  });

  return (
    <div className="min-h-screen bg-[#0B1220] pb-24">
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#F8FAFC] mb-1">Value Picks</h1>
          <p className="text-[#94A3B8] text-sm">Today's highest expected value opportunities</p>
        </div>

        {/* Sort Options */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setSortBy('ev')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              sortBy === 'ev'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Highest EV
          </button>
          <button
            onClick={() => setSortBy('risk')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              sortBy === 'risk'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Lowest Risk
          </button>
          <button
            onClick={() => setSortBy('time')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              sortBy === 'time'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Soonest Kickoff
          </button>
        </div>

        {/* Value Picks List */}
        <div className="space-y-3">
          {sortedPicks.map((pick) => (
            <div
              key={pick.id}
              className="bg-[#111827] border border-[#1F2937] rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-[#F8FAFC] font-medium mb-1">{pick.match}</h3>
                  <p className="text-[#94A3B8] text-sm">{pick.market}</p>
                </div>
                <div className="text-right">
                  <div className="text-[#94A3B8] text-xs">Kickoff</div>
                  <div className="text-[#F8FAFC] text-sm font-medium">{pick.kickoff}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <div className="text-[#94A3B8] text-xs mb-1">Probability</div>
                  <div className="text-[#F8FAFC] font-semibold">{pick.probability}%</div>
                </div>
                <div>
                  <div className="text-[#94A3B8] text-xs mb-1">Book Odds</div>
                  <div className="text-[#F8FAFC] font-semibold">{pick.bookOdds.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-[#94A3B8] text-xs mb-1">Fair Odds</div>
                  <div className="text-[#F8FAFC] font-semibold">{pick.fairOdds.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#1F2937]">
                <div className="flex items-center gap-2">
                  <div className="text-[#94A3B8] text-xs">Expected Value:</div>
                  <div className="text-[#22C55E] font-bold text-lg">+{pick.expectedValue}%</div>
                </div>
                <RiskBadge level={pick.riskLevel} size="sm" />
              </div>

              <button className="w-full mt-3 bg-[#F8FAFC] text-[#0B1220] py-2.5 rounded-lg font-medium hover:bg-[#F8FAFC]/90 transition-colors">
                View Insight
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
