import { RiskBadge } from './RiskBadge';
import type { Match } from '../data/mockData';

interface MatchCardProps {
  match: Match;
  onClick: () => void;
}

export function MatchCard({ match, onClick }: MatchCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 cursor-pointer hover:border-[#94A3B8]/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center text-xs">
              {match.homeTeam[0]}
            </div>
            <span className="text-[#F8FAFC] font-medium">{match.homeTeam}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center text-xs">
              {match.awayTeam[0]}
            </div>
            <span className="text-[#F8FAFC] font-medium">{match.awayTeam}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[#94A3B8] text-sm">{match.time}</div>
          <div className="text-[#94A3B8] text-xs">{match.league}</div>
        </div>
      </div>

      <div className="space-y-1 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#94A3B8] w-12">Home</span>
          <div className="flex-1 h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#22C55E]"
              style={{ width: `${match.homeProbability}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-[#F8FAFC] w-10 text-right">
            {match.homeProbability}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#94A3B8] w-12">Draw</span>
          <div className="flex-1 h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#94A3B8]"
              style={{ width: `${match.drawProbability}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-[#F8FAFC] w-10 text-right">
            {match.drawProbability}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#94A3B8] w-12">Away</span>
          <div className="flex-1 h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#EF4444]"
              style={{ width: `${match.awayProbability}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-[#F8FAFC] w-10 text-right">
            {match.awayProbability}%
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <RiskBadge level={match.riskLevel} size="sm" />
        <span className="text-xs text-[#94A3B8]">
          {match.valueMarketsCount} Value Market{match.valueMarketsCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}
