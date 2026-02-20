interface ProbabilityBarProps {
  home: number;
  draw: number;
  away: number;
  homeTeam: string;
  awayTeam: string;
}

export function ProbabilityBar({ home, draw, away, homeTeam, awayTeam }: ProbabilityBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#94A3B8] w-16">{homeTeam}</span>
        <div className="flex-1 h-2 bg-[#1F2937] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#22C55E]"
            style={{ width: `${home}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-[#F8FAFC] w-10 text-right">{home}%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#94A3B8] w-16">Draw</span>
        <div className="flex-1 h-2 bg-[#1F2937] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#94A3B8]"
            style={{ width: `${draw}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-[#F8FAFC] w-10 text-right">{draw}%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#94A3B8] w-16">{awayTeam}</span>
        <div className="flex-1 h-2 bg-[#1F2937] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#EF4444]"
            style={{ width: `${away}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-[#F8FAFC] w-10 text-right">{away}%</span>
      </div>
    </div>
  );
}
