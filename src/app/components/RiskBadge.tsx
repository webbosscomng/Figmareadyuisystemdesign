interface RiskBadgeProps {
  level: 'low' | 'medium' | 'high';
  size?: 'sm' | 'md';
}

export function RiskBadge({ level, size = 'md' }: RiskBadgeProps) {
  const colors = {
    low: 'bg-[#22C55E]/20 text-[#22C55E]',
    medium: 'bg-[#F59E0B]/20 text-[#F59E0B]',
    high: 'bg-[#EF4444]/20 text-[#EF4444]',
  };

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span className={`${colors[level]} ${sizeClasses} rounded font-medium uppercase`}>
      {level}
    </span>
  );
}
