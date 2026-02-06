import React from 'react';

export interface Stat {
  value: string;
  label: string;
  gradient?: string;
}

interface StatTileProps {
  value: string;
  label: string;
  gradient?: string;
}

const StatTile: React.FC<StatTileProps> = ({
  value,
  label,
  gradient = 'from-cyan-400 to-purple-400',
}) => {
  return (
    <div className="text-center">
      <div
        className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {value}
      </div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  );
};

export default StatTile;
