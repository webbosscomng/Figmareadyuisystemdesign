import { Home, TrendingUp, Wallet, BarChart3, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/value-picks', icon: TrendingUp, label: 'Value Picks' },
  { path: '/bankroll', icon: Wallet, label: 'Bankroll' },
  { path: '/performance', icon: BarChart3, label: 'Performance' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111827] border-t border-[#1F2937] px-2 pb-2 pt-1 z-50">
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#F8FAFC]'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
