import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Check, X } from 'lucide-react';
import { getMatchDetail } from '../data/mockData';
import { ProbabilityBar } from '../components/ProbabilityBar';
import { RiskBadge } from '../components/RiskBadge';

export function MatchDetail() {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const matchDetail = getMatchDetail(matchId || '');

  if (!matchDetail) {
    return (
      <div className="min-h-screen bg-[#0B1220] flex items-center justify-center">
        <p className="text-[#94A3B8]">Match not found</p>
      </div>
    );
  }

  const { match, markets, volatilityScore, aiInsights } = matchDetail;

  return (
    <div className="min-h-screen bg-[#0B1220] pb-8">
      {/* Header */}
      <div className="bg-[#111827] border-b border-[#1F2937] px-4 py-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#F8FAFC] mb-3"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center">
                {match.homeTeam[0]}
              </div>
              <span className="text-lg font-semibold text-[#F8FAFC]">{match.homeTeam}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center">
                {match.awayTeam[0]}
              </div>
              <span className="text-lg font-semibold text-[#F8FAFC]">{match.awayTeam}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#F8FAFC] font-medium">{match.time}</div>
            <div className="text-[#94A3B8] text-sm">{match.league}</div>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {/* Outcome Probabilities */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Outcome Probabilities</h3>
          <ProbabilityBar
            home={match.homeProbability}
            draw={match.drawProbability}
            away={match.awayProbability}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
          />
        </div>

        {/* Key Markets */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Key Markets</h3>
          <div className="space-y-3">
            {markets.map((market, index) => (
              <div
                key={index}
                className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-3"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-[#F8FAFC] font-medium mb-1">{market.name}</h4>
                    <div className="text-2xl font-bold text-[#F8FAFC] mb-2">
                      {market.probability}%
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {market.hasValue ? (
                      <div className="flex items-center gap-1 bg-[#22C55E]/20 text-[#22C55E] px-2 py-1 rounded text-xs font-medium">
                        <Check className="w-3 h-3" />
                        VALUE
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-[#EF4444]/20 text-[#EF4444] px-2 py-1 rounded text-xs font-medium">
                        <X className="w-3 h-3" />
                        NO
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-[#94A3B8] text-xs">Fair Odds</div>
                    <div className="text-[#F8FAFC] font-semibold">{market.fairOdds.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-[#94A3B8] text-xs">Book Odds</div>
                    <div className="text-[#F8FAFC] font-semibold">{market.bookOdds.toFixed(2)}</div>
                  </div>
                  {market.expectedValue && (
                    <div className="col-span-2">
                      <div className="text-[#94A3B8] text-xs">Expected Value</div>
                      <div className="text-[#22C55E] font-semibold">+{market.expectedValue}%</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Rating */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Risk Rating</h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[#94A3B8] text-sm mb-1">Volatility Score</div>
              <div className="text-3xl font-bold text-[#F8FAFC]">{volatilityScore}/100</div>
            </div>
            <RiskBadge level={match.riskLevel} />
          </div>
          <p className="text-[#94A3B8] text-sm">
            This fixture shows moderate unpredictability due to away defensive variance.
          </p>
        </div>

        {/* AI Analysis */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🧠</span>
            <h3 className="text-lg font-semibold text-[#F8FAFC]">AI Analysis</h3>
          </div>
          <ul className="space-y-2">
            {aiInsights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2 text-[#94A3B8] text-sm">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
