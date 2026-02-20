export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  time: string;
  date: string;
  homeProbability: number;
  drawProbability: number;
  awayProbability: number;
  riskLevel: 'low' | 'medium' | 'high';
  valueMarketsCount: number;
}

export interface Market {
  name: string;
  probability: number;
  fairOdds: number;
  bookOdds: number;
  hasValue: boolean;
  expectedValue?: number;
}

export interface MatchDetail {
  match: Match;
  markets: Market[];
  volatilityScore: number;
  aiInsights: string[];
}

export const leagues = [
  { id: 'all', name: 'All Leagues' },
  { id: 'epl', name: 'Premier League' },
  { id: 'laliga', name: 'La Liga' },
  { id: 'bundesliga', name: 'Bundesliga' },
  { id: 'seriea', name: 'Serie A' },
  { id: 'ligue1', name: 'Ligue 1' },
];

export const todayMatches: Match[] = [
  {
    id: '1',
    homeTeam: 'Arsenal',
    awayTeam: 'Man United',
    league: 'Premier League',
    time: '20:00',
    date: 'Today',
    homeProbability: 54,
    drawProbability: 26,
    awayProbability: 20,
    riskLevel: 'medium',
    valueMarketsCount: 2,
  },
  {
    id: '2',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    league: 'La Liga',
    time: '21:00',
    date: 'Today',
    homeProbability: 48,
    drawProbability: 28,
    awayProbability: 24,
    riskLevel: 'high',
    valueMarketsCount: 3,
  },
  {
    id: '3',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    league: 'Bundesliga',
    time: '18:30',
    date: 'Today',
    homeProbability: 61,
    drawProbability: 23,
    awayProbability: 16,
    riskLevel: 'low',
    valueMarketsCount: 1,
  },
  {
    id: '4',
    homeTeam: 'Liverpool',
    awayTeam: 'Chelsea',
    league: 'Premier League',
    time: '17:30',
    date: 'Today',
    homeProbability: 52,
    drawProbability: 27,
    awayProbability: 21,
    riskLevel: 'medium',
    valueMarketsCount: 2,
  },
  {
    id: '5',
    homeTeam: 'Inter Milan',
    awayTeam: 'AC Milan',
    league: 'Serie A',
    time: '19:45',
    date: 'Today',
    homeProbability: 44,
    drawProbability: 31,
    awayProbability: 25,
    riskLevel: 'high',
    valueMarketsCount: 4,
  },
];

export const getMatchDetail = (matchId: string): MatchDetail | null => {
  const match = todayMatches.find((m) => m.id === matchId);
  if (!match) return null;

  return {
    match,
    markets: [
      {
        name: 'Over 2.5 Goals',
        probability: 63,
        fairOdds: 1.58,
        bookOdds: 1.8,
        hasValue: true,
        expectedValue: 11,
      },
      {
        name: 'BTTS (Both Teams To Score)',
        probability: 58,
        fairOdds: 1.72,
        bookOdds: 1.65,
        hasValue: false,
      },
      {
        name: 'Over 1.5 Goals',
        probability: 81,
        fairOdds: 1.23,
        bookOdds: 1.3,
        hasValue: true,
        expectedValue: 5,
      },
      {
        name: 'Under 3.5 Goals',
        probability: 42,
        fairOdds: 2.38,
        bookOdds: 2.2,
        hasValue: false,
      },
    ],
    volatilityScore: 62,
    aiInsights: [
      `${match.homeTeam} average 2.1 xG at home`,
      `${match.awayTeam} concede 1.8 xGA away`,
      '4/5 last meetings saw 3+ goals',
      'Both teams scoring trend above league average',
    ],
  };
};

export const valuePicks = [
  {
    id: '1',
    match: 'Arsenal vs Man United',
    market: 'Over 2.5 Goals',
    probability: 63,
    bookOdds: 1.8,
    fairOdds: 1.58,
    expectedValue: 11,
    riskLevel: 'medium' as const,
    kickoff: '20:00',
  },
  {
    id: '2',
    match: 'Barcelona vs Real Madrid',
    market: 'BTTS',
    probability: 71,
    bookOdds: 1.72,
    fairOdds: 1.41,
    expectedValue: 18,
    riskLevel: 'high' as const,
    kickoff: '21:00',
  },
  {
    id: '3',
    match: 'Bayern Munich vs Dortmund',
    market: 'Over 1.5 Goals',
    probability: 86,
    bookOdds: 1.25,
    fairOdds: 1.16,
    expectedValue: 7,
    riskLevel: 'low' as const,
    kickoff: '18:30',
  },
  {
    id: '4',
    match: 'Liverpool vs Chelsea',
    market: 'Over 2.5 Goals',
    probability: 67,
    bookOdds: 1.75,
    fairOdds: 1.49,
    expectedValue: 14,
    riskLevel: 'medium' as const,
    kickoff: '17:30',
  },
];

export const performanceData = {
  totalPicks: 1248,
  winRate: 61,
  roi: 8.4,
  bestLeague: 'EPL',
  monthlyData: [
    { month: 'Sep', roi: 6.2 },
    { month: 'Oct', roi: 7.8 },
    { month: 'Nov', roi: 9.1 },
    { month: 'Dec', roi: 8.4 },
    { month: 'Jan', roi: 10.2 },
    { month: 'Feb', roi: 8.4 },
  ],
  leagueBreakdown: [
    { league: 'Premier League', picks: 342, winRate: 64, roi: 9.2 },
    { league: 'La Liga', picks: 298, winRate: 59, roi: 7.8 },
    { league: 'Bundesliga', picks: 256, winRate: 62, roi: 8.6 },
    { league: 'Serie A', picks: 221, winRate: 58, roi: 7.1 },
    { league: 'Ligue 1', picks: 131, winRate: 60, roi: 8.0 },
  ],
};
