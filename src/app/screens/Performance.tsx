import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { performanceData } from '../data/mockData';

type TabOption = 'month' | 'all' | 'leagues';

export function Performance() {
  const [activeTab, setActiveTab] = useState<TabOption>('month');

  return (
    <div className="min-h-screen bg-[#0B1220] pb-24">
      <div className="p-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#F8FAFC] mb-1">Performance</h1>
          <p className="text-[#94A3B8] text-sm">Track your platform statistics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <div className="text-[#94A3B8] text-xs mb-1">Total Picks</div>
            <div className="text-2xl font-bold text-[#F8FAFC]">
              {performanceData.totalPicks.toLocaleString()}
            </div>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <div className="text-[#94A3B8] text-xs mb-1">Win Rate</div>
            <div className="text-2xl font-bold text-[#22C55E]">{performanceData.winRate}%</div>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <div className="text-[#94A3B8] text-xs mb-1">ROI</div>
            <div className="text-2xl font-bold text-[#22C55E]">+{performanceData.roi}%</div>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <div className="text-[#94A3B8] text-xs mb-1">Best League</div>
            <div className="text-2xl font-bold text-[#F8FAFC]">{performanceData.bestLeague}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('month')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'month'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setActiveTab('leagues')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'leagues'
                ? 'bg-[#F8FAFC] text-[#0B1220]'
                : 'bg-[#111827] text-[#94A3B8] border border-[#1F2937]'
            }`}
          >
            League Breakdown
          </button>
        </div>

        {/* Content */}
        {activeTab === 'month' && (
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Monthly ROI</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData.monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                <XAxis
                  dataKey="month"
                  stroke="#94A3B8"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#94A3B8"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #1F2937',
                    borderRadius: '8px',
                    color: '#F8FAFC',
                  }}
                  formatter={(value: number) => [`${value}%`, 'ROI']}
                />
                <Line
                  type="monotone"
                  dataKey="roi"
                  stroke="#22C55E"
                  strokeWidth={2}
                  dot={{ fill: '#22C55E', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'all' && (
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">All Time Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-[#1F2937]">
                <span className="text-[#94A3B8]">Total Bets Analyzed</span>
                <span className="text-[#F8FAFC] font-semibold">
                  {performanceData.totalPicks.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1F2937]">
                <span className="text-[#94A3B8]">Overall Win Rate</span>
                <span className="text-[#22C55E] font-semibold">{performanceData.winRate}%</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1F2937]">
                <span className="text-[#94A3B8]">Average ROI</span>
                <span className="text-[#22C55E] font-semibold">+{performanceData.roi}%</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[#94A3B8]">Best Performing League</span>
                <span className="text-[#F8FAFC] font-semibold">{performanceData.bestLeague}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leagues' && (
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">League Breakdown</h3>
            <div className="space-y-3">
              {performanceData.leagueBreakdown.map((league, index) => (
                <div
                  key={index}
                  className="bg-[#0B1220] border border-[#1F2937] rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#F8FAFC] font-medium">{league.league}</h4>
                    <span className="text-[#94A3B8] text-sm">{league.picks} picks</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-[#94A3B8] text-xs">Win Rate</div>
                      <div className="text-[#22C55E] font-semibold">{league.winRate}%</div>
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs">ROI</div>
                      <div className="text-[#22C55E] font-semibold">+{league.roi}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
