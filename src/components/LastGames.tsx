'use client';

import { formatDate } from '@/lib/date-utils';

interface Game {
  opponent: string;
  score: string;
  date: string;
  result: 'win' | 'loss' | 'draw';
}

interface LastGamesProps {
  homeTeamGames?: Game[];
  awayTeamGames?: Game[];
}

const LastGames: React.FC<LastGamesProps> = ({
  homeTeamGames = [
    { opponent: 'Barcelona', score: '2-1', date: '2024-03-10', result: 'win' },
    { opponent: 'Atletico Madrid', score: '0-0', date: '2024-03-03', result: 'draw' },
    { opponent: 'Real Madrid', score: '1-3', date: '2024-02-25', result: 'loss' },
  ],
  awayTeamGames = [
    { opponent: 'Sevilla', score: '1-0', date: '2024-03-10', result: 'win' },
    { opponent: 'Valencia', score: '2-2', date: '2024-03-03', result: 'draw' },
    { opponent: 'Athletic Bilbao', score: '0-1', date: '2024-02-25', result: 'loss' },
  ],
}) => {
  const getResultColor = (result: string) => {
    switch (result) {
      case 'win':
        return 'bg-green-100 text-green-800';
      case 'loss':
        return 'bg-red-100 text-red-800';
      case 'draw':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultText = (result: string) => {
    switch (result) {
      case 'win':
        return 'برد';
      case 'loss':
        return 'باخت';
      case 'draw':
        return 'مساوی';
      default:
        return result;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">آخرین بازی‌ها</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Home Team Games */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Girona FC</h3>
          <div className="space-y-4">
            {homeTeamGames.map((game, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{game.opponent}</div>
                  <div className="text-sm text-gray-500">{formatDate(game.date)}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{game.score}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getResultColor(game.result)}`}>
                    {getResultText(game.result)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Away Team Games */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Real Betis</h3>
          <div className="space-y-4">
            {awayTeamGames.map((game, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{game.opponent}</div>
                  <div className="text-sm text-gray-500">{formatDate(game.date)}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{game.score}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getResultColor(game.result)}`}>
                    {getResultText(game.result)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastGames; 