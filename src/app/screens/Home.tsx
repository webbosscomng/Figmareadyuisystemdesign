import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MatchCard } from '../components/MatchCard';
import { todayMatches, leagues } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<'today' | 'tomorrow'>('today');
  const [selectedLeague, setSelectedLeague] = useState('all');

  const filteredMatches = todayMatches.filter((match) => {
    if (selectedLeague === 'all') return true;
    return match.league.toLowerCase().includes(selectedLeague.toLowerCase());
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-[#0B1220] pb-24">
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#F8FAFC] mb-1">
            {getGreeting()}, Matthew
          </h1>
          <p className="text-[#94A3B8] text-sm">Thursday, February 19, 2026</p>
        </div>

        {/* Date Selector */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setSelectedDay('today')}
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
              selectedDay === 'today'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedDay('tomorrow')}
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
              selectedDay === 'tomorrow'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            Tomorrow
          </button>
        </div>

        {/* League Filter */}
        <div className="mb-6">
          <div className="relative">
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="w-full bg-[#111827] text-[#F8FAFC] border border-[#1F2937] rounded-lg py-2.5 px-4 pr-10 appearance-none cursor-pointer"
            >
              {leagues.map((league) => (
                <option key={league.id} value={league.id}>
                  {league.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8] pointer-events-none" />
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-3">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onClick={() => navigate(`/match/${match.id}`)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#94A3B8]">No matches found for this league</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
